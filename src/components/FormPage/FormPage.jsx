import React, { useState } from "react";
import { Formik, Form } from 'formik';

import validationSchema from './Model/validationSchema';
import checkoutFormModel from './Model/checkoutFormModel';
import formInitialValues from './Model/formInitialValues';

const { formId, formField } = checkoutFormModel;

export default function FormPage() {

	const currentValidationSchema = validationSchema[0];

	function _handleSubmit(values, actions) {
		console.log("Submit")
	}

	return (
	    <React.Fragment>
	        <Formik
            	initialValues={formInitialValues}
            	validationSchema={currentValidationSchema}
            	onSubmit={_handleSubmit}
          	>
          	</Formik>
	    </React.Fragment>
	);
}