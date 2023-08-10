import { useSelector } from "react-redux";
import { getUser } from "./../../reducers/sliceUser/";
import { Col, Container, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import "./Footer.css";

export const Footer = () => {
  const userTypeLogin = useSelector(getUser)?.user?.type;

  return (
    <Container fluid className="box-footer">
      <Row className="d-flex align-items-center justify-content-center ">
        <Col sm={12} md={10}>
          <Row className="d-flex align-items-center justify-content-center ">
            <Col
              sm={12}
              md={5}
              className="d-flex align-items-center justify-content-center py-3"
            >
              <ListGroup className="  box-list-footer ">
                {userTypeLogin === "admin" ? (
                  <>
                    <ListGroup.Item
                      className="item-list-footer"
                      action
                      href="/"
                    >
                      Home
                    </ListGroup.Item>
                    <ListGroup.Item
                      className="item-list-footer"
                      action
                      href="/favorites"
                    >
                      Favoritos
                    </ListGroup.Item>
                    <ListGroup.Item
                      className="item-list-footer"
                      action
                      href="/cart"
                    >
                      Cesta de compra
                    </ListGroup.Item>
                    <ListGroup.Item
                      className="item-list-footer"
                      action
                      href="/user"
                    >
                      Mi perfil
                    </ListGroup.Item>
                    <ListGroup.Item
                      className="item-list-footer"
                      action
                      href="/listusers"
                    >
                      Lista de usuarios registrados
                    </ListGroup.Item>
                  </>
                ) : userTypeLogin === "user" ? (
                  <>
                    <ListGroup.Item
                      className="item-list-footer"
                      action
                      href="/"
                    >
                      Home
                    </ListGroup.Item>
                    <ListGroup.Item
                      className="item-list-footer"
                      action
                      href="/favorites"
                    >
                      Favoritos
                    </ListGroup.Item>
                    <ListGroup.Item
                      className="item-list-footer"
                      action
                      href="/cart"
                    >
                      Cesta de compra
                    </ListGroup.Item>
                    <ListGroup.Item
                      className="item-list-footer"
                      action
                      href="/user"
                    >
                      Mi perfil
                    </ListGroup.Item>
                  </>
                ) : (
                  <>
                    <ListGroup.Item
                      className="item-list-footer"
                      action
                      href="/login"
                    >
                      Login
                    </ListGroup.Item>
                  </>
                )}
              </ListGroup>
            </Col>
            <Col
              sm={12}
              md={5}
              className="d-flex align-items-center justify-content-center "
            >
              <Row className="d-flex align-items-center justify-content-center">
                <Col
                  sm={12}
                  md={6}
                  className="d-flex align-items-center justify-content-center creative-commons py-3"
                >
                  <Row>
                    <Col className="d-flex align-items-center justify-content-center" sm={12}>
                      <a
                        rel="license"
                        href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
                      >
                        <img
                          alt="Licencia de Creative Commons"
                          src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png"
                        />
                      </a>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center" sm={12}>
                    Este obra está bajo &nbsp;
                      <a
                        rel="license"
                        href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
                      >
                        licencia.
                      </a>
                    </Col>
                  </Row>
                </Col>
                <Col
                  sm={12}
                  md={6}
                  className="d-flex align-items-center justify-content-center "
                >
                  <img
                    className=" logo-footer"
                    src="./../../public/images/logo/logo.png"
                    width={40}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
