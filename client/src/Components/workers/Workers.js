import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Nav, Offcanvas, Row } from 'react-bootstrap';
import Axios from 'axios'
import { FaFilter } from "react-icons/fa";
import '../css/Workers.css';
import perfil from '../assets/perfil.png'
import { Link } from 'react-router-dom';

const Workers = () => {

  const [show, setShow] = useState(false);
  const [usuarios, setUsuarios ] = useState([]);
  const [profileData, setProfileData ] = useState([]);
  const [localidades, setLocalidades] = useState([]);
  const [ciudades, setCiudades] = useState([]);
  const [comunas, setComunas] = useState([]);

  const jobs = ["Carpintero/a","Lechero/a","Frutero/a","Cerrajero/a","Cocinero/a","Deshollinador/ora","Lavandero/a","Artesano/a",
  "Pescador/ra","Escultor/ra","Tornero/a","Albañil","Editor/ra","Barrendero/a","Fontanero/a o plomero/a",
  "Obrero/a","Panadero/a","Locutor/ra","Barbero/a","Soldador/ra","Escritor/ra","Leñador/ra",
  "Pintor/ra","Vendedor/ra","Peletero/a","Sastrero/ra","Repartidor/ra","Impresor/ra","Pastor/ra ganadero/ra",
  "Cajero/a","Agricultor/ra","Vigilante","Exterminador/ra","Carnicero/a","Animador/ra","Peluquero/a",
  "Mecánico/a","Niñero/a","Conductor/ra","Soldador/ra"].sort();

  const handleRegionChange = (e) => {
    const ciudadIndex = document.getElementById('region').value;
    const { name, value } = e.target;
    const ciudadesIndex = localidades.find(element => {
        return element.region === ciudadIndex;
    });
    setCiudades(ciudadesIndex.ciudad);
    setComunas([]);
  };

  const handleCityChange = (e) => {
      const cityName = document.getElementById('city').value;
      const { name, value } = e.target;
      const comunasData = ciudades.find(element => {
          return element[0] === cityName;
      });
      setComunas(comunasData[1].comunas);
  };
  
  useEffect(() => {
      Axios.get("http://52.91.196.215:3001/api/usuarios").then((res)=>{
        setUsuarios(res.data);
      });
      Axios.get("http://52.91.196.215:3001/api/localidades").then((res)=>{
            setLocalidades(res.data);
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
      <Container className='mt-4'>
        <Row lg={1} md={1} sm={1} xs={1} className='worker-view'>                
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-lg-6">
              <div className="section_heading text-center wow fadeInUp" data-wow-delay="0.2s" style={{"visibility": "visible", "animationDelay": "0.2s", "animationName": "fadeInUp"}}>
                <h3>Nuestra gran <span> Comunidad</span></h3>
                <p>A continuación le mostraremos a nuestros trabajadores y sus servicios laborales.</p>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <Col className='d-flex justify-content-end mt-3 mb-3'>
          <p onClick={e => setShow(!show)} className="me-2" style={{color:'#202a34'}}>
            <FaFilter cursor={'pointer'} size={26} />
          </p>
        </Col>
        {
            show === true ? <Row className='shadow mb-3'>
              <h5 className='mb-2 mt-2'>Filtrar por residencia</h5>
              <div className='form-floating col-md-4 mb-3' >
                  <select id='region' className='form-select' name='region'  defaultValue={''}
                  onChange={handleRegionChange}>
                  <option disabled selected="" value="">Seleccionar región</option>
                  {
                      localidades.map((locations,key) => {
                          return(
                              <>
                              <option key={key} value={locations.region}>{locations.region}</option>
                              </>
                          )
                      })
                  }
                  </select>
                  <label htmlFor='region' className='form-label'>Región</label>
                  <Form.Control.Feedback type="invalid">
                      Por favor, seleccione una región.
                  </Form.Control.Feedback>
              </div>
              <div className='form-floating col-md-4 mb-3'>
                  <select id='city' className='form-select' name='city' 
                   defaultValue={''} onChange={handleCityChange}>
                  <option selected="" value="">Seleccionar provincia</option>
                  <Form.Control.Feedback type="invalid">
                  Por favor, seleccione una provincia.
                  </Form.Control.Feedback>
                  {
                      ciudades.map((cities,key) => {
                          return(
                              <>
                              <option key={key} value={cities[0]}>{cities[0]}</option>
                              </>
                          )
                      })
                  }
                  </select>
                  <label htmlFor='city' className='form-label'>Provincia</label>
              </div>
              <div className='form-floating col-md-4 mb-3'>
                  <select id='comunne' className='form-select' name='comunne'
                  defaultValue={''} onChange={e => e.target.value}>
                  <option selected="" value="">Seleccionar comuna</option>
                  <Form.Control.Feedback type="invalid">
                      Por favor, seleccione una comuna.
                  </Form.Control.Feedback>
                  {
                      comunas.map((comunnes,key) => {
                          return(
                              <>
                              <option key={key} value={comunnes}>{comunnes}</option>
                              </>
                          )
                      })
                  }
                  </select>
                  <label htmlFor='comunne' className='form-label'>Comuna</label>
              </div>
              <h5 className='mb-2 mt-1'>Filtrar por especialidad</h5>
              <div className='form-floating mb-3'>
              <select id='area' className="form-select" name='area'
                  defaultValue={""}>
                  <option disabled selected value="">Seleccionar especialidad</option>
                  {
                      jobs.map((jobs,key) =>{
                          return(
                              <>
                                  <option key={key} value={jobs}>{jobs}</option>
                              </>
                          )
                      })
                  }
                </select>
                <label htmlFor="area" className="form-label">Especialidad</label>
              </div>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center justify-content-md-end justify-content-xl-end mb-3">
                  <Button variant="outline-primary" className="btn btn-outline-primary btn-lg px-4 me-sm-3" size="sm">Filtrar</Button>
                  <Button variant="outline-danger" className="btn btn-outline-danger btn-lg px-4" size="sm">Limpiar</Button>
              </div>
          </Row> : <></>
          }
        <div className="row shadow">
        {
          usuarios.map((element,key) =>{
            return(
              <>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-2">
                  <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" style={{"visibility": "visible", "animationDelay": "0.2s", "animationName": "fadeInUp"}} key={key}>
                    <div className="advisor_thumb" style={{'backgroundColor': (element.userColor !== undefined && element.userColor !== null && element.userColor !== "") ? element.userColor : '#3f43fd'}}>
                    <h6>{element.workareaUser}</h6>
                    <p className="designation"><i className="fa fa-clock-o"></i>{" "+element.experienceYears+" años de experiencia"}</p>
                      <img src={(element.userPhoto !== undefined && element.userPhoto !== null && element.userPhoto !== "") ? 'http://52.91.196.215:3001/api/images/' + element.userPhoto : perfil} 
                      style={{height: '15rem'}} alt={'imagen de perfil'} />
                      <div className="social-info">
                        {
                          (element.facebookSite !== "" && element.facebookSite !== null && element.facebookSite !== undefined ) ? <a href={element.facebookSite} target='_blank' rel='noreferrer'><i className="fa fa-facebook"></i></a>
                          : <></>
                        }
                        {
                          (element.instagramSite !== "" && element.instagramSite !== null && element.instagramSite !== undefined ) ? <a href={element.instagramSite} target='_blank' rel='noreferrer'><i className="fa fa-instagram"></i></a>
                          : <></>
                        }
                        {
                          (element.webSite !== "" && element.webSite !== null && element.webSite !== undefined ) ? <a href={'http://'+element.webSite} target='_blank' rel='noreferrer'><i className="fas fa-globe-americas"></i></a>
                          : <></>
                        }
                        {
                          (element.cellphone !== "" && element.cellphone !== null && element.cellphone !== undefined ) ? <a href={`tel:${element.cellphone}`}><i className="fas fa-phone"></i></a>
                          : <></>
                        }
                      </div>
                    </div>
                    <div className="single_advisor_details_info">
                      <h6>{element.nameUser + " " + element.lastnamesUser}</h6>
                      <p className="designation">{element.chargeUser}</p>
                      <p className="designation">{element.workResume}</p>
                      <Link to={`/trabajadores/perfil/vista/${element.id}`} className="btn btn-danger mt-2">Ver Perfil</Link>
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }
        </div>
        </div>
        </Row>
      </Container>
      </section>
    </>
  );
}

export default Workers;