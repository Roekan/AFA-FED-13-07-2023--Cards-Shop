import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./Register.css";
import { register } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";
import { users } from "../../services/apiCalls";

export const Register = () => {
  const navigate = useNavigate();
  const [registerEmail, setRegisterEmail] = useState();
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
    favorites:[],
    purchases:[]
  });

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false || registerEmail == true) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if (form.checkValidity() === true && registerEmail == false) {
      event.preventDefault();
      event.stopPropagation();
      saveData();
    }
  };

  useEffect(() => {
    findRegisterEmail();
  }, [userData.email]);

  const findRegisterEmail = async () => {
    let validateEmail = await users()
      .then((res) => {
        const userFound = res.find(
          (element) => element.email == userData.email
        );
        if (userFound) {
          setRegisterEmail(true);
        } else {
          setRegisterEmail(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    return validateEmail;
  };

  const saveData = () => {
    register(userData)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        navigate("/login");
      });
  };

  return (
    <>
      <Container className="pt-5 box-register-home" >
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="d-flex align-items-center justify-content-center">
            <Col
              className="d-flex align-items-center justify-content-center text-login"
              sm={12}
              md={10}
              lg={6}
            >
              <p>
                Si ya estas registrado puedes loguearte desde &nbsp;
                <Link  to="/login" alt="Usuario">
                  aquí
                </Link>
              </p>
            </Col>
          </Row>
          <Row className="d-flex align-items-center justify-content-center">
            <Col sm={12} md={10} lg={6}>
              <InputGroup className="mb-3" hasValidation>
                <InputGroup.Text id="text-name" className="label-register">
                  Nombre
                </InputGroup.Text>
                <Form.Control
                  required
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={(e) => {
                    setUserData({ ...userData, name: e.target.value });
                  }}
                  className="p-1 bg-input-register "
                  aria-label="Nombre"
                  aria-describedby="Nombre"
                />
                <Form.Control.Feedback className="register-msg-error" type="invalid">
                  Debe introducir un nombre
                </Form.Control.Feedback>
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="text-lastname" className="label-register">
                  Apellidos
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  name="lastname"
                  value={userData.lastname}
                  onChange={(e) => {
                    setUserData({ ...userData, lastname: e.target.value });
                  }}
                  className="p-1 bg-input-register "
                  aria-label="Apellidos"
                  aria-describedby="Apellidos"
                />
              </InputGroup>
              <InputGroup className="mb-3" hasValidation>
                <InputGroup.Text id="text-email" className="label-register">
                  Email*
                </InputGroup.Text>
                <Form.Control
                  isInvalid={registerEmail}
                  pattern="^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$"
                  required
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
                <Form.Control.Feedback className="register-msg-error" type="invalid">
                  {registerEmail
                    ? "Este email ya está registrado"
                    : "Debe introducir un email válido (ejemplo@ejemplo.com)"}
                </Form.Control.Feedback>
              </InputGroup>
              <InputGroup className="mb-3" hasValidation>
                <InputGroup.Text id="text-password" className="label-register">
                  Contraseña*
                </InputGroup.Text>
                <Form.Control
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8}$"
                  required
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
                <Form.Control.Feedback className="register-msg-error" type="invalid">
                  Debe introducir una contraseña válida (al menos 1 mayúscula, 1
                  minúscula y 1 número)
                </Form.Control.Feedback>
              </InputGroup>
              <InputGroup className="mb-3" hasValidation>
                <InputGroup.Text
                  required
                  id="text-emailVerification"
                  className="label-register"
                >
                  Confirmar contraseña*
                </InputGroup.Text>
                <Form.Control
                  required
                  isInvalid={
                    validated &&
                    userData.password !== userData.passwordVerification
                  }
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
                <Form.Control.Feedback className="register-msg-error" type="invalid">
                  Las contraseñas deben ser iguales
                </Form.Control.Feedback>
              </InputGroup>
              <InputGroup className="mb-3" hasValidation>
                <InputGroup.Text id="text-phone" className="label-register">
                  Teléfono*
                </InputGroup.Text>
                <Form.Control
                  pattern="^[6-7]\d{8}$"
                  required
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
                <Form.Control.Feedback className="register-msg-error" type="invalid">
                  Debe introducir un teléfono válido
                </Form.Control.Feedback>
              </InputGroup>
              <InputGroup className="mb-3" hasValidation>
                <InputGroup.Text id="text-adress" className="label-register">
                  Dirección*
                </InputGroup.Text>
                <Form.Control
                  required
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
                <Form.Control.Feedback className="register-msg-error" type="invalid">
                  Debe introducir una dirección
                </Form.Control.Feedback>
              </InputGroup>
              <InputGroup className="mb-3" hasValidation>
                <InputGroup.Text id="text-door" className="label-register">
                  Portal*
                </InputGroup.Text>
                <Form.Control
                  required
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
                <Form.Control.Feedback className="register-msg-error" type="invalid">
                  Debe introducir un portal
                </Form.Control.Feedback>
              </InputGroup>
              <InputGroup className="mb-3" hasValidation>
                <InputGroup.Text id="text-floor" className="label-register">
                  Piso*
                </InputGroup.Text>
                <Form.Control
                  required
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
                <Form.Control.Feedback className="register-msg-error" type="invalid">
                  Debe introducir un piso
                </Form.Control.Feedback>
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text
                  id="text-adress-code"
                  className="label-register"
                >
                  Código postal*
                </InputGroup.Text>
                <Form.Control
                  required
                  pattern="0[1-9][0-9]{3}|[1-4][0-9]{4}|5[0-2][0-9]{3}"
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
                <Form.Control.Feedback className="register-msg-error" type="invalid">
                  Debe introducir un código postal válido
                </Form.Control.Feedback>
              </InputGroup>
              <InputGroup className="mb-3" hasValidation>
                <InputGroup.Text id="text-city" className="label-register">
                  Localidad*
                </InputGroup.Text>
                <Form.Control
                  required
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
              <Form.Group className="mb-3">
                <p className="text-legal ">
                  Tus datos personales se utilizarán para procesar tu pedido,
                  mejorar tu experiencia en esta web, gestionar el acceso a tu
                  cuenta y otros propósitos descritos en nuestra política de
                  privacidad.
                </p>
                <Form.Check
                  required
                  name={"legal"}
                  className="text-legal"
                  inline
                  label="Acepto términos y condiciones"
                  feedback="Debe aceptar nuestros términos y condiciones"
                  feedbackType="invalid"
                />
              </Form.Group>
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
                type="submit"
                variant="outline-secondary"
                className=" button-login"
              >
                Register
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};
