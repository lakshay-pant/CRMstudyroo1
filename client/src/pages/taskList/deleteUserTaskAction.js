import {
	deleteUserStudentTaskError,
	deleteUserStudentTaskPending,
	deleteUserStudentTaskSuccess,
} from './deleteUserTaskSlice';

import { DeleteUserStudentTask } from '../../api/userApi';

export const deleteUserStudentTask = (id1, id2) => async (dispatch) => {
	try {
		dispatch(deleteUserStudentTaskPending());

		const result = await DeleteUserStudentTask(id1, id2);
		result.status === 'success'
			? dispatch(deleteUserStudentTaskSuccess(result.message))
			: dispatch(deleteUserStudentTaskError(result.message));

		console.log(result);
	} catch (error) {
		dispatch(deleteUserStudentTaskError('hello', error.message));
	}
};
