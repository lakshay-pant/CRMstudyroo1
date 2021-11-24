import {
	editUserError,
	editUserPending,
	editUserSuccess,
	editResetSuccessMSg,
} from './profileeditSlice';

import { UpdateAllUser } from '../../api/userApi';

export const editUser = (frmDt) => async (dispatch) => {
	try {
		dispatch(editUserPending());

		const result = await UpdateAllUser(frmDt);
		result.status === 'success'
			? dispatch(editUserSuccess(result.message)) &&
			  setTimeout(() => {
					dispatch(editResetSuccessMSg());
			  }, 2000)
			: dispatch(editUserError(result.message));

		console.log(result);
	} catch (error) {
		dispatch(editUserError(error.message));
	}
};
