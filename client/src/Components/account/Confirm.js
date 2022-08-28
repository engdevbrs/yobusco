import React from 'react'
import Axios from 'axios'
import '../css/CreateUser.css';
import finalcheck from '../assets/final-check.png'
import { useStepperContext } from '../contexts/StepperContext';

const Confirm = () => {
  const { userData, setUserData } = useStepperContext();

  return (
    <>
    <div className="container mt-10">
      <div className="final">
        <div className="wrapper">
          <img src={finalcheck} alt="imagen de confirmación"/>
        </div>
        <div className="mt-3 congrats">
          Felicidades!
        </div>
        <div className="success-account mb-3">
          Tu cuenta ha sido creada con éxito.
        </div>
      </div>
    </div>
    </>
  )
}

export default Confirm