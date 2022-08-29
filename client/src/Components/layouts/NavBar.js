import React from "react";
import { Outlet } from 'react-router-dom';
import '../css/NavBar.css'
import Footer from "./Footer";

const Menu = () =>{

    const menuToggle = () => {
      let menuHolder = document.getElementById('menuHolder');

      if(menuHolder.className === "drawMenu") menuHolder.className = ""
      else menuHolder.className = "drawMenu"
    }

    return (
        <>
          <div id="menuHolder">
            <div role="navigation" className="sticky-top" id="mainNavigation">
              <div className="flexMain">
                <div className="flex2">
                  <button className="whiteLink siteLink"  onClick={() => menuToggle()}><i className="fas fa-bars me-2"></i> MENÚ</button>
                </div>
                <div className="flex3 text-end mx-5" id="siteBrand">
                <button type="button" className="btn btn-primary position-relative">
                  Mensajes
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    9
                  </span>
                </button>
                </div>
              </div>
            </div>
            <div id="menuDrawer">
              <div className="p-4 border-bottom">
                <div className='row'>
                  <div className="col text-end ">
                    <i className="fas fa-times" onClick={() => menuToggle()}></i>
                  </div>
                </div>
              </div>
              <div>
                <a href="/" className="nav-menu-item"><i className="fas fa-home me-3"></i>Inicio</a>
                <a href="/trabajadores" className="nav-menu-item"><i className="fas fa-hard-hat me-3"></i>Trabajadores</a>
                <a href="/sobre-nosotros" className="nav-menu-item"><i className="fas fa-exclamation-circle me-3"></i>Sobre Nosotros</a>
                <a href="/preguntas-frecuentes" className="nav-menu-item"><i className="fas fa-question-circle me-3"></i>Preguntas Frecuentes</a>
                <a href="/crear-cuenta" className="nav-menu-item"><i className="fas fa-user-plus me-3"></i>Crear Cuenta</a>
                <a href="/login" className="nav-menu-item"><i className="fas fa-sign-in me-3"></i>Iniciar Sesión</a>
              </div>
            </div>
          </div>
          <section>
            <Outlet></Outlet>
          </section>
          <Footer/>
        </>
    )
}

export default Menu;