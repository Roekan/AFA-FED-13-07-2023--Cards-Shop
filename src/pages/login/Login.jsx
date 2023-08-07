import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import './login.css'

export const Login = () => {
  return (
    <>
      <Container className="">
        <Row className="d-flex align-items-center justify-content-center">
          <Col sm={12} md={6}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1" className="label-login">User</InputGroup.Text>
              <Form.Control
                className="p-1 bg-input-login "
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon2" className="label-login">Pass</InputGroup.Text>
              <Form.Control
                className="p-1 bg-input-login "
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-center">
          <Col sm={12} md={2}>
            <Button variant="outline-secondary" className=" button-login">Login</Button>{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
};
