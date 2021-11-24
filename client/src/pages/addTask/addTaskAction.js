import {
	addTaskPending,
	addTaskSuccess,
	addTaskError,
	addStudentTaskResetMessage,
} from './addTaskSlice';

import { createNewTask } from '../../api/taskApi';

export const addTask = (frmDt) => async (dispatch) => {
	try {
		dispatch(addTaskPending());

		const result = await createNewTask(frmDt);
		result.status === 'success'
			? dispatch(addTaskSuccess(result.message)) &&
			  setTimeout(() => {
					dispatch(addStudentTaskResetMessage());
			  }, 3000)
			: dispatch(addTaskError(result.message));

		console.log('main idhar hun ', result);
	} catch (error) {
		dispatch(addTaskError('error ain tera hero', error.message));
	}
};
