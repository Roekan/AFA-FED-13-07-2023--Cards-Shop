import React, {useState} from 'react'
import { Container, Form, Row, Col } from 'react-bootstrap'

export const Filter = ({changeColours}) => {


   const [elements, setElements]= useState({b:true, w:true, u:true, r:true, g:true})


const changeFilter=(e)=>{
    const id=e.target.id
    const value=e.target.checked
    setElements({...elements,[id]:value})
    const stringColours = Object.keys(elements).filter((color)=>elements[color]).toString()
    changeColours(stringColours)
}





  return (
    <>
        <Container>
            <Row>
                <Col className='d-flex align-items-center justify-content-center'>
                <Form.Check 
                    onChange={(e)=>{
                        changeFilter(e)
                    }}
                    type="switch"
                    id="u"
                    defaultChecked={true}
                />
                <img src='./../../public/images/elements/black.png' width={20} />
                </Col>
                <Col className='d-flex align-items-center justify-content-center'>
                <Form.Check 
                    onChange={(e)=>{
                        changeFilter(e)
                    }}
                    type="switch"
                    id="w"
                    defaultChecked={true}
                />
                <img src='./../../public/images/elements/white.png' width={20} />
                </Col>
                <Col className='d-flex align-items-center justify-content-center'>
                <Form.Check 
                    onChange={(e)=>{
                        changeFilter(e)
                    }}
                    type="switch"
                    id="b"
                    defaultChecked={true}
                />
                <img src='./../../public/images/elements/blue.png' width={20} />
                </Col>
                <Col className='d-flex align-items-center justify-content-center'>
                <Form.Check 
                    onChange={(e)=>{
                        changeFilter(e)
                    }}
                    type="switch"
                    id="r"
                    defaultChecked={true}
                />
                <img src='./../../public/images/elements/red.png' width={20} />
                </Col>
                <Col className='d-flex align-items-center justify-content-center'>
                <Form.Check 
                    onChange={(e)=>{
                        changeFilter(e)
                    }}
                    type="switch"
                    id="g"
                    defaultChecked={true}
                />
                <img src='./../../public/images/elements/green.png' width={20} />
                </Col>
            </Row>
        </Container>
    </>

  )
}
