import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoadingDeleteUserStudentTask: false,
	statusDeleteUserStudentTask: '',
	messageDeleteUserStudentTask: '',
};

const deleteUserStudentTaskSlice = createSlice({
	name: 'deleteUserStudentTask',
	initialState,
	reducers: {
		deleteUserStudentTaskPending: (state) => {
			state.isLoadingDeleteUserStudentTask = true;
		},
		deleteUserStudentTaskSuccess: (state, { payload }) => {
			state.isLoadingDeleteUserStudentTask = false;
			state.statusDeleteUserStudentTask = 'success';
			state.messageDeleteUserStudentTask = payload;
		},
		deleteUserStudentTaskError: (state, { payload }) => {
			state.isLoadingDeleteUserStudentTask = false;
			state.statusDeleteUserStudentTask = 'error';
			state.messageDeleteUserStudentTask = payload;
		},
		deleteUserTaskResetSuccessMSg: (state) => {
			state.isLoadingDeleteUserStudentTask = true;
			state.messageDeleteUserStudentTask = '';
		},
	},
});

const { reducer, actions } = deleteUserStudentTaskSlice;

export const {
	deleteUserStudentTaskPending,
	deleteUserStudentTaskSuccess,
	deleteUserStudentTaskError,
	deleteUserTaskResetSuccessMSg,
} = actions;

export default reducer;
