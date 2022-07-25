import React, { Component } from 'react';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import PersonalInformation from './Personalnformation';
import WorkProfile from './WorkProfile';
import CreateNewUser from './CreateUser';
import TermsConditions from './TermsAndConditions';



// setup the step content
const step1Content = <PersonalInformation />;
const step2Content = <WorkProfile/>;
const step3Content = <CreateNewUser />;
const step4Content = <TermsConditions />;

// setup step validators, will be called before proceeding to the next step
function step2Validator() {
    return true;
}
   
function step3Validator() {
  return true;
}

function step4Validator() {
  return true;
}

const CreateAccount = () => {
    return (
      <>
        <StepProgressBar
        startingStep={0}
        steps={[
            {
            label: 'Información personal',
            name: 'step 1',
            content: step1Content
            },
            {
            label: 'Perfil laboral',
            name: 'step 2',
            content: step2Content,
            validator: step2Validator
            },
            {
            label: 'Crear usuario',
            name: 'step 3',
            content: step3Content,
            validator: step3Validator
            },
            {
            label: 'Finalizar',
            name: 'step 4',
            content: step4Content,
            validator: step4Validator
            }
        ]}
        previousBtnName = 'Atrás'
        nextBtnName = 'Siguiente'
        submitBtnName = 'Finalizar registro'
        />
      </>
    )
}

export default CreateAccount