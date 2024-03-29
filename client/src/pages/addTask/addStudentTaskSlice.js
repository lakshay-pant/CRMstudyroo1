import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoadingStudentTask: false,
	statusStudentTask: '',
	messageStudentTask: '',
};

const studentTaskSlice = createSlice({
	name: 'studentTask',
	initialState,
	reducers: {
		studentTaskPending: (state) => {
			state.isLoadingStudentTask = true;
		},
		studentTaskSuccess: (state, { payload }) => {
			state.isLoadingStudentTask = false;
			state.statusStudentTask = 'success';
			state.messageStudentTask = payload;
		},
		studentTaskError: (state, { payload }) => {
			state.isLoadingStudentTask = false;
			state.statusStudentTask = 'error';
			state.messageStudentTask = payload;
		},
		addStudentTaskResetMessage: (state) => {
			state.messageStudentTask = '';
		},
	},
});

const { reducer, actions } = studentTaskSlice;

export const {
	studentTaskPending,
	studentTaskSuccess,
	studentTaskError,
	addStudentTaskResetMessage,
} = actions;

export default reducer;
