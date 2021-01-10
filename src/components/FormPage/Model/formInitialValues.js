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

export default {
	[firstName.name]: '',
	[lastName.name]: '',
	[gender.name]: '',
	[dob.name]: '',
	[occupation.name]: '',
	[favouriteColour.name]: ''
};
