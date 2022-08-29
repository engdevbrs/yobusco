import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react'
import { Container, Form, Row } from 'react-bootstrap'
import Axios from 'axios'
import '../css/Personalnformation.css'
import { useStepperContext } from '../contexts/StepperContext.js'

const PersonalInformation = () => {

    const { userData, setUserData } = useStepperContext();
    const [localidades, setLocalidades] = useState([]);
    const [ciudades, setCiudades] = useState([]);
    const [comunas, setComunas] = useState([]);
    const [validated, setValidated] = useState(false);
    const [disabledButton, setDisabledButton] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleRegionChange = (e) => {
        const ciudadIndex = document.getElementById('region').value;
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
        const ciudadesIndex = localidades.find(element => {
            return element.region === ciudadIndex;
        });
        setCiudades(ciudadesIndex.ciudad);
        setComunas([]);
    };

    const handleCityChange = (e) => {
        const cityName = document.getElementById('city').value;
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
        const comunasData = ciudades.find(element => {
            return element[0] === cityName;
        });
        setComunas(comunasData[1].comunas);
    };

    const handleSubmit = (event) =>{
        let arrayValues = [];
        const formValues = document.getElementsByClassName('personalForm')[0].elements;
        [...formValues].forEach((elements) =>{
            arrayValues.push(elements.value);
        });
        if(arrayValues.includes("")){
            event.preventDefault();
            setValidated(true);
        }
        else{
            setValidated(false);
        }
    }

    useEffect(() => {
        Axios.get("http://localhost:3001/api/localidades").then((res)=>{
            setLocalidades(res.data);
        });        
        document.addEventListener('handleEvent', handleSubmit);

        return () => {
            document.removeEventListener('handleEvent', handleSubmit);
        }
    },[]);

    return (
        <Container className='form mt-5 mb-5'>
            <div className='col-lg-8 col-md-10 col-sm-12'>
                <Form className='personalForm shadow p-3 rounded' noValidate validated={validated}>
                    <h3 className='mb-4 mt-1'>Información personal</h3>
                    <Row>
                        <Form.Text className='mb-1'><span className='mb-1' style={{color: 'red'}}>Todos los campos son obligatorios</span></Form.Text>
                        <div className='form-floating col-md-4 mb-3'>
                            <input type='text' className='form-control' id='floatingName' name='name' placeholder='Nombre' 
                            value={userData['name'] || ''} onChange={handleChange} required/>
                            <label htmlFor='name'>Nombre</label>
                            <Form.Control.Feedback type="invalid">
                                Por favor, ingrese su nombre.
                            </Form.Control.Feedback>
                        </div>
                        <div className='form-floating col-md-8 mb-3'>
                            <input type='text' className='form-control' id='lastname' name='lastname' placeholder='Apellido'
                            value={userData['lastname'] || ''} onChange={handleChange} required/>
                            <label htmlFor='lastname'>Apellidos</label>
                            <Form.Control.Feedback type="invalid">
                                Por favor, ingrese sus apellidos.
                            </Form.Control.Feedback>
                        </div>
                    </Row>
                    <Row>
                        <div className='form-floating col-md-4 mb-3'>
                            <input type='text' className='form-control' id='rut' name='rut' placeholder='Ej: 12345678-9'
                            value={userData['rut'] || ''} onChange={handleChange} required/>
                            <label htmlFor='rut'>Rut</label>
                            <Form.Control.Feedback type="invalid">
                                Por favor, ingrese su rut.
                            </Form.Control.Feedback>
                        </div>
                        <div className='form-floating col-md-8 mb-3'>
                            <input type='date' className='form-control' id='bornDate' name='bornDate' placeholder='correo@gmail.com'
                            value={userData['bornDate'] || ''} onChange={handleChange} required/>
                            <label htmlFor='bornDate'>Fecha de Nacimiento</label>
                            <Form.Control.Feedback type="invalid">
                                Por favor, ingrese su fecha de nacimiento.
                            </Form.Control.Feedback>
                        </div>
                    </Row>
                    <Row>
                        <div className='form-floating col-lg-4 col-md-4 col-md-4 mb-3'>
                            <input type='tel' className='form-control' id='phone' name='phone' placeholder='+569 12345678'
                            value={userData['phone'] || ''} onChange={handleChange} required/>
                            <label htmlFor='phone'>Celular</label>
                            <Form.Control.Feedback type="invalid">
                                Por favor, ingrese su celular.
                            </Form.Control.Feedback>
                        </div>
                        <div className='form-floating col-md-8 mb-3'>
                            <input type='email' className='form-control' id='email' name='email' placeholder='correo@gmail.com'
                            value={userData['email'] || ''} onChange={handleChange} required/>
                            <label htmlFor='email'>Correo electrónico</label>
                            <Form.Control.Feedback type="invalid">
                                Por favor, ingrese un correo electrónico.
                            </Form.Control.Feedback>
                        </div>
                    </Row>
                    <Row>
                        <h3 className='mb-4 mt-1'>Lugar de residencia</h3>
                        <div className='form-floating col-md-4 mb-3'>
                            <select id='region' className='form-select' name='region' 
                            value={userData['region'] || ''} onChange={handleRegionChange} required>
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
                            value={userData['city'] || ''} onChange={handleCityChange} required>
                            <option disabled selected="" value="">Seleccionar provincia</option>
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
                            value={userData['comunne'] || ''} onChange={handleChange} required>
                            <option disabled selected="" value="">Seleccionar comuna</option>
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
                    </Row>
                </Form>
            </div>
        </Container>
    )
}

export default PersonalInformation
