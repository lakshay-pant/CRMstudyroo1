import {
	addAdminUserError,
	addAdminUserPending,
	addAdminUserResetMessage,
	addAdminUserSuccess,
} from './addAdminUserSlice';

import { addUserByAdmin } from '../../api/userApi';

export const addUserAdmin = (frmDt) => async (dispatch) => {
	try {
		dispatch(addAdminUserPending());

		const result = await addUserByAdmin(frmDt);
		result.status === 'success'
			? dispatch(addAdminUserSuccess(result.message)) &&
			  setTimeout(() => {
					dispatch(addAdminUserResetMessage());
			  }, 1000)
			: dispatch(addAdminUserError(result.message));

		console.log(result);
	} catch (error) {
		dispatch(addAdminUserError(error.message));
	}
};
