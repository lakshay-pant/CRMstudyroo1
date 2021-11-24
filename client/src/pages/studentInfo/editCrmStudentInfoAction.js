import {
	editStudentInfoError,
	editStudentInfoPending,
	editCrmStudentInfoSuccess,
} from './editStudentInfoSlice';

import { UpdateAllUserStudents } from '../../api/studentApi';

export const editCrmStudentInfo = (frmDt, id) => async (dispatch) => {
	try {
		dispatch(editStudentInfoPending());

		const result = await UpdateAllUserStudents(frmDt, id);
		result.status === 'success'
			? dispatch(editCrmStudentInfoSuccess(result.message))
			: dispatch(editStudentInfoError(result.message));

		console.log(result);
	} catch (error) {
		dispatch(editStudentInfoError(error.message));
	}
};
