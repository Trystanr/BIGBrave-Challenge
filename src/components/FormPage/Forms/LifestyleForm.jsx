import React from 'react';

import TextField from "../Fields/TextField";
import DatePickerField from "../Fields/DatePickerField";
import SelectField from "../Fields/SelectField";

// This form captures users lifestyle properties
export default function LifestyleForm(props) {

	// Defines fields required in this step
	const {
		formField: {
			occupation,
			favouriteColour
		}
	} = props;

	return (
		<React.Fragment>
			<h4>1. Personal Details</h4>

				<SelectField
					label={occupation.label}
					name={occupation.name}
				>
					<option value="">Select a job type</option>
					<option value="designer">Designer</option>
					<option value="development">Developer</option>
					<option value="product">Product Manager</option>
					<option value="other">Other</option>
				</SelectField>

				<TextField
					label={favouriteColour.label}
					name={favouriteColour.name}
					type="text"
					placeholder={favouriteColour.placeholder}
				/>
				
		</React.Fragment>
	);
}
