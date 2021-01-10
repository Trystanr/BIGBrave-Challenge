import React from 'react';
import { useFormikContext } from 'formik';

import CharacterImage from './CharacterImage';


export default function CharacterPage() {
	const { values: formValues } = useFormikContext();

	const { 
		firstName,
	  	lastName,
	  	gender,
	  	dob,
	  	occupation,
		favouriteColour 
	} = formValues;
	return (
		<React.Fragment>
			<h2>Character</h2>

			<p>{`${firstName} ${lastName} is a ${gender} born on ${dob}, who works as a ${occupation} and their favourite colour is ${favouriteColour}`} </p>

			<CharacterImage values={formValues}/>
		</React.Fragment>
	);
}
