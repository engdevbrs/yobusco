import React, { useEffect, useState } from 'react'
import { Container, Form, Row } from 'react-bootstrap'
import Axios from 'axios'
import '../css/Personalnformation.css'
import { useStepperContext } from '../contexts/StepperContext.js'
import StepperControl from './StepperControl'

const PersonalInformation = () => {

    const { userData, setUserData } = useStepperContext();
    const [localidades, setLocalidades] = useState([]);
    const [ciudades, setCiudades] = useState([]);
    const [comunas, setComunas] = useState([]);

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


    useEffect(() => {
        Axios.get("http://localhost:3001/api/localidades").then((res)=>{
            setLocalidades(res.data);
        });   
    },[]);
    

    return (
        <Container className='form mt-5 mb-5'>
            <div className='col-lg-8 col-md-10 col-sm-12'>
                <Form className='personalForm shadow p-3 rounded'>
                    <h3 className='mb-4 mt-1'>Información personal</h3>
                    <Row>
                        <div className='form-floating col-md-4 mb-3'>
                            <input type='text' className='form-control' id='floatingName' name='name' placeholder='Nombre' 
                            value={userData['name'] || ''} onChange={handleChange}/>
                            <label htmlFor='name'>Nombre</label>
                        </div>
                        <div className='form-floating col-md-8 mb-3'>
                            <input type='text' className='form-control' id='lastname' name='lastname' placeholder='Apellido'
                            value={userData['lastname'] || ''} onChange={handleChange}/>
                            <label htmlFor='lastname'>Apellidos</label>
                        </div>
                    </Row>
                    <Row>
                        <div className='form-floating col-md-4 mb-3'>
                            <input type='text' className='form-control' id='rut' name='rut' placeholder='Ej: 12345678-9'
                            value={userData['rut'] || ''} onChange={handleChange}/>
                            <label htmlFor='rut'>Rut</label>
                        </div>
                        <div className='form-floating col-md-8 mb-3'>
                            <input type='date' className='form-control' id='birth' name='birth' placeholder='correo@gmail.com'
                            value={userData['birth'] || ''} onChange={handleChange}/>
                            <label htmlFor='birth'>Fecha de Nacimiento</label>
                        </div>
                    </Row>
                    <Row>
                        <div className='form-floating col-lg-4 col-md-4 col-md-4 mb-3'>
                            <input type='tel' className='form-control' id='phone' name='phone' placeholder='+569 12345678'
                            value={userData['phone'] || ''} onChange={handleChange}/>
                            <label htmlFor='phone'>Celular</label>
                        </div>
                        <div className='form-floating col-md-8 mb-3'>
                            <input type='email' className='form-control' id='email' name='email' placeholder='correo@gmail.com'
                            value={userData['email'] || ''} onChange={handleChange}/>
                            <label htmlFor='email'>Correo electrónico</label>
                        </div>
                    </Row>
                    <Row className='row'>
                    <h3 className='mb-4 mt-1'>Lugar de residencia</h3>
                        <div className='form-floating col-md-4 mb-3'>
                            <select id='region' className='form-select' name='region' 
                            value={userData['region'] || ''} onChange={handleRegionChange}>
                            <option defaultValue={0}>Seleccionar región</option>
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
                        </div>
                        <div className='form-floating col-md-4 mb-3'>
                            <select id='city' className='form-select' name='city' 
                            value={userData['city'] || ''} onChange={handleCityChange}>
                            <option defaultValue={0}>Seleccionar provincia</option>
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
                            value={userData['comunne'] || ''} onChange={handleChange}>
                            <option defaultValue={0}>Seleccionar comuna</option>
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
