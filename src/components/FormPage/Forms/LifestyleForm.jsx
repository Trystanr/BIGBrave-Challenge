import React, {useState} from 'react';

import { useField, Field } from "formik";

import TextField from "../Fields/TextField";
import ColorField from "../Fields/ColorField";
import SelectField from "../Fields/SelectField";

import { CirclePicker  } from 'react-color';


// This form captures users lifestyle properties
export default function LifestyleForm(props) {

	const [color, setColor] = useState(0);

	// Defines fields required in this step
	const {
		formField: {
			occupation,
			favouriteColour
		}
	} = props;

	function handleChangeComplete(newColor) {
    	// this.setState({ background: color.hex });
    	console.log(newColor.hex);
    	setColor(newColor.hex)
  	};

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

				{/*<TextField
					label={favouriteColour.label}
					name={favouriteColour.name}
					type="text"
					placeholder={favouriteColour.placeholder}
				/>*/}

				{/*<input value={color} name={favouriteColour.name} readOnly/>*/}
				{/*<Field type="text" name={favouriteColour.name} value={color} readOnly/>*/}
				<ColorField 
					label={favouriteColour.label}
					name={favouriteColour.name}
					type="text"
					placeholder={favouriteColour.placeholder}
				/>

				{/*<CirclePicker onChangeComplete={ handleChangeComplete }/>*/}
				
		</React.Fragment>
	);
}
