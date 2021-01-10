import React from 'react';

import TextField from "../Fields/TextField";
import DatePickerField from "../Fields/DatePickerField";
import SelectField from "../Fields/SelectField";

// This form captures users details
export default function DetailForm(props) {
	// Defines fields required in this step
	const {
		formField: {
			firstName,
			lastName,
			gender,
			dob
		}
	} = props;

	return (
		<React.Fragment>
			<h4>1. Personal Details</h4>
				<TextField
					label={firstName.label}
					name={firstName.name}
					type="text"
					placeholder={firstName.placeholder}
				/>
				<TextField
					label={lastName.label}
					name={lastName.name}
					type="text"
					placeholder={lastName.placeholder}
				/>
				<DatePickerField
					label={dob.label}
					name={dob.name}
					placeholder={dob.placeholder}
				/>
				<SelectField
					label={gender.label}
					name={gender.name}
				>
					<option value="">Select a job type</option>
					<option value="designer">Designer</option>
					<option value="development">Developer</option>
					<option value="product">Product Manager</option>
					<option value="other">Other</option>
				</SelectField>
		</React.Fragment>
	);
}
