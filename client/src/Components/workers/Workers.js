import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Nav, Offcanvas, Row } from 'react-bootstrap';
import Axios from 'axios'
import { FaFilter } from "react-icons/fa";
import '../css/Workers.css';
import perfil from '../assets/perfil.png'
import UserModal from './UserModal';

const Workers = () => {

  const [show, setShow] = useState(false);
  const [usuarios, setUsuarios ] = useState([]);
  const [profileData, setProfileData ] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const viewProfile = (e) =>{
  //   Axios.get("http://52.91.196.215:3001/api/user-profile/"+e.currentTarget.value).then((res)=>{
  //       setProfileData(res.data);
  //     }).catch((error) =>{
  //       console.log(error);
  //     });
  // }

  //3.92.68.154 AWS LOCAL
  useEffect(() => {
      Axios.get("http://52.91.196.215:3001/api/usuarios").then((res)=>{
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
          <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-lg-6">
              <div className="section_heading text-center wow fadeInUp" data-wow-delay="0.2s" style={{"visibility": "visible", "animationDelay": "0.2s", "animationName": "fadeInUp"}}>
                <h3>Nuestra gran <span> Comunidad</span></h3>
                <p>A continuación le mostraremos a nuestros trabajadores y sus servicios laborales.</p>
                <div className="line"></div>
              </div>
            </div>
          </div>
        <div className="row">
        {
          usuarios.map((element,key) =>{
            return(
              <>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                  <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" style={{"visibility": "visible", "animationDelay": "0.2s", "animationName": "fadeInUp"}} key={key}>
                    <div className="advisor_thumb" style={{'backgroundColor': (element.userColor !== undefined && element.userColor !== null && element.userColor !== "") ? element.userColor : '#3f43fd'}}>
                    <h6>{element.workareaUser}</h6>
                    <p className="designation"><i className="fa fa-clock-o"></i>{" "+element.experienceYears+" años de experiencia"}</p>
                      <img src={(element.userPhoto !== undefined && element.userPhoto !== null && element.userPhoto !== "") ? 'http://52.91.196.215:3001/api/images/' + element.userPhoto : perfil} 
                      style={{width: '18rem'}} alt={'imagen de perfil'} />
                      <div className="social-info">
                        <a href={element.facebookSite !== undefined ? element.facebookSite : '#'}><i className="fa fa-facebook"></i></a><a href={element.instagramSite !== undefined ? element.instagramSite : '#'}><i className="fa fa-instagram"></i></a><a href="#"><i className="fa fa-linkedin"></i></a>
                      </div>
                    </div>
                    <div className="single_advisor_details_info">
                      <h6>{element.nameUser + " " + element.lastnamesUser}</h6>
                      <p className="designation">{element.workareaUser}</p>
                      <p className="designation">{element.workResume}</p>
                      <button type="button" className="btn btn-danger mt-2" value={element.rutUser} onClick={(e) =>{setProfileData(e.currentTarget.value); setModalShow(true)}}>Ver Perfil</button>
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }
        <UserModal data={usuarios.filter((value) => {return value.rutUser === profileData})} show={modalShow} onHide={() => setModalShow(false)} />
        </div>
        </div>
        </Row>
      </Container>
      </section>
    </>
  );
}

export default Workers;