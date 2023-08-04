import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { bringOneCard } from "../../services/apiCalls";

import "./Detail.css";
import { Col, Container, Row, Spinner } from "react-bootstrap";

export const Detail = () => {
  const id = useParams().id;
  const [info, setInfo] = useState();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log(id);

  useEffect(() => {
    setLoading(true);
    setError(false);
    bringOneCard(id)
      .then((res) => {
        setInfo(res);
      })
      .catch((error) => {
        setError(true);
        console.log(`Error en la llamada bringCardsByName: ${error}`);
      })
      .finally(() => {
        setLoading(false);
        console.log(`Error en la llamada bringCardsByName: ${error}`);
      });
  }, []);

  console.log("Info", info);
  return (
    <>
      {!loading && !error && info && (
        <>
          <Container className="box-detail">
            <Row className="d-flex align-items-center justify-content-center">
              <Col
                sm={12}
                md={2}
                className="d-flex align-items-center justify-content-center"
              >
                <Link
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  Volver
                </Link>
              </Col>
              <Col sm={12} md={10}>
                <Row className="text-detail">
                  <Col className="d-flex align-items-center justify-content-center box-name-detail py-2">
                    <h1 className="align-items-center p-2 bg-success">
                      {info.name}
                    </h1>
                  </Col>
                </Row>
                {/* <Row className="bg-info py-4">
                  <Col className="text-detail color-detail">
                    <Row>
                      <Col>Elements:</Col>
                    </Row>
                    <Row>
                      <Col>
                        {info.colors &&
                          info.colors.map((color, i) => {
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
                    </Row>
                  </Col>
                  <Col className="text-detail mana-detail">
                    <Row>
                      <Col>Coste de maná:</Col>
                    </Row>
                    <Row>
                      <Col>{info ? info.manaCost : "No hay resultado"}</Col>
                    </Row>
                  </Col>
                  <Col className="text-detail mana-detail">
                    <Row>
                      <Col>Poder:</Col>
                    </Row>
                    <Row>
                      <Col>{info ? info.power : "No hay resultado"}</Col>
                    </Row>
                  </Col>
                  <Col className="text-detail type-detail">
                    <Row>
                      <Col>Tipo de carta:</Col>
                    </Row>
                    <Row>
                      <Col>{info ? info.type : "No hay resultado"}</Col>
                    </Row>
                  </Col>
                </Row> */}
                {/* <Row className="text-detail p-5">
                  <Col className="text-detail type-detail">
                    <Row>
                      <Col>Rareza:</Col>
                    </Row>
                    <Row>
                      <Col>{info ? info.rarity : "No hay resultado"}</Col>
                    </Row>
                  </Col>
                  <Col className="text-detail type-detail">
                    <Row>
                      <Col>Rareza:</Col>
                    </Row>
                    <Row>
                      <Col>{info ? info.rarity : "No hay resultado"}</Col>
                    </Row>
                  </Col>
                </Row> */}
              </Col>
            </Row>
          </Container>
        </>
      )}

      {loading && !error && (
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

      {error && (
        <>
          <Container className="box-detail">
            <Row>
              <Col className="title-detail">
                No se han encontrado resultados
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};
