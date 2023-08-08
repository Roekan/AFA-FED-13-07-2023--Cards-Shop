import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./register.css";
import { register } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";
import { users } from "../../services/apiCalls";

export const Register = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    type: "user",
    name: "",
    lastname: "",
    email: "",
    password: "",
    passwordVerification: "",
    phone: "",
    adress: "",
    door: "",
    floor: "",
    adressCode: "",
    city: "",
  });

  const saveData = () => {
    users()
      .then((res) => {
        const userFound = res.find(
          (element) => element.email == userData.email
        );
        /*Añadir comprobaciones RegEx del formulario */
        if (!userFound) {
          register(userData)
            .then(() => {
              setTimeout(() => {
                navigate("/login");
              }, 750);
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          console.log("Este email ya está registrado");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    /*Comprobaciones formulario registro */
  };

  return (
    <>
      <Container className="pt-5">
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
          <Col sm={12} md={10} lg={6}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="text-name" className="label-register">
                Nombre
              </InputGroup.Text>
              <Form.Control
                type={"text"}
                name={"name"}
                value={userData.name}
                onChange={(e) => {
                  setUserData({ ...userData, name: e.target.value });
                }}
                className="p-1 bg-input-register "
                aria-label="Nombre"
                aria-describedby="Nombre"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="text-lastname" className="label-register">
                Apellidos
              </InputGroup.Text>
              <Form.Control
                type={"text"}
                name={"lastname"}
                value={userData.lastname}
                onChange={(e) => {
                  setUserData({ ...userData, lastname: e.target.value });
                }}
                className="p-1 bg-input-register "
                aria-label="Apellidos"
                aria-describedby="Apellidos"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="text-email" className="label-register">
                Email*
              </InputGroup.Text>
              <Form.Control
                type={"email"}
                name={"email"}
                value={userData.email}
                onChange={(e) => {
                  setUserData({ ...userData, email: e.target.value });
                }}
                className="p-1 bg-input-register "
                aria-label="Email"
                aria-describedby="Email"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="text-password" className="label-register">
                Contraseña
              </InputGroup.Text>
              <Form.Control
                type={"password"}
                name={"password"}
                value={userData.password}
                onChange={(e) => {
                  setUserData({ ...userData, password: e.target.value });
                }}
                className="p-1 bg-input-register "
                aria-label="Contraseña"
                aria-describedby="Contraseña"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text
                id="text-emailVerification"
                className="label-register"
              >
                Confirmar contraseña*
              </InputGroup.Text>
              <Form.Control
                type={"password"}
                name={"passwordVerification"}
                value={userData.passwordVerification}
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    passwordVerification: e.target.value,
                  });
                }}
                className="p-1 bg-input-register "
                aria-label="Confirmar email"
                aria-describedby="Confirmar email"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="text-phone" className="label-register">
                Teléfono
              </InputGroup.Text>
              <Form.Control
                type={"text"}
                name={"phone"}
                value={userData.phone}
                onChange={(e) => {
                  setUserData({ ...userData, phone: e.target.value });
                }}
                className="p-1 bg-input-register "
                aria-label="Teléfono"
                aria-describedby="Teléfono"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="text-adress" className="label-register">
                Dirección
              </InputGroup.Text>
              <Form.Control
                type={"text"}
                name={"adress"}
                value={userData.adress}
                onChange={(e) => {
                  setUserData({ ...userData, adress: e.target.value });
                }}
                className="p-1 bg-input-register "
                aria-label="Dirección"
                aria-describedby="Dirección"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="text-door" className="label-register">
                Portal
              </InputGroup.Text>
              <Form.Control
                type={"text"}
                name={"door"}
                value={userData.door}
                onChange={(e) => {
                  setUserData({ ...userData, door: e.target.value });
                }}
                className="p-1 bg-input-register "
                aria-label="Portal"
                aria-describedby="Portal"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="text-floor" className="label-register">
                Piso
              </InputGroup.Text>
              <Form.Control
                type={"text"}
                name={"floor"}
                value={userData.floor}
                onChange={(e) => {
                  setUserData({ ...userData, floor: e.target.value });
                }}
                className="p-1 bg-input-register "
                aria-label="Piso"
                aria-describedby="Piso"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="text-adress-code" className="label-register">
                Código postal*
              </InputGroup.Text>
              <Form.Control
                type={"text"}
                name={"adressCode"}
                value={userData.adressCode}
                onChange={(e) => {
                  setUserData({ ...userData, adressCode: e.target.value });
                }}
                className="p-1 bg-input-register "
                aria-label="Código postal"
                aria-describedby="Código postal"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="text-city" className="label-register">
                Localidad
              </InputGroup.Text>
              <Form.Control
                type={"text"}
                name={"city"}
                value={userData.city}
                onChange={(e) => {
                  setUserData({ ...userData, city: e.target.value });
                }}
                className="p-1 bg-input-register "
                aria-label="Localidad"
                aria-describedby="Localidad"
              />
            </InputGroup>
            <Form.Check
              name={"legal"}
              className="text-legal"
              inline
              label="Acepto términos y condiciones"
            />
            <p className="text-legal ">
              Tus datos personales se utilizarán para procesar tu pedido,
              mejorar tu experiencia en esta web, gestionar el acceso a tu
              cuenta y otros propósitos descritos en nuestra política de
              privacidad.
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
            <Button
              variant="outline-secondary"
              className=" button-login"
              onClick={() => {
                saveData();
              }}
            >
              Register
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
