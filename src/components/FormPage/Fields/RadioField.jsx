import React from "react";
import { useField } from "formik";
// import * as Yup from 'yup';

const RadioField = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<label>{label}</label>
			
			
			{props.data.map((radioObject, i) => 
				<label key={i}>
					<input type="radio" value={radioObject.value} name={props.name} id={radioObject.label} {...field}/>
					{radioObject.label}
				</label>
			)}
			
			{meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</>
	);
};

export default RadioField;