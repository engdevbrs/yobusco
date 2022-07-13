import React from 'react'
import '../css/Home.css';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import united from '../assets/united.png';
import tools from '../assets/tools.png';
import worker from '../assets/worker.png';
import working from '../assets/working.png';

const Home = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slide1} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slide2} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slide3} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="information container-fluid row row-cols-1 row-cols-md-2 g-4 mt-2 mb-4">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <strong>Yo Busco</strong> es una plataforma que tiene por objetivo crear una comunidad
              con personas que ofrezcan su oficio o profesión, para que personas de cualquier parte de Chile puedan
              acceder a su perfil personal, la cuál tendrá una serie de información ( Como su puntuación ), esta será de ayuda
              para que las personas tengan una idea de con quién está tratando y a quién está solicitando los servicios.
            </div>
          </div>
        </div>
        <div className="information-card col">
          <img src={working} alt="..." style={{width: '20rem'}}/>
        </div>
      </div>
      <div className="container-fluid row row-cols-1 row-cols-md-3 g-4 mt-2 mb-4">
        <div className="col">
          <div className="card card-features h-100 p-3">
            <img src={tools} className="card-img-top" alt="..." style={{width: '64px'}}/>
            <div className="card-body">
              <h5 className="card-title">Variedad de servicios</h5>
              <p className="card-text">Nuestro objetivo es poseer una gran variedad de oficios, la cuál solvente tu necesidad del momento.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card card-features h-100 p-3">
            <img src={worker} className="card-img-top" alt="..." style={{width: '64px'}}/>
            <div className="card-body">
              <h5 className="card-title">Fácil acceso</h5>
              <p className="card-text">Vas a poder tener acceso a una gran variedad de personas con una serie de habilidades, 
              en dónde podrás ver sus trabajos, puntuaciones y su perfil de trabajador. Con la finalidad de que puedas contactarte con ellos desde la comodidad de tu hogar.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card card-features h-100 p-3">
            <img src={united} className="card-img-top" alt="..." style={{width: '64px'}}/>
            <div className="card-body">
              <h5 className="card-title">Comunidad</h5>
              <p className="card-text">Es ideal generar una comunidad entre nosotros, en la que tanto la persona que necesita de un servicio, 
              y la que ofrece el servicio, creen un ambiente seguro y de confianza, de tal modo que ésta, pueda servir a distintas personas a elegir bien.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
