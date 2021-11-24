import {
	registrationPending,
	registrationSuccess,
	registrationError,
} from './signupSlice';

import { userSignUp } from '../../api/userApi';

export const newUserRegistration = (frmDt) => async (dispatch) => {
	try {
		dispatch(registrationPending());

		const result = await userSignUp(frmDt);

		result.status === 'success'
			? dispatch(registrationSuccess(result.message))
			: dispatch(registrationError(result.message));

		console.log(result);
	} catch (error) {
		dispatch(registrationError(error.message));
	}
};
