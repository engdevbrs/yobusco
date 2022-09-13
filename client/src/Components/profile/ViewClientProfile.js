import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Axios  from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../css/Profile.css'
import { Alert, Card, Container, Nav, Tab, Tabs } from 'react-bootstrap'
import Comments from './Comments'
import ViewClientProjects from './ViewClientProjects'

const ViewClientProfile = () => {

    const { id } = useParams();
    const navigate = useNavigate()
    const [ dataUser, setDataUser ] = useState([])
    const [ response, setResponse ] = useState([])
    const [show, setShow] = useState(true);
    
    useEffect(() =>{
        Axios.get("http://52.91.196.215:3001/api/view/profile/" + id)
          .then((result) => {
              if(result.status === 200){
                    setDataUser(result.data)
              }
          }).catch(error => {
                setResponse(error.response.status)
          });
    },[])

    return(
        <>
            <Col>
                <Nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><Link to={'/'} >Inicio</Link></li>
                        <li className="breadcrumb-item"><Link to={'/trabajadores'} >Trabajadores</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Perfil de usuario</li>
                    </ol>
                </Nav>
            </Col>
            {
                dataUser.map((element,key) =>{
                    let dateFormatted = null
                    const todayDate = new Date()
                    if(element.bornDate){
                        dateFormatted = new Date(element.bornDate)
                    }
                    todayDate.setFullYear( todayDate.getFullYear() - dateFormatted.getFullYear())
                    return(
                        <>
                            <Container className='profile-container shadow-lg rounded-4 mt-3 mb-5 p-4'>
                            {
                                show === true ? <Row className='mt-3 mb-3'><Alert onClose={() => setShow(false)} style={{backgroundColor: '#202A34', color: 'white'}} closeVariant='white' dismissible>
                                <Alert.Heading style={{color: '#aebbdc'}}>Para su seguridad, le sugerimos lo siguiente:</Alert.Heading>
                                <p style={{color: '#dfe3ec'}}>
                                Cada vez que visites el perfil de un trabajador, procura buscar su información
                                y validar sus datos, tales cómo:<strong> Nombre, Rut y Comuna</strong>. <br/>Para hacer ésto, te recomendamos visitar el siguiente
                                sitio web <Alert.Link href="https://www.nombrerutyfirma.com/" style={{color: '#fe6b68'}} target='_blank' >Rutificador</Alert.Link>.
                                </p>
                                </Alert></Row> : <></>
                            }
                            <Row className='mt-3 mb-3'>
                                <Col lg={12} className='shadow-lg rounded-1 p-2'>
                                    <h5>Información Personal</h5>
                                    <Row md={1} lg={1} className='rounded-4 mt-3 mb-3'>
                                    <Col lg={6}>
                                        <Row>
                                        <Col sm={3}>
                                        <p className="mb-0">Nombre completo</p>
                                        </Col>
                                        <Col sm={9}>
                                        <p className="text-muted mb-0">{element.nameUser + " " + element.lastnamesUser}</p>
                                        </Col>
                                        </Row>
                                        <hr/>
                                        <Row >
                                            <Col sm={3}>
                                            <p className="mb-0">Rut</p>
                                            </Col>
                                            <Col sm={9}><p className="text-muted mb-0">{element.rutUser}</p>
                                            </Col>
                                        </Row>
                                        <hr/>
                                        <Row >
                                            <Col sm={3}>
                                            <p className="mb-0">Celular</p>
                                            </Col>
                                            <Col sm={9}><p className="text-muted mb-0"><strong>9 </strong>{element.cellphone}</p>
                                            </Col>
                                        </Row>
                                        <hr/>
                                        <Row >
                                            <Col sm={3}>
                                            <p className="mb-0">Email</p>
                                            </Col>
                                            <Col sm={9}><p className="text-muted mb-0">{element.email}</p>
                                            </Col>
                                        </Row>
                                        <hr/>
                                    </Col>
                                    <Col lg={6}>
                                    <Row>
                                        <Col sm={3}>
                                        <p className="mb-0">Día de Nacimiento</p>
                                        </Col>
                                        <Col sm={9}>
                                        <p className="text-muted mb-0">{dateFormatted.toLocaleDateString()}</p>
                                        </Col>
                                        </Row>
                                        <hr/>
                                        <Row >
                                            <Col sm={3}>
                                            <p className="mb-0">Años</p>
                                            </Col>
                                            <Col sm={9}><p className="text-muted mb-0">{todayDate.getFullYear()}</p>
                                            </Col>
                                        </Row>
                                        <hr/>
                                        <Row >
                                            <Col sm={3}>
                                            <p className="mb-0">Lugar de residencia</p>
                                            </Col>
                                            <Col sm={9}>
                                            <p className="text-muted mb-0">{element.regionUser + ", " + element.cityUser + ", " + element.communeUser}</p>
                                            </Col>
                                        </Row>
                                        <hr/>
                                        <Row >
                                            <Col sm={3}>
                                            <p className="mb-0">Especialidad</p>
                                            </Col>
                                            <Col sm={9}><p className="text-muted mb-0">{element.workareaUser}</p>
                                            </Col>
                                        </Row>
                                        <hr/>
                                    </Col>
                                    </Row>
                                    <h5>Clasificación Laboral</h5>
                                    <Tabs defaultActiveKey="home" id="justify-tab-example">
                                        <Tab eventKey="home" title="Rating">
                                            <Card>
                                                <Card.Body>
                                                <p className="mb-1" >Responsabilidad</p>
                                                <div className="progress rounded" style={{height: '5px'}}>
                                                    <div className="progress-bar" role="progressbar" style={{width:'80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <p className="mt-4 mb-1" >Puntualidad</p>
                                                <div className="progress rounded" style={{height: '5px'}}>
                                                    <div className="progress-bar" role="progressbar" style={{width:'72%'}} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <p className="mt-4 mb-1" >Honestidad</p>
                                                <div className="progress rounded" style={{height: '5px'}}>
                                                    <div className="progress-bar" role="progressbar" style={{width:'89%'}} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <p className="mt-4 mb-1" >Cuidadoso</p>
                                                <div className="progress rounded" style={{height: '5px'}}>
                                                    <div className="progress-bar" role="progressbar" style={{width:'55%'}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <p className="mt-4 mb-1" >Precio justo</p>
                                                <div className="progress rounded mb-2" style={{height: '5px'}}>
                                                    <div className="progress-bar" role="progressbar" style={{width:'66%'}} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                </Card.Body>
                                            </Card>
                                        </Tab> 
                                        <Tab eventKey="proyects" title="Proyectos">
                                        <Col className='projects m-0'>
                                            <ViewClientProjects id={id}/>
                                        </Col>
                                        </Tab>
                                        <Tab eventKey="comments" title="Comentarios">
                                        <Col className='projects m-0'>
                                            <Comments />
                                        </Col>
                                        </Tab> 
                                    </Tabs>
                                </Col>
                            </Row>
                            </Container>
                        </>
                    )
                })
            }
        </>
        )
}

export default ViewClientProfile