import React, {useState, useEffect} from 'react'
import { Container, Form, Row, Col } from 'react-bootstrap'
import './Filter.css'
import Black from '/public/images/elements/black.png'
import Blue from '/public/images/elements/blue.png'
import Green from '/public/images/elements/green.png'
import Red from '/public/images/elements/red.png'
import White from '/public/images/elements/white.png'

export const Filter = ({changeColours}) => {


   const [elements, setElements]= useState({b:true, w:true, u:true, r:true, g:true})


const changeFilter=(e)=>{
    const id=e.target.id
    const value=e.target.checked
    setElements({...elements,[id]:value})
}

useEffect(()=>{
    const stringColours = Object.keys(elements).filter((color)=>elements[color]).toString()
    changeColours(stringColours)
},[elements])



  return (
    <>
        <Container className='box-filters'>
            <Row className='d-flex align-items-center justify-content-center' >
                <Col sm={12} md={2} className='d-flex align-items-center justify-content-center filter-black'>
                <Form.Check 
                    onChange={(e)=>{
                        changeFilter(e)
                    }}
                    type="switch"
                    id="b"
                    defaultChecked={true}
                />
                <img src={Black} width={20} />
                </Col>
                <Col sm={12} md={2} className='d-flex align-items-center justify-content-center filter-white'>
                <Form.Check 
                    onChange={(e)=>{
                        changeFilter(e)
                    }}
                    type="switch"
                    id="w"
                    defaultChecked={true}
                />
                <img src={White} width={20} />
                </Col>
                <Col sm={12} md={2} className='d-flex align-items-center justify-content-center filter-blue'>
                <Form.Check 
                    onChange={(e)=>{
                        changeFilter(e)
                    }}
                    type="switch"
                    id="u"
                    defaultChecked={true}
                />
                <img src={Blue} width={20} />
                </Col>
                <Col sm={12} md={2} className='d-flex align-items-center justify-content-center filter-red'>
                <Form.Check 
                    onChange={(e)=>{
                        changeFilter(e)
                    }}
                    type="switch"
                    id="r"
                    defaultChecked={true}
                />
                <img src={Red} width={20} />
                </Col>
                <Col sm={12} md={2} className='d-flex align-items-center justify-content-center filter-green'>
                <Form.Check 
                    onChange={(e)=>{
                        changeFilter(e)
                    }}
                    type="switch"
                    id="g"
                    defaultChecked={true}
                />
                <img src={Green} width={20} />
                </Col>
            </Row>
        </Container>
    </>

  )
}
