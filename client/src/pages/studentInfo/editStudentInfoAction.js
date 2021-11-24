import {
	editStudentInfoError,
	editStudentInfoPending,
	editStudentInfoSuccess,
} from './editStudentInfoSlice';

import { UpdateAllUserStudents } from '../../api/studentApi';

export const editStudentInfo = (frmDt, id) => async (dispatch) => {
	try {
		dispatch(editStudentInfoPending());

		const result = await UpdateAllUserStudents(frmDt, id);
		result.status === 'success'
			? dispatch(editStudentInfoSuccess(result.message))
			: dispatch(editStudentInfoError(result.message));

		console.log(result);
	} catch (error) {
		dispatch(editStudentInfoError(error.message));
	}
};
