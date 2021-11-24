import {
	deleteTaskError,
	deleteTaskPending,
	deleteTaskSuccess,
	deleteResetSuccessMSg,
} from './deleteTaskSlice';

import { DeleteAllUserLeads } from '../../api/leadApi';

export const deleteTask = (id) => async (dispatch) => {
	try {
		dispatch(deleteTaskPending());

		const result = await DeleteAllUserLeads(id);
		result.status === 'success'
			? dispatch(deleteTaskSuccess(result.message)) &&
			  setTimeout(() => {
					dispatch(deleteResetSuccessMSg());
			  }, 2000)
			: dispatch(deleteTaskError(result.message)) &&
			  setTimeout(() => {
					dispatch(deleteResetSuccessMSg());
			  }, 2000);

		console.log(result);
	} catch (error) {
		dispatch(deleteTaskError(error.message)) &&
			setTimeout(() => {
				dispatch(deleteResetSuccessMSg());
			}, 2000);
	}
};
