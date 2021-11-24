import {
	fetchSingleStudentLoading,
	fetchSingleStudentSuccess,
	fetchSingleStudentFail,
} from './studentOverviewClickStudSlice';

import { getAllUserSingleStudent } from '../../api/studentApi';

export const fetchSingleStudent = (id) => async (dispatch) => {
	dispatch(fetchSingleStudentLoading());
	try {
		const result = await getAllUserSingleStudent(id);
		console.log('hey', result);
		result.data.result &&
			dispatch(fetchSingleStudentSuccess(result.data.result));
	} catch (error) {
		dispatch(fetchSingleStudentFail(error.message));
	}
};
