import React, { Component, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { useStepperContext } from '../contexts/StepperContext.js'

const WorkProfile = () => {

    const { userData, setUserData } = useStepperContext();
    const [switchCharge, setSwitchCharge] = useState(false);
    const [disabledButton, setDisabledButton] = useState(false);
    const TermsConditions = document.getElementById('nextButton');
    TermsConditions.disabled = disabledButton;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const jobs = ["Carpintero","Lechero","Frutero","Cerrajero","Cocinero","Deshollinador","Lavandero","Artesano",
    "Pescador","Escultor","Tornero","Albañil","Editor","Barrendero","Fontanero o plomero",
    "Obrero","Panadero","Locutor","Barbero","Soldador","Escritor","Leñador",
    "Pintor","Vendedor","Peletero","Sastre","Repartidor","Impresor","Pastor ganadero",
    "Cajero","Agricultor","Vigilante","Exterminador","Carnicero","Animador","Peluquero",
    "Mecánico","Niñero/a","Conductor","Soldador"].sort();
    
    return (
        <>
        <Container className='form mt-5 mb-5'>
            <div className='col-xl-4 col-lg-6 col-md-10 col-sm-10 col-xs-12'>
                <Form className='formulario shadow p-3 rounded'>
                    <h3 className='mb-4 mt-1'>Perfil laboral</h3>
                    <Row>
                        <Col className="form-floating mb-3">
                            <select id='area' className="form-select" name='area'
                            value={userData["area"] || ""} onChange={handleChange}>
                            <option defaultValue={0}>Seleccionar especialidad</option>
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
                        </Col>
                    </Row>
                    <Row className="row m-1">
                        <Col className="form-check form-switch mb-3">
                            <input className="form-check-input" type="checkbox" id='switch' name='switch'
                            onChange={(e) => setSwitchCharge(!switchCharge)}/>
                            <label className="form-check-label">¿Tienes trabajo actualmente?</label>
                        </Col>
                    </Row>
                    <Row>
                        {
                            switchCharge === true ? 
                            <Col className="form-floating mb-3">
                                <input type="text" className="form-control" id='role' name='role' placeholder="Nombre" 
                                value={userData["role"] || ""} onChange={handleChange}/>
                                <label htmlFor="role">Cargo</label>
                            </Col> : null
                        }
                    </Row>
                    <Row>
                        <Col className="form-floating mb-3">
                            <input type="number" className="form-control" id='yearsExperience' name='yearsExperience' min={0}  
                            value={userData["yearsExperience"] || ""} onChange={handleChange}/>
                            <label htmlFor="yearsExperience">Años de experiencia</label>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="form-floating">
                            <textarea className="form-control" placeholder="Dejar un comentario aquí" id="resume" name='resume' style={{height: '100px'}}
                            value={userData["resume"] || ""} onChange={handleChange} ></textarea>
                            <label htmlFor="resume">¿Qué haces?</label>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Container>
      </>
    )
}

export default WorkProfile
