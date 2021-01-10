import React from 'react';
import { useFormikContext } from 'formik';

import CharacterImage from './CharacterImage';


export default function CharacterPage() {
	const { values: formValues } = useFormikContext();

	return (
		<React.Fragment>
		<CharacterImage values={formValues}/>
			

			
		</React.Fragment>
	);
}
