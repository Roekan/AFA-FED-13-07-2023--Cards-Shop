import  { useState } from "react";
import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { users } from "../../services/apiCalls";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../reducers/sliceUser";
import './Login.css'
import { Potion } from "../../common/potion/Potion";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [msgUserNotFound, setMsgUserNotFound] = useState("");

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const logIn = () => {
    users()
      .then((res) => {
        const userFound = res.find(
          (element) =>
            element.email == userData.email &&
            element.password == userData.password
        );

        if (userFound) {
          dispatch(login({ user: userFound }));
          setMsgUserNotFound(
            <Row className="d-flex align-items-center justify-content-center">
              <Col
                className="d-flex align-items-center justify-content-center py-4 msgUser "
                sm={12}
                md={10}
                lg={6}
              >
                Usuario encontrado, conectando
              </Col>
            </Row>
          );
          setTimeout(() => {
            navigate("/");
          }, 750);
        } else {
          setMsgUserNotFound(
            <Row className="d-flex align-items-center justify-content-center">
              <Col
                className="d-flex align-items-center justify-content-center py-4 msgUser register-msg-error"
                sm={12}
                md={10}
                lg={6}
              >
                Contraseña o usuario no coinciden
              </Col>
            </Row>
          );
          setTimeout(() => {
            setMsgUserNotFound("");
          }, 5000);

        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Container className="pt-5 box-login-home">
      <Potion />
        <Row className="d-flex align-items-center justify-content-center mt-3">
          <Col
            className="d-flex justify-content-center text-login"
            sm={12}
            md={10}
            lg={6}
          >
            <p>
              Si aun no estas registrado puedes registrarte desde &nbsp;
              <Link to="/register" alt="Usuario">
                aquí
              </Link>
            </p>
          </Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-center">
          <Col sm={12} md={10} lg={6}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1" className="label-login">
                Email
              </InputGroup.Text>
              <Form.Control
                className="p-1 bg-input-login "
                type="email"
                placeholder="Email"
                value={userData.email}
                onChange={(e) => {
                  setUserData({ ...userData, email: e.target.value });
                }}
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
                type="password"
                placeholder="Contraseña"
                value={userData.password}
                onChange={(e) => {
                  setUserData({ ...userData, password: e.target.value });
                }}
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
        </Row>
        {msgUserNotFound}
        <Row className="d-flex align-items-center justify-content-center">
          <Col
            className="d-flex align-items-center justify-content-center py-4"
            sm={12}
            md={10}
            lg={6}
          >
            <Button
              variant="outline-secondary"
              className=" button-login"
              onClick={() => {
                logIn();
              }}
            >
              Login
            </Button>
          </Col>
        </Row>
        
      </Container>
    </>
  );
};
