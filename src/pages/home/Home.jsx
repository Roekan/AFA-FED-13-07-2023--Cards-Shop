import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCardsMagic } from "../../reducers/cardsSlice";
import { getUser } from "../../reducers/sliceUser";
import { Col, Container, Row, Pagination } from "react-bootstrap";
import "./Home.css";
import { bringCardsByName } from "../../services/apiCalls";
import { MagicCard } from "../../common/magicCard/MagicCard";
import { Searcher } from "../../common/searcher/Searcher";
import { Filter } from "../../common/filter/Filter";


export const Home = () => {
  const navigate = useNavigate();

  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [input, setInput] = useState("");
  const [colours, setColours] = useState("b,w,u,r,g");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const userEmailLogin = useSelector(getUser).user.email;
  const userName = useSelector(getUser).user.name;

  const calculateTotalPages = (res) => {
    if (res.headers["total-count"] % 100 == 0) {
      return Math.trunc(res.headers["total-count"] / 100);
    } else {
      return Math.trunc(res.headers["total-count"] / 100) + 1;
    }
  };

  const changeValue = (name) => {
    setPage(1);
    setInput(name);
  };

  const changeColours = (changedColours) => {
    setPage(1);
    setColours(changedColours);
  };

  useEffect(() => {
    setLoading(true);
    const bringData = setTimeout(() => {
      bringCardsByName(input, colours, page)
        .then((res) => {
          setLoading(false);
          setCards(res.cards);
          setTotalPages(calculateTotalPages(res));
          dispatch(addCardsMagic(res.cards));
        })
        .catch((error) => {
          console.log(`Error en la llamada bringCardsByName: ${error}`);
        });
    }, 500);
    return () => clearTimeout(bringData);
  }, [page, input, colours]);

  const cambiarPagina = (pag) => {
    // window.scrollTo({ top: anchor.current.offsetTop, behavior: "smooth" });
    let pagina = pag;
    if (pagina < 1) {
      pagina = 1;
    }
    if (pagina > totalPages) {
      pagina = totalPages;
    }
    setPage(pagina);
  };

  return (
    <>
      <Container fluid className="box-name-home">
        <Row className="d-flex align-items-center justify-content-center ">
          <Col className="d-flex align-items-center justify-content-start py-1" sm={11}>
            {userEmailLogin 
            ?<h6 className="login-home-logued">{`Bienvenido, ${userName}`}</h6>
            :<h6 className="login-home" onClick={()=>{navigate("/login")}}>¡¡Logueate!!</h6>
          }
          </Col>
        </Row>
      </Container>
      <Container fluid className="bg-dark box-searcher-home">
        <Row className="d-flex justify-content-center ">
          <Col sm={10}>
            <Row className="d-flex align-items-center justify-content-center ">
              <Col sm={12} lg={4} className="d-flex justify-content-center ">
                <Searcher changeValue={(e) => changeValue(e)} />
              </Col>
              <Col
                sm={12}
                lg={8}
                className="d-flex align-items-center justify-content-center text-info"
              >
                <Filter changeColours={(e) => changeColours(e)} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {!loading && cards && cards.length<=0 && (
        <>
          <Container
            fluid
            className="d-flex align-items-center justify-content-center flex-column bg-dark py-1 box-cards-home"
          >
            <Row>
                    <Col
                      className="rounded-2 my-2 d-flex align-items-center justify-content-center no-results"
                    >
                      <h2>No se han encontrado resultados</h2>
                    </Col>
            </Row>
            <Row>
              <Pagination className="mt-4 p-2 box-pagination-home">
                <Pagination.First
                  className="pagination-button-home"
                  disabled={page <= 1}
                  onClick={() => {
                    cambiarPagina(1);
                  }}
                />
                <Pagination.Prev
                  className="pagination-button-home"
                  disabled={page <= 1}
                  onClick={() => {
                    cambiarPagina(page - 1);
                  }}
                />

                <Pagination.Ellipsis />

                {page > 1 && (
                  <Pagination.Item
                    onClick={() => {
                      cambiarPagina(page - 1);
                    }}
                  >
                    {page - 1}
                  </Pagination.Item>
                )}

                <Pagination.Item active>{page}</Pagination.Item>

                {page < totalPages && (
                  <Pagination.Item
                    onClick={() => {
                      cambiarPagina(page + 1);
                    }}
                  >
                    {page + 1}
                  </Pagination.Item>
                )}

                <Pagination.Ellipsis />

                <Pagination.Next
                  className="pagination-button-home"
                  disabled={page >= totalPages}
                  onClick={() => {
                    cambiarPagina(page + 1);
                  }}
                />
                <Pagination.Last
                  className="pagination-button-home"
                  disabled={page >= totalPages}
                  onClick={() => {
                    cambiarPagina(totalPages);
                  }}
                />
              </Pagination>
            </Row>
          </Container>
        </>
      )}



{!loading && cards && cards.length>0 && (
        <>
          <Container
            fluid
            className="d-flex align-items-center justify-content-center flex-column bg-dark py-1 box-cards-home flip-vertical-right"
          >
            <Row className="wrapper">
              {cards &&
                cards.map((card) => {
                  return (
                    <Col
                      key={card.id}
                      className="rounded-2 my-2 d-flex align-items-center justify-content-center  flip-vertical-right"
                    >
                      <MagicCard
                        id={card.id}
                        name={card.name}
                        colors={card.colors}
                        type={card.type}
                        image={card.imageUrl}
                        rarity={card.rarity}
                        info={card.text}
                        {...card}
                      />
                    </Col>
                  );
                })}
            </Row>
            <Row>
              <Pagination className="mt-4 p-2 box-pagination-home">
                <Pagination.First
                  className="pagination-button-home"
                  disabled={page <= 1}
                  onClick={() => {
                    cambiarPagina(1);
                  }}
                />
                <Pagination.Prev
                  className="pagination-button-home"
                  disabled={page <= 1}
                  onClick={() => {
                    cambiarPagina(page - 1);
                  }}
                />

                <Pagination.Ellipsis />

                {page > 1 && (
                  <Pagination.Item
                    onClick={() => {
                      cambiarPagina(page - 1);
                    }}
                  >
                    {page - 1}
                  </Pagination.Item>
                )}

                <Pagination.Item active>{page}</Pagination.Item>

                {page < totalPages && (
                  <Pagination.Item
                    onClick={() => {
                      cambiarPagina(page + 1);
                    }}
                  >
                    {page + 1}
                  </Pagination.Item>
                )}

                <Pagination.Ellipsis />

                <Pagination.Next
                  className="pagination-button-home"
                  disabled={page >= totalPages}
                  onClick={() => {
                    cambiarPagina(page + 1);
                  }}
                />
                <Pagination.Last
                  className="pagination-button-home"
                  disabled={page >= totalPages}
                  onClick={() => {
                    cambiarPagina(totalPages);
                  }}
                />
              </Pagination>
            </Row>
          </Container>
        </>
      )}



      {loading && (
        <Container className="box-detail">
          <Row className="d-flex align-items-center justify-content-center box-detail p-5">
            <Col
              sm={12}
              className="d-flex align-items-center justify-content-center box-detail "
            >
              {
                <img
                  className="rounded-4"
                  src={`/public/images/load/load-${Math.trunc(
                    1 + Math.random() * 8
                  )}.gif`}
                  alt="load-img"
                />
              }
            </Col>
            <Col
              sm={12}
              className="d-flex align-items-center justify-content-center box-detail py-2 text-light"
            >
              Cargando...
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};
