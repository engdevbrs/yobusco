import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Nav, Offcanvas, Row } from 'react-bootstrap';
import Axios from 'axios'
import { FaUserPlus, FaFilter } from "react-icons/fa";
import '../css/Workers.css';

const Workers = () => {

  const [show, setShow] = useState(false);
  const [usuarios, setUsuarios ] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //3.92.68.154 AWS LOCAL
  useEffect(() => {
      Axios.get("http://3.92.68.154:3001/api/usuarios").then((res)=>{
        setUsuarios(res.data);
      });        
  },[]);

  return (
    <>
      <section className='section-workers'>
      <div>
          <Col>
              <Nav aria-label="breadcrumb" className="bg-light rounded-3 p-3">
                  <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item"><a href="/">Inicio</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Trabajadores</li>
                  </ol>
              </Nav>
          </Col>
      </div>
      <Container className='mt-4' fluid>
        <Row lg={1} md={1} sm={1} xs={1} className='worker-view'>                
          <Col className='d-flex justify-content-end'>
          <p onClick={handleShow} className="me-2" style={{color:'#202a34'}}>
            <FaFilter cursor={'pointer'} size={26} />
          </p>
          <Offcanvas show={show} onHide={handleClose} placement="end" name="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <Form>
                <h5>Buscar por zona</h5>
                <Form.Select className="mb-3" aria-label="Default select example">
                  <option>Región</option>
                  <option value="1">Bio-Bio</option>
                  <option value="2">Metropolitana</option>
                  <option value="3">Ñuble</option>
                </Form.Select>
                <Form.Select className="mb-3" aria-label="Default select example">
                  <option>Ciudad</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </Form.Select>
                <Form.Select className="mb-3" aria-label="Default select example">
                  <option>Comuna</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </Form.Select>
                <h5>Buscar por Especialidad</h5>
                <Form.Select className="mb-3" aria-label="Default select example">
                  <option>Área</option>
                  <option value="1">Electricidad</option>
                  <option value="2">Construcción</option>
                  <option value="3">Mecánica</option>
                </Form.Select>
            </Form>
            </Offcanvas.Body>
          </Offcanvas>
          </Col>
          <Col>
            <Row lg={2} md={2} sm={1} xs={1}>
              {usuarios.map((element, idx) => (
                  <Col className='workers mt-3 mb-3'>
                    <Card className='worker-card shadow-lg' >
                      <Card.Body className="text-black">
                        <div>
                          <h6 className="mb-4">{element.workareaUser}</h6>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <p className="small mb-0"><i className="far fa-clock me-2"></i>{element.experienceYears === 1 ? element.experienceYears + ' año' : element.experienceYears + ' años'}</p>
                            <Col className="col-2">
                              <Row className='m-1'>
                                <span style={{color:'#202a34'}}>
                                  <FaUserPlus cursor={'pointer'} size={26} onClick={() => console.log("hola")}/>
                                </span>
                              </Row>
                            </Col>
                          </div>
                        </div>
                        <Row lg={2} md={1} sm={1} xs={1} className='info-worker'>
                          <Col className='action-card col-lg-4 col-md-12'>
                              <Col className="mb-2">
                                <p className="mb-2 text-center">{element.nameUser}</p>
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp"
                                alt="Generic placeholder" className="img-fluid rounded-circle border border-light border-3"
                                style={{width: '100px'}}/>
                              </Col>
                              <Col className="mt-1 mb-2">
                                <Button type="button" variant="primary" size='sm'>Ver perfil</Button>
                              </Col>
                          </Col>
                          <Col className='card-info col-lg-8 col-md-12'>
                              <Col>
                                <p>{element.workResume}</p>
                              </Col>
                          </Col>
                        </Row>
                        <hr/>
                        <Row className='mt-4 mb-4'>
                          <Col>
                            <p className="card-buttons mb-0">52 comentarios</p> 
                          </Col>
                          <Col>
                            <p className="card-buttons mb-0">Puntuación: 4.6/10</p>
                          </Col>
                        </Row>         
                        <Row className='card-buttons'>
                          <Row className='card-buttons'>
                            <Col className="col-12">
                              <Row className='m-1'>
                                <Button type="button" variant='success'>Enviar mensaje</Button>
                              </Row>
                            </Col>
                          </Row>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      </section>
    </>
  );
}

export default Workers;