import React, { Component, useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useStepperContext } from '../contexts/StepperContext.js'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CreateNewUser = () => {

    const { userData, setUserData } = useStepperContext();
    const [disabledButton, setDisabledButton] = useState(true);
    const TermsConditions = document.getElementById('nextButton');
    TermsConditions.disabled = disabledButton;

    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleChange1=(event)=>{
        setValue1(event.target.value);
    }
    
    const handleChange2=(event)=>{
        setValue2(event.target.value);
    }
   
    const handleSubmit = (event) =>{
    }

    useEffect(() =>{
        if(value1.length >= "8" && value1.match(/[A-Z]/) && 
        value1.match(/[a-z]/) && value1.match(/[\d`~!@#$%\^&*()+=|;:'",.<>\/?\\\-]/)
        && ((value1 === value2) && (value1 !==""))){
            setDisabledButton(false);
        }else{
            setDisabledButton(true);
        }
        document.addEventListener('handleEvent', handleSubmit);
        return () => {
            document.removeEventListener('handleEvent', handleSubmit);
        }
    },[value1,value2,disabledButton]);

    return (
        <>
        <Container className='form mt-5 mb-5'>
            <div className='col-xl-5 col-lg-6 col-md-8 col-sm-10 col-xs-12'>
                <Form className='formulario shadow p-3 rounded'>
                    <h3 className='mb-4 mt-1'>Usuario</h3>
                    <Row>
                        <Col className='form-floating mb-3'>
                            <input type='email' className='form-control' id='email' name='email' placeholder='correo@gmail.com'
                            value={userData['email'] || ''} onChange={handleChange} required/>
                            <label htmlFor='email'>Correo electrónico</label>
                        </Col>
                    </Row>
                    <h3 className='mb-2 mt-1'>Contraseña</h3>
                    <Row>
                        <Col className="form-floating mb-3">
                            <input type="password" className="form-control" id='pass' name='pass' placeholder="Especialidad"
                            value={userData["pass"] || ""} onChange={(e) => {handleChange(e); handleChange1(e)}}/>
                            <label htmlFor="pass">Contraseña</label>
                            <p style={{fontWeight:"bold"}}>Todas las marcas de verificación deben volverse verdes, la contraseña debe tener:</p>
                            <p><i style={{color: value1.length >= "8" ? "green" : "red",fontSize:"20px"}} className="fa fa-check-circle" aria-hidden="true">
                                </i> Al menos, 8 carácteres.</p>
                            <p><i style={{color: value1.match(/[A-Z]/) ? "green" : "red",fontSize:"20px"}} className="fa fa-check-circle" aria-hidden="true">
                                </i> Al menos, 1 letra mayúscula.</p>
                            <p><i style={{color:value1.match(/[a-z]/) ? "green" : "red",fontSize:"20px"}} className="fa fa-check-circle" aria-hidden="true">
                                </i> Al menos, 1 letra minúscula.</p>
                            <p><i style={{color:value1.match(/[\d`~!@#$%\^&*()+=|;:'",.<>\/?\\\-]/) ? "green" : "red",fontSize:"20px"}} className="fa fa-check-circle" aria-hidden="true">
                                </i> Al menos, 1 número o un carácter especial.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="form-floating mb-3">
                            <input type="password" className="form-control" id="confirmpass" placeholder="Especialidad"
                            onChange={handleChange2}/>
                            <label htmlFor="confirmpass">Confirmar contraseña</label>
                            <p className='mt-2'><i style={{color:((value1 === value2) && (value1 !=="")) ? "green" : "red",fontSize:"20px"}} className="fa fa-check-circle" aria-hidden="true"></i> Ambas contraseñas son iguales</p>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Container>
      </>
    )
}

export default CreateNewUser
