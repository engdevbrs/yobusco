import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import '../css/Projects.css'
import perfil from '../assets/perfil.png'

const Projects = () => {
  return (
    <>
    <Container className='projects-container' fluid>
    <Row xs={1} md={1} lg={1} xl={2} className="p-2" style={{backgroundColor: '#F8F9FA'}}>
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col>
          <Card className='mt-2'>
            <div className="d-flex align-items-center justify-content-center mt-2">
                <Card.Img variant="top" src={perfil} alt={'project'} style={{width: '15rem'}}/>
            </div>
            <Card.Body>
              <Card.Title>Cambio de cañeria</Card.Title>
              <Card.Text>
                Este fue un proyecto realizado para la senora Maria, le cambiamos la cañeria del lavamanos.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Row >
                <Col className='col-4 text-start'><small className="text-muted">Hace 1 año</small></Col>
                <Col className='col-8 text-end'><small className="text-muted">Realizado a Laura Elgueta Rivera</small></Col>
            </Row>
            </Card.Footer>
          </Card>
        </Col>
      ))}
      </Row>
    </Container>
    </>
  )
}

export default Projects