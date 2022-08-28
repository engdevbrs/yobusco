import React, { Component } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'

const WorkProfile = () => {
    return (
        <>
        <Container className='form mt-5 mb-5'>
            <div className='col-xl-4 col-lg-6 col-md-6 col-sm-8 col-xs-12'>
                <Form className='formulario shadow p-3 rounded'>
                    <h3 className='mb-4 mt-1'>Profesión/Oficio</h3>
                    <Row>
                        <Col className="form-floating mb-3">
                            <select id="floatingArea" className="form-select">
                            <option selected>Seleccionar Área</option>
                            <option>...</option>
                            </select>
                            <label htmlFor="floatingArea" className="form-label">Área</label>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingSpecialty" placeholder="Especialidad"/>
                            <label htmlFor="floatingSpecialty">Especialidad</label>
                        </Col>
                    </Row>
                    <Row className="row m-1">
                        <Col className="form-check form-switch mb-3">
                            <input className="form-check-input" type="checkbox" id="floatingflexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="floatingflexSwitchCheckDefault">¿Tienes trabajo actualmente?</label>
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingRole" placeholder="Nombre" />
                            <label htmlFor="floatingRole">Cargo</label>
                        </Col>
                    </Row> */}
                    <Row>
                        <Col className="form-floating mb-3">
                            <input type="number" className="form-control" id="floatingExp" min={0}  />
                            <label htmlFor="floatingExp">Años de experiencia</label>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="form-floating">
                            <textarea className="form-control" placeholder="Dejar un comentario aquí" id="floatingTextarea2" style={{height: '100px'}}></textarea>
                            <label htmlFor="floatingTextarea2">Resumen laboral</label>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Container>
      </>
    )
}

export default WorkProfile
