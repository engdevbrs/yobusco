import React, { useEffect, useState } from 'react'
import Axios  from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../css/Profile.css'
import { Button, Card, Container, ListGroup, Nav } from 'react-bootstrap'
import perfil from '../assets/perfil.png'
import web from '../assets/web.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import whatsapp from '../assets/whatsapp.png'
import accesDenied from '../assets/access-denied.png'
import loadingprofilegf from '../assets/loading-profile.gif'

const Profile = () => {

    const [ dataUser, setDataUser ] = useState([]);
    const [ response, setResponse ] = useState([]);
    const [ loading, setLoading] = useState(true);
    const [inputs , setInputs ] = useState(false);

    const getAccess = (token) =>{
        Axios.post("http://3.92.68.154:3001/api/user-info", {
            'authorization' : `${token}`
        })
          .then((result) => {
              if(result.status === 200){
                    setResponse(result.status)
                    setLoading(false)
                    setDataUser(result.data)
                    clearTimeout()
              }
          }).catch(error => {
                setResponse(error.response)
                setLoading(false)
                clearTimeout()
          });
    }

    const deniedAccess = () => {
        return(
        <div className="container mt-5 mb-5" hidden={loading}>
            <div className="denied" style={{height: '60vh'}}>
                <div className="wrapper mb-4">
                    <img src={accesDenied} alt="imagen de confirmación" style={{width: '10rem'}}/>
                </div>
                <div className="mt-1 congrats">
                    ACCESO DENEGADO
                </div>
                <div className="d-grid mt-2">
                    <a className="btn btn-danger btn-md" href="/login">Iniciar Sesión</a>
                </div>
            </div>
        </div>)
    }

    const allowAccess = () =>{
        return(
        <>
            <div hidden={loading}>
                <Col>
                    <Nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a href="/">Inicio</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Perfil de usuario</li>
                        </ol>
                    </Nav>
                </Col>
            </div>
            {
                dataUser.map((element) =>{
                    return(
                        <>
                            <Container className='profile-container shadow-lg mt-3 mb-5 p-4'>
                                <Row className='mt-3 mb-3'>
                                    <Col lg={4} >
                                        <Card className='perfil shadow mb-4'>
                                        <Card.Img className='mt-2' variant="top" src={perfil} style={{ width: '12rem' }}/>
                                        <Card.Body>
                                            <Card.Title><strong>{element.nameUser + " " + element.lastnamesUser}</strong></Card.Title>
                                            <Card.Text>
                                            <h6 style={{color: 'grey'}}>
                                            {element.workareaUser} <br/>
                                            </h6>
                                            </Card.Text>
                                            <Button variant="outline-primary" onClick={(e) => setInputs(!inputs)}>{inputs === true ? 'Actualizar Datos' : 'Editar Perfil'}</Button>
                                        </Card.Body>
                                        </Card>
                                        <Card className='contactos shadow mb-4 mb-lg-0'>
                                            <ListGroup className='social-media' variant="flush">
                                                <ListGroup.Item>{inputs === true ? <><img src={web} alt=''/><input type="text" placeholder="ingrese su sitio web" name="web-site" /></> : <><img src={web} alt=''/><a href="https://mdbootstrap.com" target="_blank" rel="noopener noreferrer">Sitio web</a></>}</ListGroup.Item>
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
                                                <p className="mb-0">Nombre completo</p>
                                                </Col>
                                                <Col sm={9}>
                                                <p className="text-muted mb-0">{element.nameUser + " " + element.lastnamesUser}</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row >
                                                <Col sm={3}>
                                                <p className="mb-0">Email</p>
                                                </Col>
                                                <Col sm={9}>
                                                <p className="text-muted mb-0">{element.email}</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row >
                                                <Col sm={3}>
                                                <p className="mb-0">Celular</p>
                                                </Col>
                                                <Col sm={9}>
                                                <p className="text-muted mb-0">{element.cellphone}</p>
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
                                            </Card.Body>
                                        </Card>
                                        <Row>
                                            <Col md={12}>
                                            <Card className="skills mb-4 mb-md-0 shadow">
                                                <Card.Body>
                                                <p className="mb-4"><span className="text-primary font-italic me-1">Calificaciones</span> Proyectos realizados</p>
                                                <p className="mb-1" style={{'font-size':'.77rem'}}>Responsabilidad</p>
                                                <div className="progress rounded" style={{height: '5px'}}>
                                                    <div className="progress-bar" role="progressbar" style={{width:'80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <p className="mt-4 mb-1" style={{'font-size':'.77rem'}}>Puntualidad</p>
                                                <div className="progress rounded" style={{height: '5px'}}>
                                                    <div className="progress-bar" role="progressbar" style={{width:'72%'}} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <p className="mt-4 mb-1" style={{'font-size':'.77rem'}}>Honestidad</p>
                                                <div className="progress rounded" style={{height: '5px'}}>
                                                    <div className="progress-bar" role="progressbar" style={{width:'89%'}} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <p className="mt-4 mb-1" style={{'font-size':'.77rem'}}>Cuidadoso</p>
                                                <div className="progress rounded" style={{height: '5px'}}>
                                                    <div className="progress-bar" role="progressbar" style={{width:'55%'}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <p className="mt-4 mb-1" style={{'font-size':'.77rem'}}>Precio justo</p>
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
                })
            }
        </>)
    }


    useEffect(() =>{
        setTimeout(() =>{
            const getToken = sessionStorage.getItem('accessToken');
            if(getToken === null){
                setLoading(false);
                setResponse(500);
            }else{
                getAccess(getToken);
            }
        },1720)
    },[])

    return (
      <>
        <div className="container mt-5 mb-5" hidden={!loading}>
            <div className="denied" style={{height: '60vh'}}>
                <div className="wrapper text-center">
                    <img src={loadingprofilegf} alt="imagen de confirmación" style={{width: '15rem'}}/>
                </div>
                    <div className="success-account mb-3">
                    Obteniendo datos...
                </div>
            </div>
        </div>
      {
        response !== 200 ? deniedAccess()
        : allowAccess()
      }
      </>
    )
}

export default Profile