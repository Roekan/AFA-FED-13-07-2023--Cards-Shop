import React from 'react'
import { Container, Form, Row, Col } from 'react-bootstrap'

export const Filter = () => {
  return (
    <>
        <Container>
            <Row>
                <Col className='d-flex align-items-center justify-content-center'>
                <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                />
                <img src='./../../public/images/elements/black.png' width={20} />
                </Col>
                <Col className='d-flex align-items-center justify-content-center'>
                <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                />
                <img src='./../../public/images/elements/white.png' width={20} />
                </Col>
                <Col className='d-flex align-items-center justify-content-center'>
                <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                />
                <img src='./../../public/images/elements/blue.png' width={20} />
                </Col>
                <Col className='d-flex align-items-center justify-content-center'>
                <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                />
                <img src='./../../public/images/elements/red.png' width={20} />
                </Col>
                <Col className='d-flex align-items-center justify-content-center'>
                <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                />
                <img src='./../../public/images/elements/green.png' width={20} />
                </Col>
            </Row>
        </Container>
    </>

  )
}
