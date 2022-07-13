import React, { Component } from 'react';
import '../css/Create-account.css';

const CreateAccount = () => {
    return (
      <>
        <div className='form container mt-5 mb-5'>
            <div className='col-lg-6 col-md-10 col-sm-10'>
                <form className='shadow p-3 rounded'>
                    <div className="row">
                        <div className="form-floating col mb-3">
                            <input type="text" className="form-control" id="floatingName" placeholder="Nombre" />
                            <label htmlFor="floatingName">Nombre</label>
                        </div>
                        <div className="form-floating col mb-3">
                            <input type="text" className="form-control" id="floatingLastName" placeholder="Apellido"/>
                            <label htmlFor="floatingLastName">Apellido</label>
                        </div>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingEmail" placeholder="correo@gmail.com"/>
                        <label htmlFor="floatingEmail">Correo electrónico</label>
                    </div>
                    <div className='row mb-3'>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">City</label>
                            <input type="text" className="form-control" id="inputCity"/>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputState" className="form-label">State</label>
                            <select id="inputState" className="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="inputZip" className="form-label">Zip</label>
                            <input type="text" className="form-control" id="inputZip"/>
                        </div>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Ej: Don José"/>
                        <label htmlFor="floatingInput">Usuario</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label htmlFor="floatingPassword">Contraseña</label>
                    </div>
                </form>
            </div>
        </div>
      </>
    )
}

export default CreateAccount
