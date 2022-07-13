import React from "react";
import '../css/NavBar.css'
import Logo from '../assets/logo.png';

const Navbar = () =>{
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={Logo} alt="" style={{ width: '80px' }}/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Empleos</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Desplegable
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Página 1</a></li>
                  <li><a className="dropdown-item" href="#">Página 2</a></li>
                  <li><a className="dropdown-item" href="#">Página 3</a></li>
                </ul>
              </li>
            </ul>
            <div className="session-in">
              <a href="/login">Ingresar</a>
            </div>
            <div className="create">
              <a href="/create-account">Crear cuenta</a>
            </div>
          </div>
        </div>
        </nav>
        </>
    );
}

export default Navbar;