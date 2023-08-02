import React from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import './MagicCard.css'

export const MagicCard = ({name, colors, type, image, rarity, info}) => {
  return (
    <>
    <Card style={{ width: '18rem' }}>
        <Container className='bg-info box-magiccards'>
            <Row className='d-flex align-items-top justify-content-between mt-2'>
                <Col className='d-flex align-items-top justify-content-start' sm={4}>
                    {image
                    ? <Card.Img variant="top" src={image} />
                    : <Card.Img variant="top" src={'./../../public/images/no-image.jpg'} />
                    }
                </Col>
                <Col sm={8}>
                        <Col sm={12}><Card.Title className='title-magiccard'>{name}</Card.Title></Col>
                        <Col sm={12}><Card.Text className='type-magiccard'>{type}</Card.Text></Col>
                        <Col sm={12}><Card.Text className='rarity-magiccard'>{rarity}</Card.Text></Col>
                        <Col sm={12}>
                        {
                colors && colors.map((color, i)=>{
                    return (
                        <Col key={i}>
                        {
                        color == 'W' && <img className='img-color-magiccard' src="./../../public/images/elements/white.png" /> 
                        }
                        {
                        color == 'U' && <img className='img-color-magiccard' src="./../../public/images/elements/blue.png" /> 
                        }
                        {
                        color == 'G' && <img className='img-color-magiccard' src="./../../public/images/elements/green.png" /> 
                        }
                        {
                        color == 'B' && <img className='img-color-magiccard' src="./../../public/images/elements/black.png" /> 
                        }
                        {
                        color == 'R' && <img className='img-color-magiccard' src="./../../public/images/elements/red.png" /> 
                        }
                        {
                        color == '' && <img className='img-color-magiccard' src="./../../public/images/elements/no-encontrado.png" /> 
                        }
                        </Col>
                    )
                } )}
                        </Col>
                    </Col>
            </Row>
            <Row>
                <Col>
                <Card.Body>
                    <Card.Text className='info-magiccard'>
                    {info}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Col>
            </Row>
        </Container>
        
    </Card>
    </>


  )
}
