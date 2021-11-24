import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoadingUserStudentTask: false,
	statusUserStudentTask: '',
	messageUserStudentTask: '',
};

const userStudentTaskSlice = createSlice({
	name: 'userStudentTask',
	initialState,
	reducers: {
		userStudentTaskPending: (state) => {
			state.isLoadingUserStudentTask = true;
		},
		userStudentTaskSuccess: (state, { payload }) => {
			state.isLoadingUserStudentTask = false;
			state.statusUserStudentTask = 'success';
			state.messageUserStudentTask = payload;
		},
		userStudentTaskError: (state, { payload }) => {
			state.isLoadingUserStudentTask = false;
			state.statusUserStudentTask = 'error';
			state.messageUserStudentTask = payload;
		},
	},
});

const { reducer, actions } = userStudentTaskSlice;

export const {
	userStudentTaskPending,
	userStudentTaskSuccess,
	userStudentTaskError,
} = actions;

export default reducer;
