import React from "react";
import { useField } from "formik";

import { CirclePicker  } from 'react-color';

const ColorField = ({ label, ...props }) => {

	function handleChangeComplete(newColor) {
		setValue(newColor.hex);
	};

	const [meta, helpers] = useField(props.name);

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