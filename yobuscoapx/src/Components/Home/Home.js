import React from 'react'
import '../css/Home.css';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import united from '../assets/united.png';
import tools from '../assets/tools.png';
import worker from '../assets/worker.png';
import working from '../assets/working.png';
import { Carousel,Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import { useState } from 'react';

const Home = () => {

  return (
    <>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      <Container className="row row-cols-1 row-cols-md-3 g-4 mt-2 mb-4" fluid>
        <Col>
          <Card className="card-features h-100 p-3">
          <Card.Img variant="top" src={ tools } alt="..." style={{width: '64px'}}/>
            <Card.Body>
            <Card.Title>Variedad de servicios</Card.Title>
              <Card.Text>Nuestro objetivo es poseer una gran variedad de oficios, la cuál solvente tu necesidad del momento.
              </Card.Text>
            </Card.Body>
            <Card.Body >
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="card-features h-100 p-3">
            <Card.Img variant="top" src={ worker } alt="..." style={{width: '64px'}}/>
            <Card.Body>
            <Card.Title>Fácil acceso</Card.Title>
              <Card.Text>Vas a poder tener acceso a una gran variedad de personas con una serie de habilidades, 
              en dónde podrás ver sus trabajos, puntuaciones y su perfil de trabajador. Con la finalidad de que puedas contactarte con ellos desde la comodidad de tu hogar.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="card-features h-100 p-3">
            <Card.Img variant="top" src={ united } alt="..." style={{width: '64px'}}/>
            <Card.Body>
              <Card.Title>Comunidad</Card.Title>
              <Card.Text>Es ideal generar una comunidad entre nosotros, en la que tanto la persona que necesita de un servicio, 
              y la que ofrece el servicio, creen un ambiente seguro y de confianza, de tal modo que ésta, pueda servir a distintas personas a elegir bien.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Container>
      <Container className="information row row-cols-1 row-cols-md-2 g-4 mt-2 mb-4" fluid>
        <Col>
          <Card>
            <Card.Body>
              <strong>Yo Busco</strong> es una plataforma que tiene por objetivo crear una comunidad
              con personas que ofrezcan su oficio o profesión, para que personas de cualquier parte de Chile puedan
              acceder a su perfil personal, la cuál tendrá una serie de información ( Como su puntuación ), esta será de ayuda
              para que las personas tengan una idea de con quién está tratando y a quién está solicitando los servicios.
            </Card.Body>
          </Card>
        </Col>
        <Col className="information-card">
          <img src={working} alt="..." style={{width: '20rem'}}/>
        </Col>
      </Container>
    </>
  );
}

export default Home;
