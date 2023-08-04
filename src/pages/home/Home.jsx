import {useState, useEffect, useRef} from 'react'

import { Col, Container, Row, Pagination } from 'react-bootstrap'
import './Home.css'
import { bringCardsByName } from '../../services/apiCalls';
import { MagicCard } from '../../common/magicCard/MagicCard';
import { Searcher } from '../../common/searcher/Searcher';
import { Filter } from '../../common/filter/Filter';

export const Home = () => {

const [cards, setCards] = useState([]);
const [page, setPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);
const [input, setInput] = useState("");
const [colours, setColours] = useState("b,w,u,r,g");

// const anchor = useRef(null);

const calculateTotalPages = (res)=>{
  if(res.headers['total-count']%100==0){
  return Math.trunc(res.headers['total-count']/100)
  }else{
  return Math.trunc(res.headers['total-count']/100)+ 1
  }
}




const changeValue = (name) =>{
  setPage(1)
  setInput(name)
}

const changeColours = (changeColours) =>{
  setPage(1)
  setColours(changeColours)
}

useEffect(()=>{
    const bringData = setTimeout(() => {
      bringCardsByName(input,colours, page)
      .then((res)=>{
        setCards(res.cards)
        setTotalPages(calculateTotalPages(res));
        console.log('BBB')
      })
      .catch((error)=>{
        console.log(`Error en la llamada bringCardsByName: ${error}` )
      })
    }, 500);
    return () => clearTimeout(bringData)
  
  
},[page, input, colours])

const cambiarPagina = (pag) => {
  // window.scrollTo({ top: anchor.current.offsetTop, behavior: "smooth" });
  let pagina = pag;
  if (pagina < 1) {
    pagina = 1;
  }
  if (pagina > totalPages) {
    pagina = totalPages;
  }
  setPage(pagina);
};



  return (
    <>
    <Container className='bg-dark box-searcher-home'>
          <Row className='d-flex align-items-center justify-content-around '>
            <Col sm={12} lg={6} className='d-flex justify-content-center '>
              <Searcher changeValue={(e) => changeValue(e)}/>
            </Col >
            <Col sm={12} lg={6} className='d-flex justify-content-center text-info'>
              <Filter changeColours={(e) => changeColours(e)}/>
            </Col>
          </Row>
    </Container>

    <Container fluid className='d-flex align-items-center justify-content-center flex-column bg-dark py-1 box-cards-home'>
      <Row>
        {cards && cards.map((card)=>{
          return (
            <Col key={card.id} className='rounded-2 my-2 d-flex align-items-center justify-content-center box-card-home'>
              <MagicCard id={card.id} name={card.name} colors={card.colors} type={card.type} image={card.imageUrl} rarity={card.rarity} info={card.text} {...card} /> 
            </Col>
          )
        })}
        
      </Row>
      <Row>
        <Pagination>
         <Pagination.First disabled = {page<=1} onClick={() => {
            cambiarPagina(1);
          }}/>
        <Pagination.Prev 
          disabled={page <= 1}
          onClick={() => {
            cambiarPagina(page - 1);
                }}/>

        <Pagination.Ellipsis /> 

        {page > 1 && (
                <Pagination.Item
                  onClick={() => {
                    cambiarPagina(page - 1);
                  }}
                >
                  {page - 1}
                </Pagination.Item>
              )}
          
        <Pagination.Item active>{page}</Pagination.Item>
          
        {page < totalPages && (
                <Pagination.Item
                  onClick={() => {
                    cambiarPagina(page + 1);
                  }}
                >
                  {page + 1}
                </Pagination.Item>
              )}

        <Pagination.Ellipsis />

        <Pagination.Next 
          disabled={page >= totalPages}
          onClick={() => {
            cambiarPagina(page + 1);
          }}
        />
         <Pagination.Last disabled = {page>=totalPages} onClick={() => {
            cambiarPagina(totalPages);
          }} />
      </Pagination> 
      </Row>
    </Container>
    </>
  )
}
