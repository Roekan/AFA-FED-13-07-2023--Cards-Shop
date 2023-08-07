import React from "react";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./login.css";

export const Login = () => {
  return (
    <>
      <Container className="pt-5">
        <Row className="d-flex align-items-center justify-content-center">
          <Col sm={12} md={10} lg={6}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1" className="label-login">
                Email
              </InputGroup.Text>
              <Form.Control
                className="p-1 bg-input-login "
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon2" className="label-login">
                Contraseña
              </InputGroup.Text>
              <Form.Control
                className="p-1 bg-input-login "
                placeholder="Contraseña"
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-center">
          <Col
            className="d-flex justify-content-center text-login"
            sm={12}
            md={10}
            lg={6}
          >
            <p>
              Si aun no estas registrado puedes registrarte desde &nbsp;
              <a className="" href="/register" alt="Usuario">
                aquí
              </a>
            </p>
          </Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-center">
          <Col
            className="d-flex align-items-center justify-content-center py-4"
            sm={12}
            md={10}
            lg={6}
          >
            <Button variant="outline-secondary" className=" button-login">
              Login
            </Button>
          </Col>
        </Row>
        </Container>
    </>
  );
};
