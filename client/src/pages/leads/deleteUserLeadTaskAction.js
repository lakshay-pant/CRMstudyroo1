import {
	deleteUserLeadTaskError,
	deleteUserLeadTaskPending,
	deleteUserLeadTaskSuccess,
} from './deleteUserLeadTaskSlice';

import { DeleteUserLeadsTask } from '../../api/userApi';

export const deleteUserLeadTask = (id1, id2) => async (dispatch) => {
	try {
		dispatch(deleteUserLeadTaskPending());

		const result = await DeleteUserLeadsTask(id1, id2);
		result.status === 'success'
			? dispatch(deleteUserLeadTaskSuccess(result.message))
			: dispatch(deleteUserLeadTaskError(result.message));

		console.log(result);
	} catch (error) {
		dispatch(deleteUserLeadTaskError(error.message));
	}
};
