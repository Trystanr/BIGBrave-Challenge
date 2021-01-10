import React from 'react';

import TextField from "../Fields/TextField";
import DatePickerField from "../Fields/DatePickerField";
import RadioField from "../Fields/RadioField";

const genders = [
	{
	  value: 'male',
	  label: 'Male'
	},
	{
	  value: 'female',
	  label: 'Female'
	},
	{
	  value: 'other',
	  label: 'Other'
	}
]

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
				<RadioField
					label={gender.label}
					name={gender.name}
					data={genders}
				/>
		</React.Fragment>
	);
}
