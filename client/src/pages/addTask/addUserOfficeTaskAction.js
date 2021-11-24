import {
	userOfficeStudentTaskError,
	userOfficeStudentTaskPending,
	userOfficeStudentTaskSuccess,
} from './addUserOfficeTaskSlice';

import { addUserStudentOfficeTask } from '../../api/userApi';

export const userOfficeStudentTask = (frmDt) => async (dispatch) => {
	try {
		console.log('hiiiiiiii');
		dispatch(userOfficeStudentTaskPending());
		console.log('hiiiiiiii');
		const result = await addUserStudentOfficeTask(frmDt);

		result.status === 'success'
			? dispatch(userOfficeStudentTaskSuccess(result.message))
			: dispatch(userOfficeStudentTaskError(result.message));
		console.log('merko', result);
	} catch (error) {
		dispatch(userOfficeStudentTaskError(error.message));
	}
};
