import React from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import './MagicCard.css'

export const MagicCard = ({name, colors, type, image}) => {
  return (
    <>
    <Card style={{ width: '18rem' }}>
        <Container>
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
                        <Col sm={12}>
                        {
                colors.map((color, i)=>{
                    return (
                        <>
                        {
                        color == 'W' && <img className='img-color-magiccard' key={i} src="./../../public/images/elements/white.png" /> 
                        }
                        {
                        color == 'U' && <img className='img-color-magiccard' key={i} src="./../../public/images/elements/blue.png" /> 
                        }
                        {
                        color == 'G' && <img className='img-color-magiccard' key={i} src="./../../public/images/elements/green.png" /> 
                        }
                        {
                        color == 'B' && <img className='img-color-magiccard' key={i} src="./../../public/images/elements/black.png" /> 
                        }
                        {
                        color == 'R' && <img className='img-color-magiccard' key={i} src="./../../public/images/elements/red.png" /> 
                        }
                        {
                        color == '' && <img className='img-color-magiccard' key={i} src="./../../public/images/elements/no-encontrado.png" /> 
                        }
                        </>
                    )
                } )}
                        </Col>
                    </Col>
            </Row>
            <Row>
                <Col>
                <Card.Body>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
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
