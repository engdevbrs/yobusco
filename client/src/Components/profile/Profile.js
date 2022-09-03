import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Axios  from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../css/Profile.css'
import { Button, Card, Container, Form, ListGroup, Nav } from 'react-bootstrap'
import web from '../assets/web.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import whatsapp from '../assets/whatsapp.png'
import accesDenied from '../assets/access-denied.png'
import loadingprofilegf from '../assets/loading-profile.gif'
import perfil from '../assets/perfil.png'
import uploadPhoto from '../assets/upload-photo.png'

const Profile = () => {

    const MySwal = withReactContent(Swal)
    const navigate = useNavigate()

    const [ dataUser, setDataUser ] = useState([])
    const [ response, setResponse ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ inputs , setInputs ] = useState(false)
    const [ validationEmail, setValidationEmail ] = useState(false)
    const [ validationCell, setValidationCell ] = useState(false)
    const [ cancelButton, setCancelButton ] = useState(false)
    const [ colorCard, setColorCard ] = useState("#ffffff")
    const [ savePhoto, setSavePhoto ] = useState(false)
    
    const handleChangePhoto = () =>{
        const token = localStorage.getItem('accessToken');
        let imagefile = document.getElementById('formFile');
        const formData = new FormData();
        formData.append('formFile',imagefile.files[0])
        MySwal.fire({
            title: 'Estás seguro de actualizar tus datos?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Actualizar`,
            denyButtonText: `Cancelar`,
          }).then(() => {
            Axios.put("http://3.92.68.154:3001/api/upload-photo",formData,{'authorization' : `${token}`},'')
            .then((result) => {
                if(result.status === 200){
                    localStorage.removeItem("accessToken");
                    Swal.fire('Actualización exitosa!', '', 'success')
                    setTimeout(() => {
                        return navigate('/login');
                    }, 1000);
                }
            }).catch(error => {
                Swal.fire('Los cambios no fueron guardados', '', 'info')
            });
          })
    }

    const handleButton = (e) =>{
        setCancelButton(true);
        if(e.textContent === "Actualizar Datos"){
            const token = localStorage.getItem('accessToken');
            let inputValues = document.querySelectorAll('input');
            let inputsArray =Array.from(inputValues);
            let newArrayValues = []
            inputsArray.forEach(elements => { 
                if(elements.name !== 'formFile'){
                    newArrayValues.push({name: elements.name, value: elements.value});
                }
            });
            MySwal.fire({
                title: 'Estás seguro de actualizar tus datos?',
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: `Actualizar`,
                denyButtonText: `Cancelar`,
              }).then(() => {
                Axios.put("http://3.92.68.154:3001/api/update-user", {newArrayValues,'authorization' : `${token}`})
                .then((result) => {
                    if(result.status === 200){
                        localStorage.removeItem("accessToken");
                        Swal.fire('Actualización exitosa!', '', 'success')
                        setTimeout(() => {
                            return navigate('/login');
                        }, 1000);
                    }
                }).catch(error => {
                    Swal.fire('Los cambios no fueron guardados', '', 'info')
                });
              })
        }else if(e.textContent === "Cancelar"){
            setCancelButton(false)
        }
    }

    const onchangeEmail = (e) =>{
        const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (!pattern.test(e.value)) {
            setValidationEmail(true);
        }else{
            setValidationEmail(false)
        }
    }

    const onchangeCell = (e) =>{
        if (e.value.length === 8) {
            setValidationCell(false);
        }else{
            setValidationCell(true);
        }
    }

    const open_file = () =>{
        setCancelButton(true);
        setSavePhoto(true)
        document.getElementById("formFile").click();
    }

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
                setResponse(error.response.status)
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
                    {
                        response === 403 ? 'SU SESIÓN HA EXPIRADO' : 'ACCESO DENEGADO'
                }
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
                    let imagenUser = null;
                    const prefix =  `data:image/png;base64,`
                    if(element.userPhoto !== undefined){
                        imagenUser = new Buffer.from(element.userPhoto.data).toString('base64')
                    }
                    return(
                        <>
                            <Container className='profile-container shadow-lg mt-3 mb-5 p-4' style={element.userColor !== undefined ? { 'backgroundColor': element.userColor} : {'backgroundColor': '#ffffff'}}>
                                <Row className='mt-3 mb-3'>
                                    <Col lg={4} >
                                        <Card className='perfil shadow mb-4 text-center'>
                                        <input class="form-control" type="file" id="formFile" name='formFile' accept="image/jpeg, image/png, image/jpg" hidden/>
                                        <img id='upload' className='upload mt-2' src={uploadPhoto} style={{ width: '5rem' }} alt="" onClick={open_file}/>
                                        <Card.Img className='mt-2' variant="top" src={element.userPhoto !== undefined ? perfil/*`${prefix}${imagenUser}`*/ : perfil} style={{ width: '12rem'}}/>
                                        <Card.Body>
                                            <Card.Title><strong>{element.nameUser + " " + element.lastnamesUser}</strong></Card.Title>
                                            <Card.Text>
                                            <h6 style={{color: 'grey'}}>
                                            {element.workareaUser} <br/>
                                            </h6>
                                            </Card.Text>
                                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                                {
                                                    savePhoto !== true ? <><Button variant={inputs === true ? 'outline-success' : 'outline-primary'} onClick={(e) => {handleButton(e.target); setInputs(true)}} 
                                                    disabled={(validationEmail || validationCell) !== true ? false : true}>
                                                        { inputs === true ? 'Actualizar Datos' : 'Editar Perfil' }
                                                    </Button>
                                                    {
                                                        cancelButton === true ? <Button variant="outline-danger" onClick={(e) => {handleButton(e.target); setInputs(false)}} >Cancelar</Button> : <></>
                                                    }</> : <><Button variant={inputs === true ? 'outline-success' : 'outline-primary'} onClick={() => {handleChangePhoto(); setSavePhoto(false)}} 
                                                    disabled={(validationEmail || validationCell) !== true ? false : true}>
                                                        { savePhoto === true ? 'Guardar Foto' : 'Editar Perfil' }
                                                    </Button>
                                                    {
                                                        cancelButton === true ? <Button variant="outline-danger" onClick={(e) => {handleButton(e.target); setInputs(false)}} >Cancelar</Button> : <></>
                                                    }</>
                                                }
                                            </div>
                                        </Card.Body>
                                        </Card>
                                        <Card className='contactos shadow mb-4 mb-lg-0'>
                                            <ListGroup className='social-media' variant="flush">
                                                <ListGroup.Item>{
                                                inputs === true ? <><div><img src={web} alt=''/></div><div className='form-floating col-10'>
                                                    <input type="text" className='form-control' id='floatingWebsite' defaultValue={element.webSite !== undefined ? element.webSite : ''} name='website' placeholder='floatingWebsite' />
                                                    <label htmlFor='floatingWebsite'>Ingrese su sitio web</label>
                                                </div></> : 
                                                <><img src={web} alt=''/><a href={element.webSite !== undefined ? element.webSite : '#'} target="_blank" rel="noopener noreferrer">{element.webSite !== undefined ? element.webSite : 'Sitio Web'}</a>
                                                </>
                                                }</ListGroup.Item>
                                                <ListGroup.Item>{
                                                inputs === true ? <><img src={instagram} alt=''/><div className='form-floating col-10'>
                                                    <input type="text" className='form-control' id='floatingInstagram' name='instagram' defaultValue={element.instagramSite !== undefined ? element.instagramSite : '#'} placeholder='floatingInstagram'/>
                                                    <label htmlFor='floatingInstagram'>Perfil de instagram</label>
                                                </div></> : 
                                                <><img src={instagram} alt=''/><a href={element.instagramSite !== undefined ? element.instagramSite : '#'} target="_blank" rel="noopener noreferrer">Instagram</a>
                                                </>}</ListGroup.Item>
                                                <ListGroup.Item>{
                                                inputs === true ? <><img src={facebook} alt=''/><div className='form-floating col-10'>
                                                    <input type="text" className='form-control' id='floatingFacebook' defaultValue={element.facebookSite !== undefined ? element.facebookSite : '#'} name='facebook' placeholder='floatingFacebook'/>
                                                    <label htmlFor='floatingFacebook'>Perfil de facebook</label>
                                                </div></> : 
                                                <><img src={facebook} alt=''/><a href={element.facebookSite !== undefined ? element.facebookSite : '#'} target="_blank" rel="noopener noreferrer">Facebook</a>
                                                </>}</ListGroup.Item>
                                                <ListGroup.Item>{
                                                inputs === true ? <><img src={twitter} alt=''/><div className='form-floating col-10'>
                                                    <input type="text" className='form-control' id='floatingTwitter' defaultValue={element.twitterSite !== undefined ? element.twitterSite : '#'} name='twitter' placeholder='floatingTwitter'/>
                                                    <label htmlFor='floatingTwitter'>Perfil de twitter</label>
                                                </div></> : 
                                                <><img src={twitter} alt=''/><a href={element.twitterSite !== undefined ? element.twitterSite : '#'} target="_blank" rel="noopener noreferrer">Twitter</a>
                                                </>}</ListGroup.Item>
                                                <ListGroup.Item>{
                                                inputs === true ? <><img src={whatsapp} alt=''/><div className='form-floating col-10'>
                                                    <input type="text" className='form-control' id='floatingWhatsapp' defaultValue={element.whatsappSite !== undefined ? element.whatsappSite : ''} placeholder='floatingWhatsapp'/>
                                                    <label htmlFor='floatingWhatsapp'>WhatsApp Web</label>
                                                    </div></> : 
                                                    <><img src={whatsapp} alt=''/><a href={element.whatsappSite !== undefined ? element.whatsappSite : '#'} target="_blank" rel="noopener noreferrer">WhatsApp Web</a></>}</ListGroup.Item>
                                            </ListGroup>
                                        </Card>
                                    </Col>
                                    <Col lg={8} className=''>
                                        <Card className='info mb-4 shadow'>
                                            <Card.Body>
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
                                                <p className="mb-0">Email</p>
                                                </Col>
                                                <Col sm={9}>
                                                {inputs === true ? <div className='form-floating col-12'>
                                                    <input type='text' className='form-control' defaultValue={element.email} onChange={(e) => onchangeEmail(e.target)} 
                                                    id='floatingCell' name='email' placeholder='floatingEmail' required/>
                                                    <label htmlFor='email'>Actualizar Correo</label>
                                                    {
                                                        validationEmail !== true ? '' : 
                                                        <Form.Text style={{color: 'red'}}>Ingrese un email válido</Form.Text>
                                                    }
                                                </div> : <p className="text-muted mb-0">{element.email}</p>}
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row >
                                                <Col sm={3}>
                                                <p className="mb-0">Número de contacto</p>
                                                </Col>
                                                <Col sm={9}>
                                                {inputs === true ? <div className='form-floating col-12'>
                                                    <input type='number' className='form-control' onChange={(e) => onchangeCell(e.target)} id='floatingCell' name='cell' 
                                                    defaultValue={element.cellphone !== undefined ? element.cellphone : ''} maxLength={9} placeholder='floatingCell' required/>
                                                    <label htmlFor='cell'>Nuevo celular</label>
                                                    {
                                                        validationCell !== true ? '' : 
                                                        <Form.Text style={{color: 'red'}}>Ingrese sólo 8 números</Form.Text>
                                                    }
                                                </div> : <p className="text-muted mb-0">{element.cellphone}</p>}
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
                                            {/* {
                                               inputs === true ? <><hr/>
                                               <Row class="mb-3">
                                                    <Col sm={3}>
                                                        <label for="formFile" class="form-label">Suba una foto a su perfil</label>
                                                    </Col>
                                                    <Col sm={9}>
                                                        <input class="form-control" type="file" id="formFile" name='formFile' accept="image/jpeg, image/png, image/jpg"/>
                                                    </Col>
                                               </Row></> : <></>
                                            } */}
                                            {
                                               inputs === true ? <><hr/>
                                               <Row class="mb-3">
                                                    <Col sm={3}>
                                                        <label for="colorInput" class="form-label">Elija el color de su tarjeta</label>
                                                    </Col>
                                                    <Col sm={9}>
                                                        <Form.Text><p style={{color: '#349568'}}>Procure usar tonos claros</p></Form.Text>
                                                        <input type="color" class="form-control form-control-color" id="colorInput" name='colorInput' onChange={(e) => setColorCard(e.target.value)} defaultValue={element.userColor !== undefined ? element.userColor : colorCard} title="Elija su color favorito"/>
                                                    </Col>
                                               </Row></> : <></>
                                            }
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
        document.getElementById('denied').scrollIntoView();
        setTimeout(() =>{
            const getToken = localStorage.getItem('accessToken');
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
        <div id='denied' className="container mt-5 mb-5" hidden={!loading}>
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