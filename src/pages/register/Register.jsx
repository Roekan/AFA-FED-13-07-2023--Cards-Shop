import React from "react";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./register.css";

export const Register = () => {
  return (
    <>
      <Container className="pt-5">
        <Row className="d-flex align-items-center justify-content-center">
          <Col sm={12} md={10} lg={6}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1" className="label-register">
                Usuario
              </InputGroup.Text>
              <Form.Control
                className="p-1 bg-input-register "
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon2" className="label-register">
                Contraseña
              </InputGroup.Text>
              <Form.Control
                className="p-1 bg-input-register "
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1" className="label-register">
                Nombre
              </InputGroup.Text>
              <Form.Control
                className="p-1 bg-input-register "
                aria-label="Nombre"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1" className="label-register">
                Apellidos
              </InputGroup.Text>
              <Form.Control
                className="p-1 bg-input-register "
                aria-label="Apellidos"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1" className="label-register">
                Teléfono
              </InputGroup.Text>
              <Form.Control
                className="p-1 bg-input-register "
                aria-label="Telefono"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-center">
          <Col
            className="d-flex align-items-center justify-content-center text-login"
            sm={12}
            md={10}
            lg={6}
          >
            <p>
              Si ya estas registrado puedes loguearte desde &nbsp;
              <a className="" href="/login" alt="Usuario">
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
              Register
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
