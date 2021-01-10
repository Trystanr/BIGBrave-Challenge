import React, {useState} from 'react';

import { useField, Field } from "formik";

import TextField from "../Fields/TextField";
import ColorField from "../Fields/ColorField";
import SelectField from "../Fields/SelectField";

import { CirclePicker  } from 'react-color';


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
			<h4>2. Lifestyle Details</h4>

				<SelectField
					label={occupation.label}
					name={occupation.name}
				>
					<option value="">Select your occupation</option>
					<option value="chef">Chef</option>
					<option value="yoga instructor">Yoga instructor</option>
					<option value="developer">Developer</option>
					<option value="social media influencer">Social Media Influencer</option>
				</SelectField>

				<ColorField 
					label={favouriteColour.label}
					name={favouriteColour.name}
					type="text"
					placeholder={favouriteColour.placeholder}
				/>
				
		</React.Fragment>
	);
}
