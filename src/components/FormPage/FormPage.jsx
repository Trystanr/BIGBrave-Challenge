import React, { useState } from "react";
import { Formik, Form } from 'formik';

import DetailForm from './Forms/DetailForm';
import LifestyleForm from './Forms/LifestyleForm';

import validationSchema from './Model/validationSchema';
import FormModel from './Model/FormModel';
import formInitialValues from './Model/formInitialValues';

const steps = ['Personal Details', 'Lifestyle'];
const { formId, formField } = FormModel;

function _renderStepContent(step) {
	switch (step) {
	    case 0:
	      	return <DetailForm formField={formField} />;
	    case 1:
	      	return <LifestyleForm formField={formField} />;
	    case 2:
	      // return <ReviewOrder />;
	      	break;
	    default:
	      	return <div>Not Found</div>;
	}
}

export default function FormPage() {
	const [activeStep, setActiveStep] = useState(0);
	const isLastStep = activeStep === steps.length - 1;

	const currentValidationSchema = validationSchema[0];

	function _handleSubmit(values, actions) {
		console.log("Submit");
		setActiveStep(activeStep + 1);
	}

	function _handleBack() {
    	setActiveStep(activeStep - 1);
  	}

	return (
	    <React.Fragment>
	        <Formik
            	initialValues={formInitialValues}
            	validationSchema={currentValidationSchema}
            	onSubmit={_handleSubmit}
          	>
          		{({ isSubmitting }) => (
          			<Form id={formId}>
                		{_renderStepContent(activeStep)}

                		<div>
                			
                			{/*Prevent user from clicking back during first step */}
	                		{activeStep !== 0 && (
	                			<button onClick={_handleBack}>
	                				Back
	                			</button>
	                		)}

	                		<div>
								<button type="submit">
									{isLastStep ? "View Persona" : "Next"}
								</button>
	                		</div>
                			
                		</div>
              		</Form>
              	)}
          	</Formik>
	    </React.Fragment>
	);
}