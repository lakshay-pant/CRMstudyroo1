import {
	addStudentPending,
	addStudentSuccess,
	addStudentError,
	addStudentResetMessage,
} from './addStudentSlice';

import { createNewStudent } from '../../api/studentApi';

export const addStudent = (frmDt) => async (dispatch) => {
	try {
		dispatch(addStudentPending());

		const result = await createNewStudent(frmDt);
		result.status === 'success'
			? dispatch(addStudentSuccess(result.message)) &&
			  setTimeout(() => {
					dispatch(addStudentResetMessage());
			  }, 1000)
			: dispatch(addStudentError(result.message));

		console.log(result);
	} catch (error) {
		dispatch(addStudentError(error.message));
	}
};
