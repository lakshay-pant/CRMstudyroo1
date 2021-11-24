import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoadingUserOfficeStudentTask: false,
	statusUserOfficeStudentTask: '',
	messageUserOfficeStudentTask: '',
};

const userOfficeStudentTaskSlice = createSlice({
	name: 'userStudentTask',
	initialState,
	reducers: {
		userOfficeStudentTaskPending: (state) => {
			state.isLoadingUserOfficeStudentTask = true;
		},
		userOfficeStudentTaskSuccess: (state, { payload }) => {
			state.isLoadingUserOfficeStudentTask = false;
			state.statusUserOfficeStudentTask = 'success';
			state.messageUserOfficeStudentTask = payload;
		},
		userOfficeStudentTaskError: (state, { payload }) => {
			state.isLoadingUserOfficeStudentTask = false;
			state.statusUserOfficeStudentTask = 'error';
			state.messageUserOfficeStudentTask = payload;
		},
	},
});

const { reducer, actions } = userOfficeStudentTaskSlice;

export const {
	userOfficeStudentTaskPending,
	userOfficeStudentTaskSuccess,
	userOfficeStudentTaskError,
} = actions;

export default reducer;
