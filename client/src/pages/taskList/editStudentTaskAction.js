import {
	editStudentTaskPending,
	editStudentTaskError,
	editStudentTaskSuccess,
} from './editStudentTaskSlice';

import { UpdateStudentTask } from '../../api/studentApi';

export const editStudentTask = (frmDt, id1, id2) => async (dispatch) => {
	try {
		dispatch(editStudentTaskPending());

		const result = await UpdateStudentTask(frmDt, id1, id2);
		result.status === 'success'
			? dispatch(editStudentTaskSuccess(result.message))
			: dispatch(editStudentTaskError(result.message));

		console.log(result);
	} catch (error) {
		dispatch(editStudentTaskError(error.message));
	}
};
