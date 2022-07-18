import React, { Component } from 'react'

const WorkProfile = () => {
    return (
        <>
        <div className='form container mt-5 mb-5'>
            <div className='col-lg-8 col-md-10 col-sm-12'>
                <form className='shadow p-3 rounded'>
                    <h3 className='mb-4 mt-1'>Profesión/Oficio</h3>
                    <div className="row">
                        <div className="form-floating col-md-6 mb-3">
                            <select id="floatingArea" className="form-select">
                            <option selected>Seleccionar Área</option>
                            <option>...</option>
                            </select>
                            <label htmlFor="floatingArea" className="form-label">Área</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-floating col-md-6 mb-3">
                            <input type="text" className="form-control" id="floatingSpecialty" placeholder="Especialidad"/>
                            <label htmlFor="floatingSpecialty">Especialidad</label>
                        </div>
                    </div>
                    <div className="row m-1">
                        <div className="form-check form-switch col-md-6 mb-3">
                            <input className="form-check-input" type="checkbox" id="floatingflexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="floatingflexSwitchCheckDefault">¿Tienes trabajo actualmente?</label>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="form-floating col-md-6 mb-3">
                            <input type="text" className="form-control" id="floatingRole" placeholder="Nombre" />
                            <label htmlFor="floatingRole">Cargo</label>
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="form-floating col-md-6 mb-3">
                            <input type="number" className="form-control" id="floatingExp" min={0}  />
                            <label htmlFor="floatingExp">Años de experiencia</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Dejar un comentario aquí" id="floatingTextarea2" style={{height: '100px'}}></textarea>
                            <label htmlFor="floatingTextarea2">Resumen laboral</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      </>
    )
}

export default WorkProfile
