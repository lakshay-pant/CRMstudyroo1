import {
	deleteLeadTaskError,
	deleteLeadTaskPending,
	deleteLeadTaskSuccess,
} from './deleteLeadTaskSlice';

import { DeleteAllUserLeadsTask } from '../../api/leadApi';
import { deleteTaskResetSuccessMSg } from './deleteLeadTaskSlice';

export const deleteLeadTask = (id1, id2) => async (dispatch) => {
	try {
		dispatch(deleteLeadTaskPending());

		const result = await DeleteAllUserLeadsTask(id1, id2);
		result.status === 'success'
			? dispatch(deleteLeadTaskSuccess(result.message)) &&
			  setTimeout(() => {
					dispatch(deleteTaskResetSuccessMSg());
			  }, 5000)
			: dispatch(deleteLeadTaskError(result.message)) &&
			  setTimeout(() => {
					dispatch(deleteTaskResetSuccessMSg());
			  }, 5000);

		console.log(result);
	} catch (error) {
		dispatch(deleteLeadTaskError(error.message)) &&
			setTimeout(() => {
				dispatch(deleteTaskResetSuccessMSg());
			}, 5000);
	}
};
