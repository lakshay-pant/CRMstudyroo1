import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	course: [],
	isLoadingShowcourse: false,
	error: '',
	searchCourseList: [],
};

const courseListSlice = createSlice({
	name: 'courseList',
	initialState,
	reducers: {
		fetchcourseLoading: (state) => {
			state.isLoadingShowcourse = true;
		},
		fetchcourseSuccess: (state, action) => {
			state.course = action.payload;
			state.isLoadingShowcourse = false;
		},
		fetchcourseFail: (state, { payload }) => {
			state.isLoadingShowcourse = false;
			state.error = payload;
		},
		searchcourse: (state, { payload }) => {
			state.searchcourseList = state.course.filter((row) => {
				if (!payload) return row;

				return row.firstName.toLowerCase().includes(payload.toLowerCase());
			});
		},
	},
});

const { reducer, actions } = courseListSlice;

export const {
	fetchcourseLoading,
	fetchcourseSuccess,
	fetchcourseFail,
	searchcourse,
} = actions;

export default reducer;
