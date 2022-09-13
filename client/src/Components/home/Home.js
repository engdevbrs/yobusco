import React from 'react'
import '../css/Home.css';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import united from '../assets/united.png';
import tools from '../assets/tools.png';
import worker from '../assets/worker.png';
import working from '../assets/working.png';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <>
      <header className="bg-dark py-5">
          <Container className="px-5">
              <Row className="gx-5 align-items-center justify-content-center">
                  <Col className="col-lg-8 col-xl-7 col-xxl-6">
                      <div className="my-5 text-center text-xl-start">
                          <h1 className="display-5 fw-bolder text-white mb-2">Una nueva forma de encontar oportunidades</h1>
                          <p className="lead fw-normal text-white-50 mb-4">Registro rápido y sencillo, presenta a la comunidad tus servicios de manera gratuita!</p>
                          <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                              <Link to={'/crear-cuenta'} className="btn btn-primary btn-lg px-4 me-sm-3">Comenzar</Link>
                              <Link to={'/sobre-nosotros'} className="btn btn-outline-light btn-lg px-4">Aprender Más</Link>
                          </div>
                      </div>
                  </Col>
                  <Col className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                    <img className="img-fluid rounded-3 my-5" src={slide1} alt="..."/>
                  </Col>
              </Row>
          </Container>
      </header>
      <Container className="mt-3 mb-4" fluid>
        <Row lg={2} className='information row row-cols-1 row-cols-md-2 g-4'>
        <Col>
        <h2 className="our-fundation fw-bolder mt-2">YoBusco.cl</h2>
        <p class="fw-normal text-muted"><strong>E</strong>s una plataforma que tiene por objetivo crear una comunidad
              con personas que ofrezcan sus conocimientos técnicos sobre un oficio en particular, para que usuarios de cualquier parte de Chile puedan
              acceder a su perfil personal, la cuál tendrá una serie de información útil para el futuro cliente, esta será de ayuda
              para que las personas tengan una idea de con quién está tratando y a quién le está solicitando los servicios.
                    </p>
        </Col>
        <Col className="information-card">
          <img src={working} alt="..." style={{width: '22rem'}}/>
        </Col>
        </Row>
      </Container>
      <Container className="mt-3 mb-4" fluid>
        <Row className='row row-cols-1 row-cols-md-3 g-4'>
        <Col>
          <Card className="card-features h-100 p-3">
          <Card.Img variant="top" src={ tools } alt="..." style={{width: '64px'}}/>
            <Card.Body>
            <Card.Title>Variedad de servicios</Card.Title>
              <Card.Text className='fw-normal text-muted'>Nuestro objetivo es poseer una gran variedad de oficios, la cuál solvente su necesidad del momento.
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
              <Card.Text className='fw-normal text-muted'>Vas a poder tener acceso a una gran variedad de personas con una serie de habilidades, 
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
              <Card.Text className='fw-normal text-muted'>Es ideal generar una comunidad entre nosotros, en la que tanto la persona que necesita de un servicio, 
              y la que ofrece el servicio, creen un ambiente seguro y de confianza, de tal modo, que ésta pueda servir a distintos usuarios a elegir bien.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
