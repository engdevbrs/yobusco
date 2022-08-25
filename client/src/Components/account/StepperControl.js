import React from "react";

const StepperControl = ({ handleClick, currentStep, steps}) =>{
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
          onClick={() => handleClick(currentStep === steps.length -1 ? "confirmar" : "next")}
          className="btn btn-primary">
          {currentStep === steps.length - 1 ? "Confirmar" : "Siguiente"}
        </button>
      </div>
    );
  }

  export default StepperControl