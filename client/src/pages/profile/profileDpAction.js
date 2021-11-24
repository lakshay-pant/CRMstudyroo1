import {
	addUserDpError,
	addUserDpPending,
	addUserDpSuccess,
	editResetSuccessMSg,
} from './profileDpSlice';

import { addUserDp } from '../../api/userApi';

export const addUserDpic = (frmDt) => async (dispatch) => {
	try {
		dispatch(addUserDpPending());

		const result = await addUserDp(frmDt);
		result.status === 'success'
			? dispatch(addUserDpSuccess(result.message))
			: dispatch(addUserDpError(result.message));

		console.log(result);
	} catch (error) {
		dispatch(addUserDpError(error.message));
	}
};
