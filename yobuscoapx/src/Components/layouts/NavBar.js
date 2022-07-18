import React from "react";
import { Navbar, Nav, Container, Button, OverlayTrigger, Tooltip} from 'react-bootstrap';
import { Outlet, Link, useNavigate} from 'react-router-dom';
import '../css/NavBar.css'
import Logo from '../assets/logo.png';
import Footer from "./Footer";

const Menu = () =>{
    return (
        <>
          <Navbar variant="dark">
          <Container className='navitems' fluid>
          <Navbar.Brand as={Link} to="/"><img src={ Logo } style={{width: '64px'}}/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" >Inicio</Nav.Link>
            <Nav.Link as={Link} to="/cartera" >Menú</Nav.Link>
            <Nav.Link as={Link} to="/pedidos" >Pedidos</Nav.Link>
            <Nav.Link as={Link} to="/usuarios" >Usuarios</Nav.Link>
          </Nav>
          </Container>
          </Navbar>
          <section>
            <Outlet></Outlet>
          </section>
          <Footer/>
        </>
    )
}

export default Menu;