import React, {useState} from "react";
import { useField, Formik } from "formik";

import { CirclePicker  } from 'react-color';

const ColorField = ({ label, ...props }) => {

	function handleChangeComplete(newColor) {
		setValue(newColor.hex);
	};

	const [field, meta, helpers] = useField(props.name);

	const { value } = meta;
	 const { setValue } = helpers;
	

	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<CirclePicker onChangeComplete={ handleChangeComplete }/>
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</>
	);
};

export default ColorField;