import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { updateUser } from "../../services/apiCalls";
import { useSelector, useDispatch } from "react-redux";
import { getUser, login, logout } from "../../reducers/sliceUser";
import NoImage from "/public/images/no-image.jpg"
import "./User.css";


export const User = () => {
  const rdxUserData = useSelector(getUser);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(rdxUserData.user);
  const navigate = useNavigate();

  const [validated, setValidated] = useState(false);
  const [msgSuccesUpdate, setMsgSuccesUpdate ]=useState("")

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    if (form.checkValidity() === true) {
      event.preventDefault();
      event.stopPropagation();
      updateData();

      setMsgSuccesUpdate(<p className="msg-update-info-user p-2">Se han actualizado los datos correctamente</p>)
      setTimeout(()=> {
        setMsgSuccesUpdate("")
      },5000)
    }
  };

  const updateData = () => {
    updateUser(userData)
      .then((res) => {
        dispatch(login({ user: res }));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logOut = () => {
    dispatch(logout({ user: {} }));
    navigate("/login");
  };

  return (
    <>
      <Container className="pt-5">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="d-flex align-items-center justify-content-center">
            <Col
              className="d-flex align-items-center justify-content-center text-login mb-3"
              sm={12}
              md={10}
              lg={6}
            >
              <h2>Datos usuario</h2>
            </Col>
          </Row>
          <Row className="d-flex align-items-center justify-content-center">
            <Col sm={12} md={10} lg={6}>
              <InputGroup className="mb-3 hasValidation">
                <InputGroup.Text id="text-name" className="label-register-user">
                  Nombre
                </InputGroup.Text>
                <Form.Control
                  required
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
                <Form.Control.Feedback type="invalid">
                  Debe introducir un nombre
                </Form.Control.Feedback>
              </InputGroup>
             </Col>       
             <Col sm={12} md={10} lg={6}>
              <InputGroup className="mb-3 hasValidation">
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
              </Col>       
             <Col sm={12} md={10} lg={6}>
              <InputGroup className="mb-3 hasValidation">
                <InputGroup.Text id="text-email" className="label-register">
                  Email*
                </InputGroup.Text>
                <Form.Control
                  required
                  pattern="^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$"
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
                <Form.Control.Feedback type="invalid">
                  Debe introducir un email válido (ejemplo@ejemplo.com)
                </Form.Control.Feedback>
              </InputGroup>
              </Col>       
             <Col sm={12} md={10} lg={6}>
              <InputGroup className="mb-3 hasValidation">
                <InputGroup.Text id="text-password" className="label-register">
                  Contraseña
                </InputGroup.Text>
                <Form.Control
                  required
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8}$"
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
                <Form.Control.Feedback type="invalid">
                  Debe introducir una contraseña válida (al menos 1 mayúscula, 1
                  minúscula y 1 número)
                </Form.Control.Feedback>
              </InputGroup>
              </Col>       
             <Col sm={12} md={10} lg={6}>
              <InputGroup className="mb-3 hasValidation">
                <InputGroup.Text id="text-phone" className="label-register">
                  Teléfono
                </InputGroup.Text>
                <Form.Control
                  required
                  pattern="^[6-7]\d{8}$"
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
                <Form.Control.Feedback type="invalid">
                  Debe introducir un teléfono válido
                </Form.Control.Feedback>
              </InputGroup>
              </Col>       
             <Col sm={12} md={10} lg={6}>
              <InputGroup className="mb-3 hasValidation">
                <InputGroup.Text id="text-adress" className="label-register">
                  Dirección
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
                <Form.Control.Feedback type="invalid">
                  Debe introducir una dirección
                </Form.Control.Feedback>
              </InputGroup>
              </Col>       
             <Col sm={12} md={10} lg={6}>
              <InputGroup className="mb-3 hasValidation">
                <InputGroup.Text id="text-door" className="label-register">
                  Portal
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
                <Form.Control.Feedback type="invalid">
                  Debe introducir un portal
                </Form.Control.Feedback>
              </InputGroup>
              </Col>       
             <Col sm={12} md={10} lg={6}>
              <InputGroup className="mb-3 hasValidation">
                <InputGroup.Text id="text-floor" className="label-register">
                  Piso
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
                <Form.Control.Feedback type="invalid">
                  Debe introducir un piso
                </Form.Control.Feedback>
              </InputGroup>
              </Col>       
             <Col sm={12} md={10} lg={6}>
              <InputGroup className="mb-3 hasValidation">
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
                <Form.Control.Feedback type="invalid">
                  Debe introducir un código postal válido
                </Form.Control.Feedback>
              </InputGroup>
              </Col>       
             <Col sm={12} md={10} lg={6}>
              <InputGroup className="mb-3 hasValidation">
                <InputGroup.Text id="text-city" className="label-register">
                  Localidad
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
            </Col>
          </Row>
          <Row className="d-flex align-items-center justify-content-center">
            <Col
              className="d-flex align-items-center justify-content-center py-4 "
              sm={12}
              md={10}
              lg={6}
            >
              {msgSuccesUpdate}
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
                className=" button-login m-3"
              >
                Actualizar
              </Button>
              <Button
                variant="outline-secondary"
                className=" button-logout m-3"
                onClick={() => {
                  logOut();
                }}
              >
                Log out
              </Button>
            </Col>
          </Row>
          {userData.purchases.length <= 0 ? (
            <Row className="d-flex align-items-center justify-content-center">
              <Col
                className="d-flex align-items-center justify-content-center mt-5 text-purchases"
                sm={12}
                md={10}
                lg={6}
              >
                <h2>No hay pedidos realizados</h2>
              </Col>
            </Row>
          ) : (
            <Row className="d-flex align-items-center justify-content-center">
              <Col
                className="d-flex align-items-center justify-content-center mt-5 text-purchases"
                sm={12}
                md={10}
                lg={6}
              >
                <h2>Pedidos realizados</h2>
              </Col>
            </Row>
          )}
          <Row className="d-flex align-items-center justify-content-center mb-4">
            <Col>
              {userData.purchases &&
                userData.purchases.map((purchase) => {
                  return (
                    <Row key={purchase.date} className="row-purchases-user">
                      <Col
                        sm={12}
                        className="d-flex align-items-center justify-content-start pt-3"
                      >
                        <span className="title-id-purchase">Id. pedido: </span>{" "}
                        &nbsp; {purchase.date}
                      </Col>
                      <Col
                        sm={12}
                        md={10}
                        className="d-flex align-items-center justify-content-sm-center justify-content-md-start"
                      >
                        <Row className="pb-3">
                          {purchase.products.map((card) => {
                            return (
                              <Col
                                className="d-flex align-items-end justify-content-center"
                                key={card.id}
                              >
                                <Row>
                                  <Col
                                    sm={12}
                                    className="d-flex align-items-center justify-content-center py-2 user-card-name"
                                  >
                                    {card.name}
                                  </Col>
                                  <Col
                                    sm={12}
                                    className="d-flex align-items-center justify-content-center"
                                  >
                                    {card.imageUrl ? (
                                      <img
                                        className=" img-magiccard"
                                        src={card.imageUrl}
                                      />
                                    ) : (
                                      <img
                                        className=" img-magiccard"
                                        src={ NoImage }
                                      />
                                    )}
                                  </Col>
                                </Row>
                              </Col>
                            );
                          })}
                        </Row>
                      </Col>
                    </Row>
                  );
                })}
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};
