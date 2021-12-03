import {
	fetchcourseLoading,
	fetchcourseSuccess,
	fetchcourseFail,
	searchcourse,
} from './getProvidersSlice';

import { getAllCourses } from '../../api/courseApi';

export const fetchAllCourses = () => async (dispatch) => {
	dispatch(fetchcourseLoading());
	try {
		const result = await getAllCourses();

		dispatch(fetchcourseSuccess(result.data.result));
	} catch (error) {
		dispatch(fetchcourseFail(error.message));
	}
};

export const filterSerachCourse = (str) => (dispatch) => {
	dispatch(searchcourse(str));
};
