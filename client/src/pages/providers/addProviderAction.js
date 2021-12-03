import {
	addCourseError,
	addCoursePending,
	addCourseResetMessage,
	addCourseSuccess,
} from './addProviderSlice';

import { createNewCourse } from '../../api/courseApi';

export const addCourse = (frmDt) => async (dispatch) => {
	try {
		dispatch(addCoursePending());

		const result = await createNewCourse(frmDt);
		result.status === 'success'
			? dispatch(addCourseSuccess(result.message)) &&
			  setTimeout(() => {
					dispatch(addCourseResetMessage());
			  }, 1000)
			: dispatch(addCourseError(result.message));

		console.log(result);
	} catch (error) {
		dispatch(addCourseError(error.message));
	}
};
