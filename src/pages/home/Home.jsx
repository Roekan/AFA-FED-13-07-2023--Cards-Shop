import {useState, useEffect} from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import './Home.css'
import { bringCards } from '../../services/apiCalls';
import { MagicCard } from '../../common/magicCard/MagicCard';

export const Home = () => {

const [cards, setCards] = useState([]);

useEffect(()=>{
  bringCards()
  .then((res)=>{
    setCards(res)
  })
  .catch((res)=>{
    console.log("Error en la llamada bringCards: " )
  })
})



  return (
    <>
    <Container fluid className='d-flex align-items-center justify-content-center bg-warning box-home'>
      <Row>
        <Col className='bg-danger'>
        {cards.map((card)=>{
          return (
            <MagicCard key={card.id} name={card.name} color={card.color} type={card.type} image={card.imageUrl} /> 
          )
        })}
        </Col>
      </Row>
    </Container>
    </>
  )
}
