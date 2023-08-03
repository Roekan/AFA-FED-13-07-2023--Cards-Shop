import React from 'react'
import { Link } from "react-router-dom";
import { Card, Container, Row, Col } from 'react-bootstrap'
import './MagicCard.css'

export const MagicCard = ({id, name, colors, type, image, rarity, info}) => {
  return (
    <>
    <Card className='box-magiccard' style={{ width: '18rem' }}>
        <Container className='bg-info container-magiccards'>
            <Row className='d-flex align-items-top justify-content-between mt-2'>
                <Col className='d-flex align-items-top justify-content-start' sm={4}>
                    {image
                    ? <Card.Img className='img-magiccard' variant="top" src={image} />
                    : <Card.Img className='img-magiccard' variant="top" src={'./../../public/images/no-image.jpg'} />
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
                        <div className='d-inline p-1 flex-row ' key={i} sm={1}>
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
                        </div>
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
                    <Link variant="primary" to={`/${id}`}>Ver detalle</Link>
                </Card.Body>
                </Col>
            </Row>
        </Container>
        
    </Card>
    </>


  )
}
