import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet } from 'react-router-dom';

import { useLoginContext } from "../contexts/AuthContext";
import '../css/NavBar.css'
import Footer from "./Footer";

const Menu = () =>{

  const { userData, setUserData } = useLoginContext()
  const [ userPhoto, setUserPhoto] = useState([])

  const menuToggle = () => {
    let menuHolder = document.getElementById('menuHolder');

    if(menuHolder.className === "drawMenu"){
      menuHolder.className = ""
    }
    else{
      menuHolder.className = "drawMenu"
    }
  }

  const logOut = () =>{
    localStorage.removeItem('accessToken')
  }

  useEffect(() =>{
    if(userData.token !== undefined || localStorage.getItem('accessToken')){
        Axios.post("http://52.91.196.215:3001/api/user-info", {
            'authorization' : `${userData.token || localStorage.getItem('accessToken')}`
        })
          .then((result) => {
              if(result.status === 200){
                setUserPhoto(result.data[0].userPhoto)
              }
          }).catch(error => {

          });
    }
  },[userData.token])

  return (
      <>
        <div id="menuHolder">
          <div role="navigation" className="sticky-top" id="mainNavigation">
            <div className="flexMain">
              <div className="flex2">
                <button className="whiteLink siteLink"  onClick={() => menuToggle()}><i className="fas fa-bars me-2"></i> MENÚ</button>
              </div>
                {
                  (userData.token !== undefined || localStorage.getItem('accessToken')) ?  <>
                  <ul class="navbar-nav d-flex flex-row align-items-center me-3">
                    <li class="nav-item me-4 me-lg-4 dropdown">
                    <button type="button" class="btn btn-sm" style={{backgroundColor: '#212529'}}>
                    <i class='fas fa-comment-dots' style={{'font-size':'24px','color': '#5f738f'}}></i>
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        99+
                        <span class="visually-hidden">unread messages</span>
                      </span>
                    </button>
                    </li>
                    <li class="nav-item me-3 me-lg-0 dropdown">
                      <div className="nav-link dropdown-toggle" id="navbarDropdown1" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false" style={{color: 'grey'}}>
                        <img id="photoUser" src={'http://52.91.196.215:3001/api/images/'+ userPhoto} className="rounded-circle" height="35" width="35"
                          alt="" loading="lazy" />
                      </div>
                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown1">
                        <li><Link to={'/perfil'} className="dropdown-item" >Mi Perfil</Link></li>
                        <li>
                          <hr className="dropdown-divider"/>
                        </li>
                        <li>
                          <a className="dropdown-item" onClick={() => logOut()} href="/"><i className="fa fa-sign-out me-2"></i>Cerrar Sesión</a>
                        </li>
                      </ul>
                    </li>
                </ul>
                </> : <><a href="/login" className="signin-item p-2"><i className="fas fa-sign-in me-2" style={{color: 'white'}}></i>Iniciar Sesión</a></>
                }
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
              <Link to={'/'} className="nav-menu-item" onClick={() => menuToggle()}><i className="fas fa-home me-3"></i>Inicio</Link>
              <Link to={'/trabajadores'}  className="nav-menu-item" onClick={() => menuToggle()}><i className="fas fa-hard-hat me-3"></i>Trabajadores</Link>
              <Link to={'/sobre-nosotros'}  className="nav-menu-item" onClick={() => menuToggle()}><i className="fas fa-exclamation-circle me-3"></i>Sobre Nosotros</Link>
              <Link to={'/preguntas-frecuentes'} className="nav-menu-item" onClick={() => menuToggle()}><i className="fas fa-question-circle me-3"></i>Preguntas Frecuentes</Link>
              <Link to={'/crear-cuenta'} className="nav-menu-item" onClick={() => menuToggle()}><i className="fas fa-user-plus me-3"></i>Crear Cuenta</Link>
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