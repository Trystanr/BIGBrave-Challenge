import React from 'react';

import TextField from "../Fields/TextField";
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
			<h4>2. Lifestyle Details</h4>

				<SelectField
					label={occupation.label}
					name={occupation.name}
				>
					<option value="">Select your occupation</option>
					<option value="chef">Chef</option>
					<option value="yoga">Yoga instructor</option>
					<option value="developer">Developer</option>
					<option value="social-media">Social Media Influencer</option>
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
