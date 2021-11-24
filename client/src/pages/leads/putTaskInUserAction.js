import {
	userLeadTaskError,
	userLeadTaskPending,
	userLeadTaskSuccess,
} from './putTaskInUserSlice';

import { addUserLeadTask } from '../../api/userApi';

export const userLeadTask = (frmDt, id) => async (dispatch) => {
	try {
		dispatch(userLeadTaskPending());

		const result = await addUserLeadTask(frmDt, id);
		console.log('nnn', result);
		result.status === 'success'
			? dispatch(userLeadTaskSuccess(result.message))
			: dispatch(userLeadTaskError(result.message));
	} catch (error) {
		dispatch(userLeadTaskError(error.message));
	}
};
