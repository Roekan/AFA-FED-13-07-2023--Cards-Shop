import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import './ListUsers.css'

export const ListUsers = () => {



  return (
    <>
      <Container fluid className="box-cards-cart">
        <Row className="d-flex align-items-top justify-content-center py-3">
          <h2 className="d-flex align-items-top justify-content-center py-3 title-cart">
            Lista de Usuarios
          </h2>
        </Row>
        <Row className="d-flex align-items-top justify-content-center py-3 list-users">



            No hay usuarios registrados



        </Row>
      </Container>
    </>
  );
};
