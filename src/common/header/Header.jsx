import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import './Header.css'
import { useSelector } from "react-redux";
import { getUser } from "./../../reducers/sliceUser/";



export const Header = () => {

  const userEmailLogin = useSelector(getUser).user.email;




  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-header header-sticky">
        <Container>
          <Navbar.Brand href="/">
            <img className='logo-header' src='./../../public/images/logo/logo.png' width={70} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav menu-mobile" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              {userEmailLogin 
                  ?
                  <Nav.Link className='d-flex align-items-center justify-content-center icon-header my-1 mx-1' href="user" alt="Usuario">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 22a8 8 0 1 1 16 0H4Zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6Z"></path></svg>
                  </Nav.Link>
                  :
                  <Nav.Link className='d-flex align-items-center justify-content-center icon-header my-1 mx-1' href="login" alt="Usuario">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 0 0-12 0H4Zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6Zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4Z"></path></svg>
                  </Nav.Link>
              }
              
              <Nav.Link className='d-flex align-items-center justify-content-center icon-header my-1 mx-1' href="favorites" alt="Favoritos">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="#000000"><path className='left-heart' d="M8.106 18.247C5.298 16.083 2 13.542 2 9.137C2 4.274 7.5.825 12 5.501V20.5c-1 0-2-.77-3.038-1.59c-.277-.218-.564-.438-.856-.663Z"></path><path className='right-heart' d="M15.038 18.91C17.981 16.592 22 14 22 9.138c0-4.863-5.5-8.312-10-3.636V20.5c1 0 2-.77 3.038-1.59Z"></path></g></svg>
              </Nav.Link>
              <Nav.Link className='d-flex align-items-center justify-content-center icon-header my-1 mx-1' href="cart" alt="Carrito">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path  d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"></path></svg>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
    
  )
}
