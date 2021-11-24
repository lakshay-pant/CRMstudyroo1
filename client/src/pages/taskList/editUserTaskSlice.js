import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoadingEditUserStudentTask: false,
	statusEditUserStudentTask: '',
	messageEditUserStudentTask: '',
};

const editUserStudentTaskSlice = createSlice({
	name: 'editUserStudentTask',
	initialState,
	reducers: {
		editUserStudentTaskPending: (state) => {
			state.isLoadingEditUserStudentTask = true;
		},
		editUserStudentTaskSuccess: (state, { payload }) => {
			state.isLoadingEditUserStudentTask = false;
			state.statusEditUserStudentTask = 'success';
			state.messageEditUserStudentTask = payload;
		},
		editUserStudentTaskError: (state, { payload }) => {
			state.isLoadingEditUserStudentTask = false;
			state.statusEditUserStudentTask = 'error';
			state.messageEditUserStudentTask = payload;
		},
		editUserStudentTaskResetSuccessMSg: (state) => {
			state.messageEditUserStudentTask = '';
		},
	},
});

const { reducer, actions } = editUserStudentTaskSlice;

export const {
	editUserStudentTaskPending,
	editUserStudentTaskSuccess,
	editUserStudentTaskError,
	editUserStudentTaskResetSuccessMSg,
} = actions;

export default reducer;
