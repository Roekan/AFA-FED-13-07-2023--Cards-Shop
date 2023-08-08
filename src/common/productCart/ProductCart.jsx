import React from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {  deleteProducts } from "./../../reducers/sliceCart/";
import "./ProductCart.css";

export const ProductCart = ({
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

  const deleteProduct = () => {
    const data = { id, name, colors, type, image, rarity, info, ...props };
      dispatch(deleteProducts(data));    
  };


  return (
    <>
      <Container fluid>
        <Row className="d-flex align-items-top justify-content-start box-product">
          <Col
            className="d-flex align-items-center justify-content-center mx-2 p-2 block-info-product"
            sm={1}
          >
            <Row>
              <Col
                sm={12}
                className="d-flex align-items-center justify-content-center title-product-cart "
              >
                {image ? (
                  <Card.Img className="rounded-2" variant="top" src={image} />
                ) : (
                  <Card.Img
                    className="d-flex align-items-center justify-content-center rounded-2 img-product-cart"
                    variant="top"
                    src={"./../../public/images/no-image.jpg"}
                  />
                )}
              </Col>
            </Row>
          </Col>
          <Col
            className="d-flex justify-content-center name-product mx-2 p-2 block-info-product"
            sm={1}
          >
            <Row>
              <Col
                sm={12}
                className="d-flex title-product-cart align-items-center justify-content-center"
              >
                Nombre:
              </Col>
              <Col
                sm={12}
                className="d-flex text-product-cart align-items-center justify-content-center"
              >
                {name}
              </Col>
            </Row>
          </Col>
          <Col
            className="d-flex justify-content-center name-product mx-2 p-2 block-info-product"
            sm={2}
          >
            <Row>
              <Col
                sm={12}
                className="d-flex align-items-center justify-content-center title-product-cart"
              >
                Tipo:
              </Col>
              <Col
                sm={12}
                className="d-flex align-items-center justify-content-center text-product-cart"
              >
                {type}
              </Col>
            </Row>
          </Col>
          <Col
            className="d-flex justify-content-center name-product mx-2 p-2 block-info-product"
            sm={2}
          >
            <Row>
              <Col
                sm={12}
                className="d-flex align-items-center justify-content-center title-product-cart"
              >
                Rareza:
              </Col>
              <Col
                sm={12}
                className="d-flex align-items-center justify-content-center text-product-cart"
              >
                {rarity}
              </Col>
            </Row>
          </Col>
          <Col
            className="d-flex justify-content-center name-product mx-2 p-2 block-info-product"
            sm={2}
          >
            <Row>
              <Col
                sm={12}
                className="d-flex align-items-center justify-content-center title-product-cart"
              >
                Elementos:
              </Col>
              <Col
                sm={12}
                className="d-flex align-items-center justify-content-center text-product-cart"
              >
                {colors &&
                  colors.map((color, i) => {
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
                      </div>
                    );
                  })}
              </Col>
            </Row>
          </Col>
          <Col
            className="d-flex justify-content-center name-product mx-2 p-2 block-info-product"
            sm={2}
          >
            <Row>
              <Col
                sm={12}
                className="d-flex align-items-center justify-content-center title-product-cart"
              >
                <Link
                  className="d-flex align-items-center justify-content-center rounded-2 p-3 btn-detail-cart "
                  variant="primary"
                  to={`/${id}`}
                >
                  Ver detalle
                </Link>
              </Col>
              <Col
                sm={12}
                className="d-flex align-items-center justify-content-center title-product-cart"
              >
                <Button
                  onClick={() => {
                    deleteProduct();
                  }}
                  variant="outline-light btn-drop-cart "
                >
                  Eliminar
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>

        
      </Container>
    </>
  );
};
