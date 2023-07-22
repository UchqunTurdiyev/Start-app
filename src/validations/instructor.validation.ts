import * as Yup from 'yup';

export const InstructorValidation = {
	applyInstructorValue() {
		return {
			firstName: '',
			lastName: '',
			email: '',
			socialMedia: '',
		};
	},

	applyInstructorValidation() {
		return Yup.object({
			email: Yup.string().email('email_is_invalid').required('email_is_required'),
			firstName: Yup.string().required('First Name is required'),
			lastName: Yup.string().required('Last Name is required'),
			socialMedia: Yup.string().required('Social media link is required'),
		});
	},
};
