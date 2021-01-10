import * as Yup from 'yup';
import moment from 'moment';

import FormModel from './FormModel';

const {
	formField: {
		firstName,
		lastName,
		gender,
		dob,
		occupation,
		favouriteColour
	}
} = FormModel;

export default [
	Yup.object().shape({
		[firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
		[lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
		[gender.name]: Yup.string().required(`${gender.requiredErrorMsg}`),
		// Ensure that the date of birth entered isn't beyond today
		[dob.name]: Yup.string()
			.nullable()
			.required(`${dob.requiredErrorMsg}`)
			.test('dob', dob.invalidErrorMsg, val => {
				if (val) {
					const startDate = new Date(1900, 12, 31);
					const endDate = new Date();
					if (moment(val, moment.ISO_8601).isValid()) {
						return moment(val).isBetween(startDate, endDate);
					}
					return false;
				}
				return false;
			})
	}),
	Yup.object().shape({
		[occupation.name]: Yup.string().nullable().required(`${occupation.requiredErrorMsg}`),
		[favouriteColour.name]: Yup.string().nullable().required(`${favouriteColour.requiredErrorMsg}`)
	})
];