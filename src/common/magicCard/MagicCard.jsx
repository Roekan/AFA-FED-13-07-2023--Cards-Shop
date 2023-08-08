import React from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorites,
  deleteFavorites,
  getFavorites,
} from "./../../reducers/sliceFavorites/";
import {
    addProducts,
    deleteProducts,
    getProducts,
  } from "./../../reducers/sliceCart/";
  import {
    getUser
  } from "./../../reducers/sliceUser/";
import "./MagicCard.css";

export const MagicCard = ({
  id,
  name,
  colors,
  type,
  image,
  rarity,
  info,
  ...props
}) => {
  const dispatch = useDispatch();
  const addToFavorite = () => {
    const data = { id, name, colors, type, image, rarity, info, ...props };
    if (isFavorite()) {
      dispatch(deleteFavorites(data));
    } else {
      dispatch(addFavorites(data));
    }
  };

  const userEmailLogin = useSelector(getUser).user.email;



  const favorites = useSelector(getFavorites).favorites;
  const isFavorite = () => {
    if (favorites.find((element) => element.id == id)) {
      return true;
    } else {
      return false;
    }
  };


  const addToCart = () => {
    const data = { id, name, colors, type, image, rarity, info, ...props };
    if (isInCart()) {
      dispatch(deleteProducts(data));
    } else {
      dispatch(addProducts(data));
    }
  };

  const cart = useSelector(getProducts).productsCart;
  const isInCart = () => {
    if (cart.find((element) => element.id == id)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <Card className="box-magiccard" style={{ width: "18rem" }}>
        <Container className="container-magiccards">
          <Row className="d-flex align-items-top justify-content-between mt-2">
            <Col
              className="d-flex align-items-top justify-content-start"
              sm={4}
            >
              {image ? (
                <Card.Img className="img-magiccard" variant="top" src={image} />
              ) : (
                <Card.Img
                  className="img-magiccard"
                  variant="top"
                  src={"./../../public/images/no-image.jpg"}
                />
              )}
            </Col>
            <Col sm={8}>
              <Col sm={12}>
                <Card.Title className="title-magiccard">{name}</Card.Title>
              </Col>
              <Col sm={12}>
                <Card.Text className="type-magiccard">{type}</Card.Text>
              </Col>
              <Col sm={12}>
                <Card.Text className="rarity-magiccard">{rarity}</Card.Text>
              </Col>
              <Col sm={12}>
                {colors &&
                  colors.map((color, i) => {
                    return (
                      <div className="d-inline p-1 flex-row " key={i} sm={1}>
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
                      </div>
                    );
                  })}
              </Col>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Body>
                <Card.Text className=" info-magiccard">{info}</Card.Text>
              </Card.Body>
              <Card.Body>
                <Link className="d-flex align-items-center justify-content-center btn-detail py-2 rounded-3" variant="primary" to={`/${id}`}>
                  Ver detalle
                </Link>
              </Card.Body>
            </Col>
          </Row>
          <Row className={userEmailLogin ? "d-flex" : "d-none"}>
            <Col
              className="d-flex justify-content-center alignt-items-center"
              xs={6}
            >
              <div
                className="d-flex justify-content-center alignt-items-center py-2"
                onClick={() => {
                  addToFavorite();
                }}
              >
                <svg
                  className={`${
                    isFavorite() ? "add-favorite" : "button-favorites-img"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <g>
                    <path
                      d="M19.071 13.142L13.414 18.8a2 2 0 0 1-2.828 0l-5.657-5.657A5 5 0 1 1 12 6.072a5 5 0 0 1 7.071 7.07Z"
                      opacity=".16"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19.071 13.142L13.414 18.8a2 2 0 0 1-2.828 0l-5.657-5.657a5 5 0 0 1 7.07-7.071a5 5 0 0 1 7.072 7.071Z"
                    ></path>
                  </g>
                </svg>
              </div>
            </Col>
            <Col
              className="d-flex justify-content-center alignt-items-center"
              xs={6}
            >
              <div
                className="d-flex justify-content-center alignt-items-center py-2"
                onClick={() => {
                    addToCart();
                  }}
              >
                <svg
                className={`${
                    isInCart() ? "add-cart" : "button-cart-img"
                    }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zM1 2v2h2l3.6 7.59l-1.35 2.45c-.16.28-.25.61-.25.96c0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12l.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2z"
                  ></path>
                </svg>
              </div>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
};
