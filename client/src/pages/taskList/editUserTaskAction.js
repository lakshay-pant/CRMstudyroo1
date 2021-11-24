import {
	editUserStudentTaskPending,
	editUserStudentTaskError,
	editUserStudentTaskSuccess,
} from './editUserTaskSlice';

import { UpdateUserStudentTask } from '../../api/userApi';

export const editUserStudentTask = (frmDt, id1, id2) => async (dispatch) => {
	try {
		dispatch(editUserStudentTaskPending());

		const result = await UpdateUserStudentTask(frmDt, id1, id2);
		result.status === 'success'
			? dispatch(editUserStudentTaskSuccess(result.message))
			: dispatch(editUserStudentTaskError(result.message));

		console.log(result);
	} catch (error) {
		dispatch(editUserStudentTaskError(error.message));
	}
};
