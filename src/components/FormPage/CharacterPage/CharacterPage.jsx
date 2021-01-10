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
		<CharacterImage values={formValues}/>
			

			
		</React.Fragment>
	);
}
