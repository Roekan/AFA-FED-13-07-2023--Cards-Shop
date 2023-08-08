import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./login.css";
import { users } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../reducers/sliceUser";



export const Login = () => {


    const navigate = useNavigate();
    const dispatch = useDispatch();

  const [userData, setUserData]=useState({
    email:"",
    password:"",
  })


  const logIn=  ()=>{
    users()
    .then(
      res=>{
      const userFound = res.find(element => element.email==userData.email && element.password==userData.password );

        if(userFound){
          console.log(userFound.email)
          dispatch(login({ user: userFound}))
          console.log(userFound)
          setTimeout(()=> {
            navigate("/");
          },750)
        }else{
          console.log('Contraseña o usuario no coinciden')
        }
      }
    )
    .catch(
      error=>{
        console.log(error)
      }
    )
  }


  return (
    <>
      <Container className="pt-5">
      <Row className="d-flex align-items-center justify-content-center">
          <Col
            className="d-flex justify-content-center text-login"
            sm={12}
            md={10}
            lg={6}
          >
            <p>
              Si aun no estas registrado puedes registrarte desde &nbsp;
              <a className="" href="/register" alt="Usuario">
                aquí
              </a>
            </p>
          </Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-center">
          <Col sm={12} md={10} lg={6}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1" className="label-login">
                Email
              </InputGroup.Text>
              <Form.Control
                className="p-1 bg-input-login "
                type="email"
                placeholder="Email"
                value={userData.email}
                onChange={(e)=>{setUserData({...userData, email:e.target.value})}}
                aria-label="Email"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon2" className="label-login">
                Contraseña
              </InputGroup.Text>
              <Form.Control
                className="p-1 bg-input-login "
                type="password"
                placeholder="Contraseña"
                value={userData.password}
                onChange={(e)=>{setUserData({...userData, password:e.target.value})}}
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-center">
          <Col
            className="d-flex align-items-center justify-content-center py-4"
            sm={12}
            md={10}
            lg={6}
          >
            <Button variant="outline-secondary" className=" button-login" onClick={()=>{logIn()}}>
              Login
            </Button>
          </Col>
        </Row>
        </Container>
    </>
  );
};
