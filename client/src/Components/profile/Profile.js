import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Profile.css';
import { Button, Card, Container, ListGroup, Nav } from 'react-bootstrap';
import perfil from '../assets/perfil.png';
import web from '../assets/web.png';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import whatsapp from '../assets/whatsapp.png';

const Profile = () => {
    return (
      <>
        <div>
            <div>
                <Col>
                    <Nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a href="/">Inicio</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Perfil de usuario</li>
                        </ol>
                    </Nav>
                </Col>
            </div>
        </div>
        <Container className='profile-container shadow-lg mt-3 mb-5 p-4'>
            <Row className='mt-3 mb-3'>
                <Col lg={4} >
                    <Card className='perfil shadow mb-4'>
                    <Card.Img className='mt-2' variant="top" src={perfil} style={{ width: '12rem' }}/>
                    <Card.Body>
                        <Card.Title><strong>Boris Rioseco</strong></Card.Title>
                        <Card.Text>
                        <h6 style={{color: 'grey'}}>
                        Full stack developer <br/>
                        Chiguayante, San Martín 25
                        </h6>
                        </Card.Text>
                        <Button variant="outline-primary">Editar Perfil</Button>
                    </Card.Body>
                    </Card>
                    <Card className='contactos shadow mb-4 mb-lg-0'>
                        <ListGroup className='social-media' variant="flush">
                            <ListGroup.Item><img src={web} alt=''/><a href="https://mdbootstrap.com" target="_blank" rel="noopener noreferrer">Sitio web</a></ListGroup.Item>
                            <ListGroup.Item><img src={instagram} alt=''/><a href="https://mdbootstrap.com" target="_blank" rel="noopener noreferrer">Instagram</a></ListGroup.Item>
                            <ListGroup.Item><img src={facebook} alt=''/><a href="https://mdbootstrap.com" target="_blank" rel="noopener noreferrer">Facebook</a></ListGroup.Item>
                            <ListGroup.Item><img src={twitter} alt=''/><a href="https://mdbootstrap.com" target="_blank" rel="noopener noreferrer">Twitter</a></ListGroup.Item>
                            <ListGroup.Item><img src={whatsapp} alt=''/><p>+569 93158746</p></ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col lg={8} className=''>
                    <Card className='info mb-4 shadow'>
                        <Card.Body>
                        <Row >
                            <Col sm={3}>
                            <p class="mb-0">Nombre completo</p>
                            </Col>
                            <Col sm={9}>
                            <p class="text-muted mb-0">Boris Rioseco</p>
                            </Col>
                        </Row>
                        <hr/>
                        <Row >
                            <Col sm={3}>
                            <p class="mb-0">Email</p>
                            </Col>
                            <Col sm={9}>
                            <p class="text-muted mb-0">ejemplo@correo.com</p>
                            </Col>
                        </Row>
                        <hr/>
                        <Row >
                            <Col sm={3}>
                            <p class="mb-0">Teléfono</p>
                            </Col>
                            <Col sm={9}>
                            <p class="text-muted mb-0">(41) 25678348</p>
                            </Col>
                        </Row>
                        <hr/>
                        <Row >
                            <Col sm={3}>
                            <p class="mb-0">Celular</p>
                            </Col>
                            <Col sm={9}>
                            <p class="text-muted mb-0">(+569) 78593479</p>
                            </Col>
                        </Row>
                        <hr/>
                        <Row >
                            <Col sm={3}>
                            <p class="mb-0">Lugar de residencia</p>
                            </Col>
                            <Col sm={9}>
                            <p class="text-muted mb-0">Bío-Bío, Concepción, Chiguayante</p>
                            </Col>
                        </Row>
                        </Card.Body>
                    </Card>
                    <Row>
                        <Col md={6}>
                        <Card className="skills mb-4 mb-md-0 shadow">
                            <Card.Body>
                            <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</p>
                            <p className="mb-1" style={{'font-size':'.77rem'}}>Web Design</p>
                            <div className="progress rounded" style={{height: '5px'}}>
                                <div className="progress-bar" role="progressbar" style={{width:'80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="mt-4 mb-1" style={{'font-size':'.77rem'}}>Website Markup</p>
                            <div className="progress rounded" style={{height: '5px'}}>
                                <div className="progress-bar" role="progressbar" style={{width:'72%'}} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="mt-4 mb-1" style={{'font-size':'.77rem'}}>One Page</p>
                            <div className="progress rounded" style={{height: '5px'}}>
                                <div className="progress-bar" role="progressbar" style={{width:'89%'}} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="mt-4 mb-1" style={{'font-size':'.77rem'}}>Mobile Template</p>
                            <div className="progress rounded" style={{height: '5px'}}>
                                <div className="progress-bar" role="progressbar" style={{width:'55%'}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="mt-4 mb-1" style={{'font-size':'.77rem'}}>Backend API</p>
                            <div className="progress rounded mb-2" style={{height: '5px'}}>
                                <div className="progress-bar" role="progressbar" style={{width:'66%'}} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col md={6}>
                        <Card className="skills mb-4 mb-md-0 shadow">
                            <Card.Body>
                            <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</p>
                            <p className="mb-1" style={{'font-size':'.77rem'}}>Web Design</p>
                            <div className="progress rounded" style={{height: '5px'}}>
                                <div className="progress-bar" role="progressbar" style={{width:'80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="mt-4 mb-1" style={{'font-size':'.77rem'}}>Website Markup</p>
                            <div className="progress rounded" style={{height: '5px'}}>
                                <div className="progress-bar" role="progressbar" style={{width:'72%'}} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="mt-4 mb-1" style={{'font-size':'.77rem'}}>One Page</p>
                            <div className="progress rounded" style={{height: '5px'}}>
                                <div className="progress-bar" role="progressbar" style={{width:'89%'}} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="mt-4 mb-1" style={{'font-size':'.77rem'}}>Mobile Template</p>
                            <div className="progress rounded" style={{height: '5px'}}>
                                <div className="progress-bar" role="progressbar" style={{width:'55%'}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="mt-4 mb-1" style={{'font-size':'.77rem'}}>Backend API</p>
                            <div className="progress rounded mb-2" style={{height: '5px'}}>
                                <div className="progress-bar" role="progressbar" style={{width:'66%'}} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
      </>
    )
}

export default Profile