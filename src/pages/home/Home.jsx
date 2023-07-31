import React from 'react'


import { Col, Container, Row } from 'react-bootstrap'
import './Home.css'

export const Home = () => {
  return (
    <>
    <Container fluid className='d-flex align-items-center justify-content-center bg-warning box-home'>
      <Row>
        <Col className='bg-danger'>
        Home
        </Col>
      </Row>
    </Container>
    </>
  )
}
