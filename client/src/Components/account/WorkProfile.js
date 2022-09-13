import React, { Component, useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { useStepperContext } from '../contexts/StepperContext.js'

const WorkProfile = () => {

    const { userData, setUserData } = useStepperContext();
    const [switchCharge, setSwitchCharge] = useState(false);
    const [disabledButton, setDisabledButton] = useState(false);
    const [validated, setValidated] = useState(false);
    const nextButton = document.getElementById('nextButton');
    nextButton.disabled = disabledButton;

    const jobs = ["Carpintero/a","Lechero/a","Frutero/a","Cerrajero/a","Cocinero/a","Deshollinador/ora","Lavandero/a","Artesano/a",
    "Pescador/ra","Escultor/ra","Tornero/a","Albañil","Editor/ra","Barrendero/a","Fontanero/a o plomero/a",
    "Obrero/a","Panadero/a","Locutor/ra","Barbero/a","Soldador/ra","Escritor/ra","Leñador/ra",
    "Pintor/ra","Vendedor/ra","Peletero/a","Sastrero/ra","Repartidor/ra","Impresor/ra","Pastor/ra ganadero/ra",
    "Cajero/a","Agricultor/ra","Vigilante","Exterminador/ra","Carnicero/a","Animador/ra","Peluquero/a",
    "Mecánico/a","Niñero/a","Conductor/ra","Soldador/ra"].sort();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = (event) =>{
        const area = document.getElementById('area').value;
        const experience = document.getElementById('yearsExperience').value;
        let validation = null;

        if(switchCharge){
            const role = document.getElementById('role').value;
            validation = area !== "" && experience !== "" && role !== "";
        }else{
            validation = area !== "" && experience !== "";
        }
        if(!validation){
            setValidated(true);
            Object.defineProperty(event, 'continue', {
                value: false,
                writable: true
            });
        }
        else{
            setValidated(false);
            Object.defineProperty(event, 'continue', {
                value: true,
                writable: true
            });
        }
        if(switchCharge === false && userData.role !== undefined){
            delete userData.role;
        }
    }

    useEffect(() => {      
        document.getElementById('steps').scrollIntoView();
        document.addEventListener('handleEvent', handleSubmit);
        return () => {
            document.removeEventListener('handleEvent', handleSubmit);
        }
    },[switchCharge]);
    
    return (
        <>
        <Container className='form mt-5 mb-5'>
            <div className='col-xl-4 col-lg-6 col-md-10 col-sm-10 col-xs-12'>
                <Form id='formulario' className='formulario shadow p-3 rounded' noValidate validated={validated}>
                    <h3 className='mb-4 mt-1'>Perfil laboral</h3>
                    <Row>
                        <Form.Text className='mb-1'>Algunos campos son obligatorios</Form.Text>
                        <Col className="form-floating mb-3">
                            <select id='area' className="form-select" name='area'
                            value={userData["area"] || ""} onChange={handleChange} required>
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
                            <Form.Control.Feedback type="invalid">
                                Por favor, ingrese su área de trabajo.
                            </Form.Control.Feedback>
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
                                value={userData["role"] || ""} onChange={handleChange} required/>
                                <label htmlFor="role">Cargo</label>
                                <Form.Control.Feedback type="invalid">
                                Por favor, ingrese su cargo.
                                </Form.Control.Feedback>
                            </Col> : null
                        }
                    </Row>
                    <Row>
                        <Col className="form-floating mb-3">
                            <input type="number" className="form-control" id='yearsExperience' name='yearsExperience' min={0}  
                            value={userData["yearsExperience"] || ""} onChange={handleChange} required/>
                            <label htmlFor="yearsExperience">Años de experiencia</label>
                            <Form.Control.Feedback type="invalid">
                                Por favor, ingrese sus años de experiencia.
                            </Form.Control.Feedback>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="form-floating">
                            <textarea className="form-control" placeholder="Dejar un comentario aquí" id="resume" name='resume' style={{height: '100px'}}
                            value={userData["resume"] || ""} onChange={handleChange} ></textarea>
                            <label htmlFor="resume">Descripción laboral</label>
                            <Form.Text>Éste campo es opcional</Form.Text>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Container>
      </>
    )
}

export default WorkProfile
