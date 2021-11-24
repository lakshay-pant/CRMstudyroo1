import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoadingDeleteStudentTask: false,
	statusDeleteStudentTask: '',
	messageDeleteStudentTask: '',
};

const deleteStudentTaskSlice = createSlice({
	name: 'deleteStudentTask',
	initialState,
	reducers: {
		deleteStudentTaskPending: (state) => {
			state.isLoadingDeleteStudentTask = true;
		},
		deleteStudentTaskSuccess: (state, { payload }) => {
			state.isLoadingDeleteStudentTask = false;
			state.statusDeleteStudentTask = 'success';
			state.messageDeleteStudentTask = payload;
		},
		deleteStudentTaskError: (state, { payload }) => {
			state.isLoadingDeleteStudentTask = false;
			state.statusDeleteStudentTask = 'error';
			state.messageDeleteStudentTask = payload;
		},
		deleteTaskResetSuccessMSg: (state) => {
			state.isLoadingDeleteStudentTask = true;
			state.messageDeleteStudentTask = '';
		},
	},
});

const { reducer, actions } = deleteStudentTaskSlice;

export const {
	deleteStudentTaskPending,
	deleteStudentTaskSuccess,
	deleteStudentTaskError,
	deleteTaskResetSuccessMSg,
} = actions;

export default reducer;
