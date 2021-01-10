export default {
	formId: 'checkoutForm',
	formField: {
		firstName: {
			name: 'firstName',
			label: 'First name*',
			placeholder: 'Jane',
			requiredErrorMsg: 'First name is required'
		},
		lastName: {
			name: 'lastName',
			label: 'Last name*',
			placeholder: 'Doe',
			requiredErrorMsg: 'Last name is required'
		},
		gender: {
			name: 'gender',
			label: 'Gender*',
			requiredErrorMsg: 'Gender is required'
		},
		dob: {
			name: 'dob',
			label: 'Date of birth*',
			placeholder: '00/00/00',
			requiredErrorMsg: 'Date of birth is required',
			invalidErrorMsg: 'Date of birth is not valid'
		},
		occupation: {
			name: 'occupation',
			label: 'Occupation*',
			requiredErrorMsg: 'Occupation is required',
			invalidErrorMsg: 'Occupation is not valid'
		},
		favouriteColour: {
			name: 'favouriteColour',
			label: 'Favourite Colour*',
			placeholder: '#0e1564',
			requiredErrorMsg: 'Favourite Colour is required',
			invalidErrorMsg: 'Favourite Colour is not valid'
		}
	}
};
