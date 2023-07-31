import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Header.css'

export const Header = () => {
  return (
    <>
    <Container fluid>
      <Row className=' bg-dark py-2 px-1'>
        <Col className='d-flex align-items-center justify-content-center bg-info title-header' xs={2}>
        Magic Traders
        </Col>
        <Col className='d-flex align-items-center justify-content-center bg-success' xs={10}>
          <Row>
            <Col className='d-flex align-items-center justify-content-center bg-info' xs={4}>
            Registro/Login
            </Col>
            <Col className='d-flex align-items-center justify-content-center bg-info' xs={4}>
            Carrito
            </Col>
            <Col className='d-flex align-items-center justify-content-center bg-info' xs={4}>
            Favoritos
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    </>
    
  )
}
