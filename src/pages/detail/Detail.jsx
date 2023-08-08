import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { bringOneCard } from "../../services/apiCalls";
import "./Detail.css";
import { Col, Container, Row } from "react-bootstrap";
import { getCardsMagic } from "../../reducers/cardsSlice";

export const Detail = () => {
  const id = useParams().id;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [card, setCard] = useState(null);

  let cards = useSelector(getCardsMagic);

  useEffect(() => {
    setLoading(true);
    setCard(cards.cardsMagic.find((card) => card.id === id));
    setLoading(false);
  }, []);

  //  console.log('Card: ',card);



  return (
    <>
      {!loading && card && (
        <>
          <Container className="box-detail">
            <Row className="d-flex align-items-center justify-content-center">
              <Col
                sm={12}
                md={1}
                className="d-flex align-items-top justify-content-center py-3 box-btn-back"
              >
                <Link
                className="p-2 rounded btn-back"
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  Volver
                </Link>
              </Col>
              <Col sm={12} md={11}>
                <Row className="text-detail">
                  <Col className="d-flex align-items-center justify-content-center py-2">
                    <h1 className="align-items-center p-2 title-detail">
                      {card.name}
                    </h1>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col
                className="d-flex align-items-center justify-content-center "
                sm={12}
                md={4}
              >
                <Row>
                  <Col
                    sm={12}
                    className="d-flex align-items-center justify-content-center pt-4 title-text-detail"
                  >
                    Elements:
                  </Col>
                  <Col
                    sm={12}
                    className="d-flex align-items-center justify-content-center pb-4 "
                  >
                    {card.colors &&
                      card.colors.map((color, i) => {
                        return (
                          <div className="d-inline p-1 flex-row " key={i}>
                            {color == "W" && (
                              <img
                                className="img-color-magiccard"
                                src="./../../public/images/elements/white.png"
                              />
                            )}
                            {color == "U" && (
                              <img
                                className="img-color-magiccard"
                                src="./../../public/images/elements/blue.png"
                              />
                            )}
                            {color == "G" && (
                              <img
                                className="img-color-magiccard"
                                src="./../../public/images/elements/green.png"
                              />
                            )}
                            {color == "B" && (
                              <img
                                className="img-color-magiccard"
                                src="./../../public/images/elements/black.png"
                              />
                            )}
                            {color == "R" && (
                              <img
                                className="img-color-magiccard"
                                src="./../../public/images/elements/red.png"
                              />
                            )}
                            {color == "" && (
                              <img
                                className="img-color-magiccard"
                                src="./../../public/images/elements/no-encontrado.png"
                              />
                            )}
                          </div>
                        );
                      })}
                  </Col>

                  <Col className="">
                    <Row>
                      <Col className="d-flex align-items-top justify-content-center pt-4 title-text-detail">
                        Rareza:
                      </Col>
                    </Row>
                    <Row>
                      <Col className="d-flex align-items-top justify-content-center pb-4 text-detail">
                        {card.rarity}
                      </Col>
                    </Row>
                  </Col>

                  <Col sm={12} className="py-4">
                    <Row>
                      <Col className="d-flex align-items-top justify-content-center pt-4 title-text-detail">
                        Artista:
                      </Col>
                    </Row>
                    <Row>
                      <Col className="d-flex align-items-top justify-content-center pb-4 text-detail">
                        {card.artist}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>

              <Col
                className="d-flex align-items-center justify-content-center py-4 "
                sm={12}
                md={4}
              >
                <Row>
                  <Col sm={12} md={6}>
                    <img
                      className="rounded-4 img-detail"
                      src={
                        card.imageUrl
                          ? card.imageUrl
                          : "./../../public/images/no-image.jpg"
                      }
                      alt=""
                    />
                  </Col>
                </Row>
              </Col>
              <Col
                className="d-flex align-items-center justify-content-center"
                sm={12}
                md={4}
              >
                <Row>
                  <Col
                    sm={12}
                    className="d-flex align-items-center justify-content-center pt-4 title-text-detail"
                  >
                    Coste de maná:
                  </Col>
                  <Col
                    sm={12}
                    className="d-flex align-items-center justify-content-center pb-4 "
                  >
                    {[...card.manaCost].map((character, i) => (
                      <div key={i}>
                        {character > 0 && (
                          <span className="me-2">{card.manaCost[1]}</span>
                        )}
                        {character == "W" && (
                          <img
                            className=" img-color-magiccard"
                            src="./../../public/images/elements/white.png"
                            alt=""
                          />
                        )}
                        {character == "B" && (
                          <img
                            className=" img-color-magiccard"
                            src="./../../public/images/elements/black.png"
                            alt=""
                          />
                        )}
                        {character == "U" && (
                          <img
                            className=" img-color-magiccard"
                            src="./../../public/images/elements/blue.png"
                            alt=""
                          />
                        )}
                        {character == "R" && (
                          <img
                            className=" img-color-magiccard"
                            src="./../../public/images/elements/red.png"
                            alt=""
                          />
                        )}
                        {character == "G" && (
                          <img
                            className=" img-color-magiccard"
                            src="./../../public/images/elements/green.png"
                            alt=""
                          />
                        )}
                      </div>
                    ))}
                  </Col>

                  <Col className="py-4">
                    <Row>
                      <Col className="d-flex align-items-center justify-content-center pt-4 title-text-detail">
                        Tipo de carta:
                      </Col>
                    </Row>
                    <Row>
                      <Col className="d-flex align-items-top justify-content-center pb-4 text-detail">
                        {card.type }
                      </Col>
                    </Row>
                  </Col>

                  <Col sm={12} className="py-4">
                    <Row>
                      <Col className="d-flex align-items-top justify-content-center pt-4 title-text-detail">
                        Poder:
                      </Col>
                    </Row>
                    <Row>
                      <Col className="d-flex align-items-top justify-content-center pb-4 text-detail">
                        {card.power ? card.power : "No hay resultado"}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="d-flex align-items-center justify-content-center">
              <Col sm={12} md={11}>
                <Row className="text-detail">
                  <Col className="d-flex align-items-center justify-content-center py-2 text-detail">
                    <p className="align-items-center p-2">
                      {card.text}
                    </p>
                  </Col>
                </Row>
              </Col>
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
                  src={`./../../public/images/load/load-${Math.trunc(
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
              Loading...
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};
