import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoading: false,
	status: '',
	message: '',
};

const addCourseSlice = createSlice({
	name: 'addCourse',
	initialState,
	reducers: {
		addCoursePending: (state) => {
			state.isLoading = true;
		},
		addCourseSuccess: (state, { payload }) => {
			state.isLoading = false;
			state.status = 'success';
			state.message = payload;
		},
		addCourseError: (state, { payload }) => {
			state.isLoading = false;
			state.status = 'error';
			state.message = payload;
		},
		addCourseResetMessage: (state) => {
			state.message = '';
		},
	},
});

const { reducer, actions } = addCourseSlice;

export const {
	addCoursePending,
	addCourseSuccess,
	addCourseError,
	addCourseResetMessage,
} = actions;

export default reducer;
