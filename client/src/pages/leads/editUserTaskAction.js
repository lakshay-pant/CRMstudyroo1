import {
	editUserLeadTaskPending,
	editUserLeadTaskError,
	editUserLeadTaskSuccess,
} from './editUserTaskSlice';

import { UpdateUserLeadTask } from '../../api/userApi';

export const editUserLeadTask = (frmDt, id1, id2) => async (dispatch) => {
	try {
		dispatch(editUserLeadTaskPending());

		const result = await UpdateUserLeadTask(frmDt, id1, id2);
		result.status === 'success'
			? dispatch(editUserLeadTaskSuccess(result.message))
			: dispatch(editUserLeadTaskError(result.message));

		console.log(result);
	} catch (error) {
		dispatch(editUserLeadTaskError(error.message));
	}
};
