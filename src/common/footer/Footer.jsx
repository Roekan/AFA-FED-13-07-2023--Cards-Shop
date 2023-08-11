import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "./../../reducers/sliceUser/";
import { Col, Container, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Logo from '/public/images/logo/logo.jpg'
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
                    >
                      <Link className="nav-footer" to="/">
                      Home
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item
                      className="item-list-footer"
                      action
                    >
                      <Link className="nav-footer" to="/favorites">
                      Favoritos
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item
                      className="item-list-footer"
                      action
                    >
                      <Link className="nav-footer" to="/cart">
                      Cesta de compra
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item
                      className="item-list-footer"
                      action
                    >
                      <Link className="nav-footer" to="/user">
                      Mi perfil
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item
                      className="item-list-footer"
                      action
                    >
                      <Link className="nav-footer" to="/listusers">
                      Lista de usuarios registrados
                      </Link>
                    </ListGroup.Item>
                  </>
                ) : userTypeLogin === "user" ? (
                  <>
                    <ListGroup.Item
                      className="item-list-footer"
                      action
                    >
                      <Link className="nav-footer" to="/">
                      Home
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item
                      className="item-list-footer"
                      action
                    >
                      <Link className="nav-footer" to="/favorites">
                      Favoritos
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item
                      className="item-list-footer"
                      action
                    >
                      <Link className="nav-footer" to="/cart">
                      Cesta de compra
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item
                      className="item-list-footer"
                      action
                    >
                      <Link className="nav-footer" to="/user">
                      Mi perfil
                      </Link>
                    </ListGroup.Item>
                  </>
                ) : (
                  <>
                    <ListGroup.Item
                      className="item-list-footer"
                      action
                    >
                      <Link className="nav-footer" to="/login">
                      Login
                      </Link>
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
                    src={Logo}
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
