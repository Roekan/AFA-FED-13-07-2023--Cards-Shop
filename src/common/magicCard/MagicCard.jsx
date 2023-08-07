import React from 'react'
import { Link } from "react-router-dom";
import { Card, Container, Row, Col } from 'react-bootstrap'
import { addFavorites, deleteFavorites, getFavorites } from "./../../reducers/sliceFavorites/"
import { useDispatch, useSelector } from "react-redux";
import './MagicCard.css'







export const MagicCard = ({id, name, colors, type, image, rarity, info, ...props}) => {

    const dispatch = useDispatch();
    const addToFavorite=()=>{
        const data = {id, name, colors, type, image, rarity, info, ...props}
        if(isFavorite()){   
          dispatch(deleteFavorites(data));
        }else{
          dispatch(addFavorites(data));
        }
      }

      const favorites = useSelector(getFavorites).favorites
      const isFavorite = ()=>{
        if (favorites.find(element => element.id == id)){
          return true;
        }else{
          return false;
        }
      }



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
            <Row>
            <Col
          className="d-flex justify-content-center alignt-items-center"
          xs={4}
          md={2}
        >
          <div className=" py-2" onClick={()=>{addToFavorite()}}>
            <svg
              className={`${isFavorite() ? 'add-favorite': 'button-card-img'}`}
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <g>
                <path 
                
                  d="M19.071 13.142L13.414 18.8a2 2 0 0 1-2.828 0l-5.657-5.657A5 5 0 1 1 12 6.072a5 5 0 0 1 7.071 7.07Z"
                  opacity=".16"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19.071 13.142L13.414 18.8a2 2 0 0 1-2.828 0l-5.657-5.657a5 5 0 0 1 7.07-7.071a5 5 0 0 1 7.072 7.071Z"
                ></path>
              </g>
            </svg>
          </div>
        </Col>
            </Row>
        </Container>
    </Card>
    </>


  )
}
