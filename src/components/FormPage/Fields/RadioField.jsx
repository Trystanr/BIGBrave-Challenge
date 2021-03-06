import React from "react";
import { useField, Field } from "formik";

const RadioField = ({ label, ...props }) => {
	const [meta] = useField(props);
	return (
		<>
			<label>{label}</label>
			
			<div className="radio-group">
				{props.data.map((radioObject, i) => 
					<React.Fragment key={i+"d"}>
						<Field key={i+"r"} type="radio" name={props.name} value={radioObject.value} id={radioObject.value}/>
						<label key={i} className="radio" htmlFor={radioObject.value}>
							{radioObject.label}
						</label>
					</React.Fragment>
				)}
			</div>
			
			{meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</>
	);
};

export default RadioField;