import React, { Component } from 'react';
import '../css/Personalnformation.css';

const PersonalInformation = () => {
    return (
      <>
        <div className='form container mt-5 mb-5'>
            <div className='col-lg-8 col-md-10 col-sm-12'>
                <form className='shadow p-3 rounded'>
                    <h3 className='mb-4 mt-1'>Información personal</h3>
                    <div className="row">
                        <div className="form-floating col-md-4 mb-3">
                            <input type="text" className="form-control" id="floatingName" placeholder="Nombre" />
                            <label htmlFor="floatingName">Nombre</label>
                        </div>
                        <div className="form-floating col-md-8 mb-3">
                            <input type="text" className="form-control" id="floatingLastName" placeholder="Apellido"/>
                            <label htmlFor="floatingLastName">Apellidos</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-floating col-lg-4 col-md-6 mb-3">
                            <input type="text" className="form-control" id="floatingRut" placeholder="Ej: 12345678-9"/>
                            <label htmlFor="floatingRut">Rut</label>
                        </div>
                        <div className="form-floating col-lg-8 col-md-6 mb-3">
                            <input type="date" className="form-control" id="floatingBirth" placeholder="correo@gmail.com"/>
                            <label htmlFor="floatingBirth">Fecha de Nacimiento</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-floating col-lg-4 col-md-4 col-md-4 mb-3">
                            <input type="tel" className="form-control" id="floatingPhone" placeholder="+569 12345678"/>
                            <label htmlFor="floatingPhone">Celular</label>
                        </div>
                        <div className="form-floating col-md-8 mb-3">
                            <input type="email" className="form-control" id="floatingEmail" placeholder="correo@gmail.com"/>
                            <label htmlFor="floatingEmail">Correo electrónico</label>
                        </div>
                    </div>
                    <div className='row'>
                    <h3 className='mb-4 mt-1'>Lugar de residencia</h3>
                        <div className="form-floating col-md-4 mb-3">
                            <select id="floatingRegion" className="form-select">
                            <option selected>Seleccionar región</option>
                            <option>...</option>
                            </select>
                            <label htmlFor="floatingRegion" className="form-label">Región</label>
                        </div>
                        <div className="form-floating col-md-4 mb-3">
                            <select id="floatingCiudad" className="form-select">
                            <option selected>Seleccionar ciudad</option>
                            <option>...</option>
                            </select>
                            <label htmlFor="floatingCiudad" className="form-label">Ciudad</label>
                        </div>
                        <div className="form-floating col-md-4 mb-3">
                            <select id="floatingComuna" className="form-select">
                            <option selected>Seleccionar comuna</option>
                            <option>...</option>
                            </select>
                            <label htmlFor="floatingComuna" className="form-label">Comuna</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      </>
    )
}

export default PersonalInformation
