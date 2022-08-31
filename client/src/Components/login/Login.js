import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Login.css';
import LoginPic from '../assets/login-pic.jpg';
import Axios  from 'axios';

const Login = () =>  {



    const[ warnemail, setwarnemail]=useState(false);
    const[ warnpass, setwarnpass]=useState(false);
    const[ danger, setdanger]=useState(true);

    const[ eye, seteye]=useState(true);
    const[ userPass, setPass]=useState("password");
    const[ userName,setUserName ]=useState("");

    const submitForm = (e) =>{
        e.preventDefault();
        Axios.post("http://localhost:3001/api/login", {userName,userPass})
          .then((result) => {
              if(result.status === 200){
                  sessionStorage.setItem("accessToken", result.data.accessToken);
              }
          }).catch(error => {
              console.log(error.response);
          });
    }; 

    return(
    <>
        <div className="loginContainer mt-5 mb-5">
            <Card>
                <div className='form'>
                    <Col className="left-side">
                        <img src={LoginPic} alt="login pic" />
                    </Col>
                    <Col className="right-side">
                        <div className="register">
                            <p>No eres miembro? <a href="/crear-cuenta">Registrate ahora</a></p>
                        </div>
                        <div className="hello">
                            <h2>Hola otra vez!</h2>
                            <h4>Bienvenido de vuelta, te hemos extrañado! </h4>
                        </div>
                        <Form onSubmit={(e) => submitForm(e)}>
                            <div className="input_text">
                                <input className={` ${warnemail ? "warning" : "" }`} type="text" placeholder="Ingresa tu email" name="email" onChange={(e) => setUserName(e.target.value)} />
                                <p className={` ${danger ? "danger" : "" }`}><i className="fa fa-warning"></i>Por favor, ingrese su correo electrónico</p>
                            </div>
                            <div className="input_text">
                                <input className={` ${warnpass ? "warning" : "" }`} type={eye !== false ? 'password' : 'text'} placeholder="Igresa tu contraseña" name="password" onChange={(e) => setPass(e.target.value)} />
                                <i onClick={() => seteye(!eye)} className={`fa ${eye ? "fa-eye-slash" : "fa-eye" }`}></i>
                            </div>
                            <div className="recovery mt-2">
                                <p><a href="/crear-cuenta">Recuperar contraseña</a></p>
                            </div>
                            <div className="btnLogin d-grid gap-2">
                            <Button size="lg" type='submit'>
                                Iniciar sesión
                            </Button>
                            </div>
                        </Form>
                        <hr />
                        <div className="or">
                            <p>o inicia con</p>
                        </div>
                        <div className="boxes">
                            <span><img src="https://imgur.com/XnY9cKl.png" alt='box1'/></span>
                            <span><img src="https://imgur.com/ODlSChL.png" alt='box2'/></span>
                            <span><img src="https://imgur.com/mPBRdQt.png" alt='box3'/></span>
                        </div>
                    </Col>
                </div>
            </Card>
        </div>
    </>
    );
}

export default Login