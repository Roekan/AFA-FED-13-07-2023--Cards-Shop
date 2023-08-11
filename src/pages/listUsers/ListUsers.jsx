import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { users } from "../../services/apiCalls";

import "./ListUsers.css";

export const ListUsers = () => {
  const [listAllUsers, setListAllUsers] = useState("");

  useEffect(() => {
    listUsers();
  }, []);

  const listUsers = () => {
    users()
      .then((res) => {
        setListAllUsers(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Container fluid className="box-cards-cart">
        <Row className="d-flex align-items-top justify-content-center py-3">
          <h2 className="d-flex align-items-top justify-content-center py-3 title-cart">
            Lista de Usuarios
          </h2>
        </Row>
        <Row
          className="d-none d-md-flex align-items-top justify-content-center py-2 my-2 row-list-users-title"
        >
          <Col className="d-none d-md-flex align-items-center justify-content-center cell-title-userList">ID</Col>
          <Col className="d-none d-md-flex align-items-center justify-content-center cell-title-userList">Nombre</Col>
          <Col className="d-none d-md-flex align-items-center justify-content-center cell-title-userList">Apellido</Col>
          <Col className="d-none d-md-flex align-items-center justify-content-center cell-title-userList">Email</Col>
          <Col className="d-none d-md-flex align-items-center justify-content-center cell-title-userList">Contraseña</Col>
          <Col className="d-none d-md-flex align-items-center justify-content-center cell-title-userList">Telefono</Col>
          <Col className="d-none d-md-flex align-items-center justify-content-center cell-title-userList">Dirección</Col>
        </Row>
        {listAllUsers.length > 0 &&
          listAllUsers.map((user) => {
            return (
              <Row
                key={user.id}
                className="d-flex align-items-center justify-content-center  py-2 my-2 row-list-users-info"
              >
                <Col className="d-flex align-items-center justify-content-center ">{user.id}</Col>
                <Col className="d-flex align-items-center justify-content-center cell-info-userList">{user.name}</Col>
                <Col className="d-flex align-items-center justify-content-center cell-info-userList">{user.lastname}</Col>
                <Col className="d-flex align-items-center justify-content-center cell-info-userList">{user.email}</Col>
                <Col className="d-flex align-items-center justify-content-center cell-info-userList">{user.password}</Col>
                <Col className="d-flex align-items-center justify-content-center cell-info-userList">{user.phone}</Col>
                {user.adress 
                    ?<Col className="d-flex align-items-center justify-content-center cell-info-userList">{user.adress}, {user.floor} {user.door},{user.adressCode} {user.city}</Col>
                    :<Col className="d-flex align-items-center justify-content-center cell-info-userList">-Sin dirección-</Col>
                }
                
              </Row>
            );
          })}
      </Container>
    </>
  );
};
