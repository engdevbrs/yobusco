import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/CreateUser.css';



const CreateNewUser = () => {

    return (
        <>
        <Container className='form mt-5 mb-5'>
            <div className='col-xl-4 col-lg-6 col-md-6 col-sm-8 col-xs-12'>
                <Form className='formulario shadow p-3 rounded'>
                    <h3 className='mb-4 mt-1'>Usuario</h3>
                    <Row>
                        <Col className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingUser" placeholder="Nombre de usuario"/>
                            <label htmlFor="floatingUser">Nombre de usuario</label>
                        </Col>
                    </Row>
                    <h3 className='mb-4 mt-1'>Contraseña</h3>
                    <Row>
                        <Col className="form-floating mb-3">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Especialidad"/>
                            <label htmlFor="floatingPassword">Contraseña</label>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="form-floating mb-3">
                            <input type="password" className="form-control" id="floatingPasswordConfirm" placeholder="Especialidad"/>
                            <label htmlFor="floatingPasswordConfirm">Confirmar contraseña</label>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Container>
      </>
    )
}

export default CreateNewUser
