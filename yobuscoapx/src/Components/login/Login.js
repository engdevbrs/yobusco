import React, { Component } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Login.css';
import LoginPic from '../assets/login-pic.jpg';

const Login = () =>  {
    const{useState}=React;

const[inputs,setinputs]=useState({
email:"",
password:""
});

const[warnemail,setwarnemail]=useState(false);
const[warnpass,setwarnpass]=useState(false);
const[danger,setdanger]=useState(true);

const[eye,seteye]=useState(true);
const[pass,setpass]=useState("password");


const inputEvent=(event)=>{
const name=event.target.name;
const value=event.target.value;
if(name=="email"){
if(value.length>0){
setdanger(true);
}
}
setinputs((lastValue)=>{
return{
...lastValue,
[name]:value
}
});
};

const submitForm=(e)=>{
e.preventDefault();
setwarnemail(false);
setwarnpass(false);
if(inputs.email.length<1){ setdanger(false); } if(inputs.email=="" ){ setwarnemail(true); } else if(inputs.password=="" ){ setwarnpass(true); } else{ alert("Logged in Successfully"); } }; const Eye=()=>{
    if(pass=="password"){
    setpass("text");
    seteye(false);
    }else{
    setpass("password");
    seteye(true);
    }
    }; 

    return(
    <>
        <div className="loginContainer mt-5 mb-5">
            <Card>
                <div className='form'>
                    <Col className="left-side">
                        <img src={LoginPic}/>
                    </Col>
                    <Col className="right-side">
                        <div className="register">
                            <p>No eres miembro? <a href="/crear-cuenta">Registrate ahora</a></p>
                        </div>
                        <div className="hello">
                            <h2>Hola otra vez!</h2>
                            <h4>Bienvenido de vuelta, te hemos extrañado! </h4>
                        </div>
                        <Form onSubmit={submitForm}>
                            <div className="input_text">
                                <input className={` ${warnemail ? "warning" : "" }`} type="text" placeholder="Ingresa tu email" name="email" value={inputs.email} onChange={inputEvent} />
                                <p className={` ${danger ? "danger" : "" }`}><i className="fa fa-warning"></i>Por favor, ingrese su correo electrónico</p>
                            </div>
                            <div className="input_text">
                                <input className={` ${warnpass ? "warning" : "" }`} type={pass} placeholder="Igresa tu contraseña" name="password" value={inputs.password} onChange={inputEvent} />
                                <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye" }`}></i>
                            </div>
                            <div className="recovery mt-2">
                                <p><a href="/crear-cuenta">Recuperar contraseña</a></p>
                            </div>
                            <div className="btnLogin d-grid gap-2">
                            <Button size="lg">
                                Iniciar sesión
                            </Button>
                            </div>
                        </Form>
                        <hr />
                        <div className="or">
                            <p>o inicia con</p>
                        </div>
                        <div className="boxes">
                            <span><img src="https://imgur.com/XnY9cKl.png" /></span>
                            <span><img src="https://imgur.com/ODlSChL.png" /></span>
                            <span><img src="https://imgur.com/mPBRdQt.png" /></span>
                        </div>
                    </Col>
                </div>
            </Card>
        </div>
    </>
    );
}

export default Login