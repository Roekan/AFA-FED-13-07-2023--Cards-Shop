import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import './Header.css'
import { useSelector } from "react-redux";
import { getUser } from "./../../reducers/sliceUser";
import { getFavorites } from "./../../reducers/sliceFavorites";
import { getProducts } from "./../../reducers/sliceCart";
import Logo from 'https://github.com/Roekan/AFA-FED-13-07-2023--Cards-Shop/blob/master/public/images/logo/logo.jpg'


export const Header = () => {

  const userTypeLogin = useSelector(getUser)?.user?.type;
  const userFavorites = useSelector(getFavorites).favorites
  const userPurchases = useSelector(getProducts).productsCart

console.log(userPurchases)


  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-header header-sticky">
        <Container>
          <Navbar.Brand href="/">
            <img className='logo-header' src={Logo} width={70} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav menu-mobile" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              {userTypeLogin==="admin"
                  ?
                  <>
                  <Nav.Link className='d-flex align-items-center justify-content-center icon-header my-1 mx-1' href="/" alt="Home">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" ><path d="M90.56,40.01c0-2.521-3.335-3.02-5.262-3.426c-1.603-0.338-3.206-0.676-4.808-1.014c1.278-1.797,2.556-3.594,3.834-5.391  c2.041-2.87-2.237-4.271-4.378-4.742c-4.466-0.982-8.931-1.964-13.396-2.947c1.418-1.997,2.837-3.993,4.255-5.989  c1.984-2.793-1.315-4.362-3.717-4.89C61.992,10.49,56.896,9.369,51.8,8.248c-4.238-0.932-8.476-1.864-12.713-2.796  c-3.115-0.685-6.394-0.02-8.477,2.429c-1.353,1.59-2.706,3.181-4.06,4.771c-4.067,4.781-8.134,9.562-12.201,14.342  c-1.267,1.489-2.533,2.977-3.799,4.465c-0.427,0.502-0.89,1.001-1.047,1.664c-0.509,2.153,1.908,3.333,3.603,3.756  c4.958,1.237,9.916,2.474,14.874,3.711c-1.003,1.179-2.005,2.358-3.008,3.538c-1.189,1.399-3.195,3.173-1.568,5.056  c1.258,1.456,3.46,1.731,5.239,2.174c1.529,0.381,3.059,0.761,4.588,1.142c-0.8,0.906-1.601,1.812-2.401,2.717  c-0.262,0.297-0.54,0.585-0.789,0.893c-1.026,1.19-0.634,2.69-0.531,4.129c0.468,6.548,0.93,13.097,1.392,19.646  c0.181,2.566-0.179,5.479,2.591,6.681c0.874,0.379,1.855,0.57,2.777,0.809c3.353,0.869,6.705,1.736,10.057,2.604  c3.921,1.015,7.843,2.03,11.763,3.046c4.685,1.215,11.047,3.734,14.411-1.301c4.189-6.271,8.552-12.434,12.83-18.645  c1.415-2.055,2.829-4.111,4.248-6.163c0.733-1.06,0.683-3.158,0.683-3.158S90.56,39.728,90.56,40.01z M65.13,64.87  c-9.507-2.25-19.014-4.501-28.521-6.751c-0.493-0.117-0.986-0.233-1.479-0.35c-0.14-0.033-0.647-0.167-0.524-0.31  c0.373-0.428,0.745-0.857,1.117-1.285c0.22-0.253,1.916-2.569,2.187-2.502c0.556,0.139,1.111,0.277,1.667,0.416  c5.466,1.363,10.932,2.727,16.398,4.091c3.146,0.785,7.665,1.099,9.801-1.907c0.993-1.397,1.985-2.794,2.978-4.191  c3.189-4.489,6.379-8.979,9.569-13.467c0.043-0.061,0.205-0.375,0.288-0.357c0.683,0.146,1.366,0.291,2.049,0.437  c1.04,0.221,2.08,0.443,3.12,0.665c0.547,0.117,1.281,0.166,1.76,0.482c-5.875,7.781-11.75,15.563-17.625,23.344  C67.161,64.184,66.651,65.229,65.13,64.87z M36.67,8.14c1.297,0,2.734,0.554,3.982,0.831c2.816,0.625,5.633,1.25,8.449,1.875  c5.3,1.177,10.601,2.354,15.901,3.531c0.092,0.02,1.507,0.383,1.458,0.433c-5.667,7.822-11.335,15.645-17.003,23.467  c-0.215,0.297-0.431,0.594-0.646,0.892c-0.563,0.778-1.447,2.151-2.481,2.151c-1.211,0.013-2.565-0.553-3.721-0.839  c-5.876-1.454-11.752-2.907-17.628-4.36c-2.508-0.62-5.017-1.24-7.525-1.861c-0.179-0.044-2.901-0.656-2.659-0.945  c2.786-3.329,5.571-6.658,8.357-9.986c2.873-3.434,5.746-6.867,8.62-10.3c0.977-1.168,1.954-2.336,2.932-3.503  C35.296,8.818,35.631,8.14,36.67,8.14z M32.71,41.77c2.395,0.6,4.791,1.199,7.186,1.798c2.694,0.674,5.389,1.581,8.197,1.081  c1.735-0.309,3.44-1.022,4.487-2.496c0.462-0.649,0.923-1.299,1.385-1.949c1.747-2.459,3.494-4.918,5.241-7.377  c1.502-2.113,3.004-4.227,4.505-6.341c0.291-0.41,0.582-0.819,0.873-1.229c0.066-0.093,1.333,0.287,1.453,0.313  c2.75,0.611,5.5,1.222,8.25,1.833c1.237,0.275,2.475,0.55,3.712,0.825c0.066,0.015,1.821,0.481,1.792,0.51  c-5.796,8.001-11.593,16.003-17.39,24.005c-0.848,1.17-1.545,2.858-3.3,2.445c-1.185-0.212-2.363-0.584-3.532-0.873  c-5.933-1.467-11.865-2.933-17.797-4.4c-2.967-0.733-5.934-1.467-8.901-2.2c-0.213-0.053-0.78-0.139-0.78-0.358  c0-0.374,0.858-1.094,1.085-1.365C30.354,44.585,31.532,43.178,32.71,41.77z"/></svg>
                  </Nav.Link>
                  <Nav.Link className='d-flex align-items-center justify-content-center icon-header my-1 mx-1' href="favorites" alt="Favoritos">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="#000000"><path className='left-heart' d="M8.106 18.247C5.298 16.083 2 13.542 2 9.137C2 4.274 7.5.825 12 5.501V20.5c-1 0-2-.77-3.038-1.59c-.277-.218-.564-.438-.856-.663Z"></path><path className='right-heart' d="M15.038 18.91C17.981 16.592 22 14 22 9.138c0-4.863-5.5-8.312-10-3.636V20.5c1 0 2-.77 3.038-1.59Z"></path></g></svg>
                                    {userFavorites.length>0 && <span className='d-flex align-items-center justify-content-center number-info-header'>{userFavorites.length}</span>}
                  </Nav.Link>
                  
                  <Nav.Link className='d-flex align-items-center justify-content-center icon-header my-1 mx-1' href="cart" alt="Carrito">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path  d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"></path></svg>
                                    {userPurchases.length>0 && <span className='d-flex align-items-center justify-content-center number-info-header'>{userPurchases.length}</span>}
                  </Nav.Link>
                  
                  <Nav.Link className='d-flex align-items-center justify-content-center icon-header my-1 mx-1' href="user" alt="Usuario">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 22a8 8 0 1 1 16 0H4Zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6Z"></path></svg>
                  </Nav.Link>
                  <Nav.Link className='d-flex align-items-center justify-content-center icon-header my-1 mx-1' href="listusers" alt="Usuario">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256"><g fill="#000000"><path d="M112 168a32 32 0 1 1-32-32a32 32 0 0 1 32 32ZM80 32a32 32 0 1 0 32 32a32 32 0 0 0-32-32Zm96 104a32 32 0 1 0 32 32a32 32 0 0 0-32-32Zm0-40a32 32 0 1 0-32-32a32 32 0 0 0 32 32Z" opacity=".2"></path><path d="M27.2 126.4a8 8 0 0 0 11.2-1.6a52 52 0 0 1 83.2 0a8 8 0 0 0 11.2 1.59a7.73 7.73 0 0 0 1.59-1.59a52 52 0 0 1 83.2 0a8 8 0 0 0 12.8-9.61A67.85 67.85 0 0 0 203 93.51a40 40 0 1 0-53.94 0a67.27 67.27 0 0 0-21 14.31a67.27 67.27 0 0 0-21-14.31a40 40 0 1 0-53.94 0A67.88 67.88 0 0 0 25.6 115.2a8 8 0 0 0 1.6 11.2ZM176 40a24 24 0 1 1-24 24a24 24 0 0 1 24-24Zm-96 0a24 24 0 1 1-24 24a24 24 0 0 1 24-24Zm123 157.51a40 40 0 1 0-53.94 0a67.27 67.27 0 0 0-21 14.31a67.27 67.27 0 0 0-21-14.31a40 40 0 1 0-53.94 0A67.88 67.88 0 0 0 25.6 219.2a8 8 0 1 0 12.8 9.6a52 52 0 0 1 83.2 0a8 8 0 0 0 11.2 1.59a7.73 7.73 0 0 0 1.59-1.59a52 52 0 0 1 83.2 0a8 8 0 0 0 12.8-9.61A67.85 67.85 0 0 0 203 197.51ZM80 144a24 24 0 1 1-24 24a24 24 0 0 1 24-24Zm96 0a24 24 0 1 1-24 24a24 24 0 0 1 24-24Z"></path></g></svg>
                  </Nav.Link>
                  </>
                  : userTypeLogin 
                  ?                  
                  <>
                  <Nav.Link className='d-flex align-items-center justify-content-center icon-header my-1 mx-1' href="/" alt="Home">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" ><path d="M90.56,40.01c0-2.521-3.335-3.02-5.262-3.426c-1.603-0.338-3.206-0.676-4.808-1.014c1.278-1.797,2.556-3.594,3.834-5.391  c2.041-2.87-2.237-4.271-4.378-4.742c-4.466-0.982-8.931-1.964-13.396-2.947c1.418-1.997,2.837-3.993,4.255-5.989  c1.984-2.793-1.315-4.362-3.717-4.89C61.992,10.49,56.896,9.369,51.8,8.248c-4.238-0.932-8.476-1.864-12.713-2.796  c-3.115-0.685-6.394-0.02-8.477,2.429c-1.353,1.59-2.706,3.181-4.06,4.771c-4.067,4.781-8.134,9.562-12.201,14.342  c-1.267,1.489-2.533,2.977-3.799,4.465c-0.427,0.502-0.89,1.001-1.047,1.664c-0.509,2.153,1.908,3.333,3.603,3.756  c4.958,1.237,9.916,2.474,14.874,3.711c-1.003,1.179-2.005,2.358-3.008,3.538c-1.189,1.399-3.195,3.173-1.568,5.056  c1.258,1.456,3.46,1.731,5.239,2.174c1.529,0.381,3.059,0.761,4.588,1.142c-0.8,0.906-1.601,1.812-2.401,2.717  c-0.262,0.297-0.54,0.585-0.789,0.893c-1.026,1.19-0.634,2.69-0.531,4.129c0.468,6.548,0.93,13.097,1.392,19.646  c0.181,2.566-0.179,5.479,2.591,6.681c0.874,0.379,1.855,0.57,2.777,0.809c3.353,0.869,6.705,1.736,10.057,2.604  c3.921,1.015,7.843,2.03,11.763,3.046c4.685,1.215,11.047,3.734,14.411-1.301c4.189-6.271,8.552-12.434,12.83-18.645  c1.415-2.055,2.829-4.111,4.248-6.163c0.733-1.06,0.683-3.158,0.683-3.158S90.56,39.728,90.56,40.01z M65.13,64.87  c-9.507-2.25-19.014-4.501-28.521-6.751c-0.493-0.117-0.986-0.233-1.479-0.35c-0.14-0.033-0.647-0.167-0.524-0.31  c0.373-0.428,0.745-0.857,1.117-1.285c0.22-0.253,1.916-2.569,2.187-2.502c0.556,0.139,1.111,0.277,1.667,0.416  c5.466,1.363,10.932,2.727,16.398,4.091c3.146,0.785,7.665,1.099,9.801-1.907c0.993-1.397,1.985-2.794,2.978-4.191  c3.189-4.489,6.379-8.979,9.569-13.467c0.043-0.061,0.205-0.375,0.288-0.357c0.683,0.146,1.366,0.291,2.049,0.437  c1.04,0.221,2.08,0.443,3.12,0.665c0.547,0.117,1.281,0.166,1.76,0.482c-5.875,7.781-11.75,15.563-17.625,23.344  C67.161,64.184,66.651,65.229,65.13,64.87z M36.67,8.14c1.297,0,2.734,0.554,3.982,0.831c2.816,0.625,5.633,1.25,8.449,1.875  c5.3,1.177,10.601,2.354,15.901,3.531c0.092,0.02,1.507,0.383,1.458,0.433c-5.667,7.822-11.335,15.645-17.003,23.467  c-0.215,0.297-0.431,0.594-0.646,0.892c-0.563,0.778-1.447,2.151-2.481,2.151c-1.211,0.013-2.565-0.553-3.721-0.839  c-5.876-1.454-11.752-2.907-17.628-4.36c-2.508-0.62-5.017-1.24-7.525-1.861c-0.179-0.044-2.901-0.656-2.659-0.945  c2.786-3.329,5.571-6.658,8.357-9.986c2.873-3.434,5.746-6.867,8.62-10.3c0.977-1.168,1.954-2.336,2.932-3.503  C35.296,8.818,35.631,8.14,36.67,8.14z M32.71,41.77c2.395,0.6,4.791,1.199,7.186,1.798c2.694,0.674,5.389,1.581,8.197,1.081  c1.735-0.309,3.44-1.022,4.487-2.496c0.462-0.649,0.923-1.299,1.385-1.949c1.747-2.459,3.494-4.918,5.241-7.377  c1.502-2.113,3.004-4.227,4.505-6.341c0.291-0.41,0.582-0.819,0.873-1.229c0.066-0.093,1.333,0.287,1.453,0.313  c2.75,0.611,5.5,1.222,8.25,1.833c1.237,0.275,2.475,0.55,3.712,0.825c0.066,0.015,1.821,0.481,1.792,0.51  c-5.796,8.001-11.593,16.003-17.39,24.005c-0.848,1.17-1.545,2.858-3.3,2.445c-1.185-0.212-2.363-0.584-3.532-0.873  c-5.933-1.467-11.865-2.933-17.797-4.4c-2.967-0.733-5.934-1.467-8.901-2.2c-0.213-0.053-0.78-0.139-0.78-0.358  c0-0.374,0.858-1.094,1.085-1.365C30.354,44.585,31.532,43.178,32.71,41.77z"/></svg>
                  </Nav.Link>
                  <Nav.Link className='d-flex align-items-center justify-content-center icon-header my-1 mx-1' href="favorites" alt="Favoritos">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="#000000"><path className='left-heart' d="M8.106 18.247C5.298 16.083 2 13.542 2 9.137C2 4.274 7.5.825 12 5.501V20.5c-1 0-2-.77-3.038-1.59c-.277-.218-.564-.438-.856-.663Z"></path><path className='right-heart' d="M15.038 18.91C17.981 16.592 22 14 22 9.138c0-4.863-5.5-8.312-10-3.636V20.5c1 0 2-.77 3.038-1.59Z"></path></g></svg>
                  {userFavorites.length>0 && <span className='d-flex align-items-center justify-content-center number-info-header'>{userFavorites.length}</span>}
                  </Nav.Link>
                  
                  <Nav.Link className='d-flex align-items-center justify-content-center icon-header my-1 mx-1' href="cart" alt="Carrito">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path  d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"></path></svg>
                  {userPurchases.length>0 && <span className='d-flex align-items-center justify-content-center number-info-header'>{userPurchases.length}</span>}
                  </Nav.Link>
                  
                  <Nav.Link className='d-flex align-items-center justify-content-center icon-header my-1 mx-1' href="user" alt="Usuario">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 22a8 8 0 1 1 16 0H4Zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6Z"></path></svg>
                  </Nav.Link>
                  </>
                  :
                  <>
                  <Nav.Link className='d-flex align-items-center justify-content-center icon-header my-1 mx-1' href="login" alt="Usuario">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 0 0-12 0H4Zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6Zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4Z"></path></svg>
                  </Nav.Link>
                  </>
              }
              
              
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
    
  )
}
