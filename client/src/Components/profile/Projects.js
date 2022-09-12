import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Axios  from 'axios'
import '../css/Projects.css'
import perfil from '../assets/perfil.png'

const Projects = () => {
  const [ projectsData, setProjectsData ] = useState([])

  const getProjects = () => {
    const token = localStorage.getItem('accessToken');
    Axios.get("http://52.91.196.215:3001/api/image/user-projects",{
        headers: {
            'authorization': `${token}`
            }
    })
      .then((result) => {
          if(result.status === 200){
            setProjectsData(result.data)
          }
      }).catch(error => {
            setProjectsData(error.response.status)
      });
  }

  useEffect(() =>{
    getProjects()
  },[])

  return (
    <>
    <Container className='projects-container' fluid>
    <Row xs={1} md={1} lg={1} xl={2} className="p-2" style={{backgroundColor: '#F8F9FA'}}>
    {
    projectsData.length > 0 ? projectsData.map(value =>{
          let dateFormatted = null
          if(value.workDate){
              dateFormatted = new Date(value.workDate)
          }
          return(
              <>
              <Col>
                <Card className='mt-2'>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                      <Card.Img variant="top" src={'http://52.91.196.215:3001/' + value.imageName} 
                      alt={'project'} style={{height: '200px', width: 'auto'}}/>
                  </div>
                  <Card.Body>
                      <Card.Title>Descripción del trabajo</Card.Title>
                      <Card.Text>{value.workResume}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                  <Row>
                      <Col className='col-8 text-start'><small className="text-muted">Realizado a {value.clientName}</small></Col>
                      <Col className='col-4 text-end'><small className="text-muted">{"El dia " + dateFormatted.toLocaleDateString()}</small></Col>
                  </Row>
                  </Card.Footer>
                </Card>
              </Col>
              </>
          )
        }) : <></>
    }
      </Row>
    </Container>
    </>
  )
}

export default Projects