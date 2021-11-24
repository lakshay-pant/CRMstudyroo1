import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoadingEditStudentTask: false,
	statusEditStudentTask: '',
	messageEditStudentTask: '',
};

const editStudentTaskSlice = createSlice({
	name: 'editStudentTask',
	initialState,
	reducers: {
		editStudentTaskPending: (state) => {
			state.isLoadingEditStudentTask = true;
		},
		editStudentTaskSuccess: (state, { payload }) => {
			state.isLoadingEditStudentTask = false;
			state.statusEditStudentTask = 'success';
			state.messageEditStudentTask = payload;
		},
		editStudentTaskError: (state, { payload }) => {
			state.isLoadingEditStudentTask = false;
			state.statusEditStudentTask = 'error';
			state.messageEditStudentTask = payload;
		},
		editStudentTaskResetSuccessMSg: (state) => {
			state.messageEditStudentTask = '';
		},
	},
});

const { reducer, actions } = editStudentTaskSlice;

export const {
	editStudentTaskPending,
	editStudentTaskSuccess,
	editStudentTaskError,
	editStudentTaskResetSuccessMSg,
} = actions;

export default reducer;
