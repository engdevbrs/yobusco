import React, { Component, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useStepperContext } from '../contexts/StepperContext.js'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CreateNewUser = () => {

    const { userData, setUserData } = useStepperContext();
    const [disabledButton, setDisabledButton] = useState(false);
    const TermsConditions = document.getElementById('nextButton');
    TermsConditions.disabled = disabledButton;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    return (
        <>
        <Container className='form mt-5 mb-5'>
            <div className='col-xl-4 col-lg-6 col-md-6 col-sm-8 col-xs-12'>
                <Form className='formulario shadow p-3 rounded'>
                    <h3 className='mb-4 mt-1'>Usuario</h3>
                    <Row>
                        <Col className="form-floating mb-3">
                            <input type="text" className="form-control" id='user' name='user' placeholder="Nombre de usuario"
                            value={userData["user"] || ""} onChange={handleChange}/>
                            <label htmlFor="user">Nombre de usuario</label>
                        </Col>
                    </Row>
                    <h3 className='mb-4 mt-1'>Contraseña</h3>
                    <Row>
                        <Col className="form-floating mb-3">
                            <input type="password" className="form-control" id='pass' name='pass' placeholder="Especialidad"
                            value={userData["pass"] || ""} onChange={handleChange}/>
                            <label htmlFor="pass">Contraseña</label>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="form-floating mb-3">
                            <input type="password" className="form-control" id="confirmpass" placeholder="Especialidad"/>
                            <label htmlFor="confirmpass">Confirmar contraseña</label>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Container>
      </>
    )
}

export default CreateNewUser
