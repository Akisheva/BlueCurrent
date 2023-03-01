import * as yup from 'yup';

export const validationSchema = yup.object().shape({
	firstName: yup
		.string()
		.required('Name is required'),

    lastName: yup
		.string()
		.required('Last name is required'),
    address: yup
		.string()
		.required('Address is required'),
	city: yup
		.string()
		.required('City is required'),
	postcode: yup
		.string()
		.required('Postcode is required'),	
	email: yup
		.string()
		.email('Invalid email')
		.required('Email is required'),
	phone: yup
		.number('Invalid phone number')
		.required('Phone is required'),
	
});