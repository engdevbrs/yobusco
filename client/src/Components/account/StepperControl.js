import React from "react";

const StepperControl = ({ handleClick, currentStep, steps}) =>{

  let handleEvent;

  const handleButton = (e) =>{
    handleEvent = new CustomEvent('handleEvent',{ detail: false,bubbles: false, cancelable: true});
    document.dispatchEvent(handleEvent);
  };

  return (
    <div className="container mt-4 mb-4 d-flex justify-content-between">
      <button
        onClick={() => handleClick()}
        className={`btn btn-outline-secondary ${
          currentStep === 0 ? " cursor-not-allowed opacity-50 " : ""
        }`}>
        Atrás
      </button>
      <button
        id="nextButton"
        onClick={(e) => {handleButton(e); handleClick(currentStep === steps.length -1 ? "Iniciar sesión" : 
        handleEvent.defaultPrevented === true ? "stop" : "next" )}}
        className="btn btn-primary">
        {currentStep === steps.length - 1 ? "Iniciar sesión" : "Siguiente"}
      </button>
    </div>
  );
}

export default StepperControl