import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import './Header.css'

export const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-header header-sticky">
        <Container>
          <Navbar.Brand href="#home">
            <img src='./../../public/images/logo/logo.png' width={70} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav menu-mobile" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link className='d-flex align-items-center justify-content-center icon-header my-1 mx-1' href="#user" alt="Usuario">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7zm10 28h-2v-5a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v5H6v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z"></path></svg>
              </Nav.Link>
              <Nav.Link className='d-flex align-items-center justify-content-center icon-header my-1 mx-1' href="#favorites" alt="Favoritos">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.19 2.25c-.26 0-.52.06-.77.15L3.06 5.45a1.994 1.994 0 0 0-1.09 2.6L6.93 20a2 2 0 0 0 1.81 1.25c.26 0 .53-.03.79-.15l7.37-3.05a2.02 2.02 0 0 0 1.23-1.8c.01-.25-.04-.54-.13-.8L13 3.5a1.954 1.954 0 0 0-1.81-1.25m3.48 0l3.45 8.35V4.25a2 2 0 0 0-2-2m4.01 1.54v9.03l2.43-5.86a1.99 1.99 0 0 0-1.09-2.6m-10.28-.14l4.98 12.02l-7.39 3.06L3.8 7.29"></path></svg>
              </Nav.Link>
              <Nav.Link className='d-flex align-items-center justify-content-center icon-header my-1 mx-1' href="#cart" alt="Carrito">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path  d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"></path></svg>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
    
  )
}
