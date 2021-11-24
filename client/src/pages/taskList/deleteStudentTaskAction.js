import {
	deleteStudentTaskError,
	deleteStudentTaskPending,
	deleteStudentTaskSuccess,
} from './deleteStudentTaskSlice';

import { DeleteAllUserStudentTask } from '../../api/studentApi';

export const deleteStudentTask = (id1, id2) => async (dispatch) => {
	try {
		dispatch(deleteStudentTaskPending());

		const result = await DeleteAllUserStudentTask(id1, id2);
		result.status === 'success'
			? dispatch(deleteStudentTaskSuccess(result.message))
			: dispatch(deleteStudentTaskError(result.message));

		console.log('student ka task', result);
	} catch (error) {
		dispatch(deleteStudentTaskError('hello', error.message));
	}
};
