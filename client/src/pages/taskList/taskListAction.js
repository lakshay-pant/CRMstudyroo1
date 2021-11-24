import {
	editTaskError,
	editTaskPending,
	editTaskSuccess,
	editResetSuccessMSg,
} from './taskListSlice';

import { UpdateAllTask } from '../../api/taskApi';

export const editTask = (frmDt, id) => async (dispatch) => {
	console.log('editTask===========', editTask);
	try {
		dispatch(editTaskPending());

		const result = await UpdateAllTask(frmDt, id);
		result.status === 'success'
			? dispatch(editTaskSuccess(result.message)) &&
			  setTimeout(() => {
					dispatch(editResetSuccessMSg());
			  }, 2000)
			: dispatch(editTaskError(result.message));

		console.log(result);
	} catch (error) {
		dispatch(editTaskError(error.message));
	}
};
