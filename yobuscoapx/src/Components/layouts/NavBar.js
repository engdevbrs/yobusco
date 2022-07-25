import React from "react";
import { Navbar, Nav, Container, Button, OverlayTrigger, Tooltip} from 'react-bootstrap';
import { Outlet, Link, useNavigate} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../css/NavBar.css'
import Logo from '../assets/logo.png';
import Footer from "./Footer";

const Menu = () =>{
    return (
        <>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
              <Navbar.Brand href="/"><img src={ Logo } style={{width: '64px'}}/></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/trabajadores">Trabajadores</Nav.Link>
                  <Nav.Link href="/perfil">Perfil</Nav.Link>
                  <NavDropdown title="Desplegable" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav className="session-and-create">
                  <Nav.Link className="session-in" href="/login">Iniciar sesión</Nav.Link>
                  <Nav.Link className="create" href="/crear-cuenta">Crear cuenta</Nav.Link>
                </Nav>
              </Navbar.Collapse>
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