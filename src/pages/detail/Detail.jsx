import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import { getCardsMagic } from "../../reducers/cardsSlice";
import NotFound from '/public/images/elements/no-encontrado.png'
import Black from '/public/images/elements/black.png'
import Blue from '/public/images/elements/blue.png'
import Green from '/public/images/elements/green.png'
import Red from '/public/images/elements/red.png'
import White from '/public/images/elements/white.png'
import NoImage from "/public/images/no-image.jpg"
import Load1 from '/public/images/load/load-1.gif'
import Load2 from '/public/images/load/load-2.gif'
import Load3 from '/public/images/load/load-3.gif'
import Load4 from '/public/images/load/load-4.gif'
import Load5 from '/public/images/load/load-5.gif'
import Load6 from '/public/images/load/load-6.gif'
import Load7 from '/public/images/load/load-7.gif'
import Load8 from '/public/images/load/load-8.gif'
import Load9 from '/public/images/load/load-9.gif'

import "./Detail.css";


export const Detail = () => {
  const id = useParams().id;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [card, setCard] = useState(null);
  const [imgLoad, setImgLoad] = useState();

  let cards = useSelector(getCardsMagic);

  useEffect(() => {
    let imgValue =  Math.trunc(1 + Math.random() * 8);
    setImgLoad(imgValue)
    setLoading(true);
    setCard(cards.cardsMagic.find((card) => card.id === id));
    setLoading(false);
  }, []);



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
                                src={White}
                              />
                            )}
                            {color == "U" && (
                              <img
                                className="img-color-magiccard"
                                src={Blue}
                              />
                            )}
                            {color == "G" && (
                              <img
                                className="img-color-magiccard"
                                src={Green}
                              />
                            )}
                            {color == "B" && (
                              <img
                                className="img-color-magiccard"
                                src={Black}
                              />
                            )}
                            {color == "R" && (
                              <img
                                className="img-color-magiccard"
                                src={Red}
                              />
                            )}
                            {color == "" && (
                              <img
                                className="img-color-magiccard"
                                src={NotFound}
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
                          : {NoImage}
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
                            src={White}
                            alt=""
                          />
                        )}
                        {character == "B" && (
                          <img
                            className=" img-color-magiccard"
                            src={Black}
                            alt=""
                          />
                        )}
                        {character == "U" && (
                          <img
                            className=" img-color-magiccard"
                            src={Blue}
                            alt=""
                          />
                        )}
                        {character == "R" && (
                          <img
                            className=" img-color-magiccard"
                            src={Red}
                            alt=""
                          />
                        )}
                        {character == "G" && (
                          <img
                            className=" img-color-magiccard"
                            src={Green}
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
                  src={images[imgLoad]}
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
