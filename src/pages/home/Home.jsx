import {useState, useEffect, useRef} from 'react'

import { Col, Container, Row, Pagination } from 'react-bootstrap'
import './Home.css'
import { bringCardsPagination, bringCardsByName } from '../../services/apiCalls';
import { MagicCard } from '../../common/magicCard/MagicCard';
import { Searcher } from '../../common/searcher/Searcher';

export const Home = () => {

const [cards, setCards] = useState([]);
const [page, setPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);
const [input, setInput] = useState("");

// const anchor = useRef(null);


const changeValue = (name) =>{
  setPage(1)
  setInput(name)
}

useEffect(()=>{

  if(input==""){
    bringCardsPagination(page)
    .then((res)=>{
      setCards(res)
      setTotalPages();
    })
    .catch((error)=>{
      console.log(`Error en la llamada bringCards: ${error}` )
    })
  }else{
    setTimeout(() => {
      bringCardsByName(input)
      .then((res)=>{
        setCards(res)
        console.log('LLeno')
      })
      .catch((error)=>{
        console.log(`Error en la llamada bringCardsByName: ${error}` )
      })
    }, 500);
  }
  
},[input, page])

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
    <Container fluid className='d-flex align-items-center justify-content-center flex-column bg-dark py-1 box-home'>
      <Row className='d-flex align-items-center bg-success '>
        <Col className='d-flex justify-content-center bg-danger '>
        <Searcher changeValue={(e) => changeValue(e)}/>
        </Col >
        <Col className='d-flex justify-content-center bg-danger text-info'>
        AAA
        </Col>
      </Row>
      <Row>
        {cards && cards.map((card)=>{
          return (
            <Col key={card.id} className='rounded-2 my-2 d-flex align-items-center justify-content-center box-card-home'>
              <MagicCard  name={card.name} colors={card.colors} type={card.type} image={card.imageUrl} rarity={card.rarity} info={card.text} /> 
            </Col>
          )
        })}
        
      </Row>
      <Row>
        <Pagination>
        {/* <Pagination.First /> */}
        <Pagination.Prev 
          disabled={page <= 1}
          onClick={() => {
            cambiarPagina(page - 1);
                }}/>
        {/* <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis /> */}
        <Pagination.Item active>{page}</Pagination.Item>
          {/* <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item> */}
        <Pagination.Next 
          disabled={page >= totalPages}
          onClick={() => {
            cambiarPagina(page + 1);
          }}
        />
        {/* <Pagination.Last /> */}
      </Pagination> 
      </Row>
    </Container>
    </>
  )
}
