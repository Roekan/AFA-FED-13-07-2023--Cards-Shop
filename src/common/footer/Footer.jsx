import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import "./Footer.css";

export const Footer = () => {
  return (
    <Container fluid className="box-footer">
      <Row className="d-flex align-items-center justify-content-center ">
        <Col  sm={12} md={10}>
          <Row className="d-flex align-items-center justify-content-between ">
            <Col sm={12} md={5} className="py-3">
              <ListGroup className="box-list-footer">
                <ListGroup.Item
                  className="item-list-footer"
                  action
                  href="#link1"
                >
                  Usuario
                </ListGroup.Item>
                <ListGroup.Item
                  className="item-list-footer"
                  action
                  href="#link1"
                >
                  Favoritos
                </ListGroup.Item>
                <ListGroup.Item
                  className="item-list-footer"
                  action
                  href="#link1"
                >
                  Cesta de compra
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={12} md={5} className="creative-commons py-3">
              <Row>
                <Col  sm={8}>
                  <a
                    rel="license"
                    href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
                  >
                    <img
                      alt="Licencia de Creative Commons"
                      src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png"
                    />
                  </a>
                  <br />
                  Este obra está bajo &nbsp;
                  <a
                    rel="license"
                    href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
                  >
                    licencia.
                  </a>
                </Col>
                <Col sm={4} className="d-flex align-items-center justify-content-end ">
                <img className='logo-header' src='./../../public/images/logo/logo.png' width={40} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
