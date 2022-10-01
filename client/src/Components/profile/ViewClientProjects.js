import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Axios  from 'axios'
import '../css/Projects.css'
import emptyprojects from '../assets/emptyprojects.png'
import workersprojects from '../assets/workers-projects.gif'

const ViewClientProjects = ({id}) => {
  const [ projectsData, setProjectsData ] = useState([])
  const [ response, setResponse ] = useState([])
  const [ loading, setLoading ] = useState(true)

  const getProjects = () => {
    Axios.get("http://3.89.109.142:3001/api/image/view-projects/" + id)
      .then((result) => {
          if(result.status === 200){
            setResponse(result.status)
            setProjectsData(result.data)
            setLoading(false)
          }
      }).catch(error => {
          setLoading(false)
          setResponse(error.response.status)
          setProjectsData(error.response.status)
      });
  }

  useEffect(() =>{
    setTimeout(() => {
      getProjects()
    }, 500);
  },[])

  return (
    <>
    <Container className='projects-container' fluid>
    <div id='denied' className="container mt-5 mb-5" hidden={!loading}>
            <div className="denied">
                <div className="wrapper text-center">
                    <img src={workersprojects} alt="imagen de confirmación" style={{width: '15rem'}}/>
                </div>
                    <div className="success-account mb-3">
                    Obteniendo proyectos...
                </div>
            </div>
        </div>
    {
      projectsData.length > 0 ? 
      <>
      <Row xs={1} md={2} lg={2} xl={3} className="projects-card p-2" style={{backgroundColor: '#F8F9FA'}} hidden={loading}>
      {
      projectsData.length > 0 ? projectsData.map(value =>{
            let dateFormatted = null
            if(value.workDate){
                dateFormatted = new Date(value.workDate)
            }
            return(
                <>
                <Col>
                  <Card className='mt-3 mb-3'>
                    <div className="d-flex align-items-center justify-content-center">
                        <Card.Img variant="top" src={'http://3.89.109.142:3001/' + value.imageName} 
                        alt={'project'} style={{height: '200px'}}/>
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
        </Row></>
        : 
        <>
        <Row className="emptyprojects" style={{backgroundColor: '#F8F9FA'}} hidden={loading}>
        <Card className='shadow d-flex align-items-center justify-content-center text-center'>
            <h5><strong>Éste usuario no tiene trabajos para mostrar</strong></h5>
            <div>
            <img className='mt-4' variant="top" src={emptyprojects} 
                alt={'project'} style={{height: '250px', width: 'auto'}}/>
            </div> 
        </Card>
      </Row>
      </>
    }
    </Container>
    </>
  )
}

export default ViewClientProjects