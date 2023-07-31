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
        
        {cards.map((card)=>{
          return (
            <>
            <Col className='bg-danger m-1 p-1 d-flex align-items-center justify-content-center'>
              <MagicCard key={card.id} name={card.name} colors={card.colors} type={card.type} image={card.imageUrl} /> 
            </Col>
            </>
          )
        })}
        
      </Row>
    </Container>
    </>
  )
}
