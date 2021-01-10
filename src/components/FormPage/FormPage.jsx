import React, { useState } from "react";
import { Formik, Form } from 'formik';

import DetailForm from './Forms/DetailForm';

import validationSchema from './Model/validationSchema';
import checkoutFormModel from './Model/checkoutFormModel';
import formInitialValues from './Model/formInitialValues';

const steps = ['Personal Details', 'Lifestyle', 'Your Persona'];
const { formId, formField } = checkoutFormModel;

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <DetailForm formField={formField} />;
      // return <h1>Hello Lads</h1>;
    case 1:
      // return <PaymentForm formField={formField} />;
    case 2:
      // return <ReviewOrder />;
    default:
      return <div>Not Found</div>;
  }
}

export default function FormPage() {
	const [activeStep, setActiveStep] = useState(0);
	const isLastStep = activeStep === steps.length - 1;

	const currentValidationSchema = validationSchema[0];

	function _handleSubmit(values, actions) {
		console.log("Submit")
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
          		<Form id={formId}>
                	{_renderStepContent(activeStep)}
              	</Form>
          	</Formik>
	    </React.Fragment>
	);
}