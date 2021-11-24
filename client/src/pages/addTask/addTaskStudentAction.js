import {
	studentTaskError,
	studentTaskPending,
	studentTaskSuccess,
} from './addTaskStudentSlice';

import { addStudentTask } from '../../api/studentApi';

export const studentTask = (frmDt, id) => async (dispatch) => {
	try {
		dispatch(studentTaskPending());

		const result = await addStudentTask(frmDt, id);

		result.status === 'success'
			? dispatch(studentTaskSuccess(result.message))
			: dispatch(studentTaskError(result.message));

		console.log('merkost', result);
	} catch (error) {
		dispatch(studentTaskError(error.message));
	}
};
