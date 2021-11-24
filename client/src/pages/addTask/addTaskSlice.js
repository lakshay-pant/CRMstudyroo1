import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoading: false,
	status: '',
	message: '',
};

const addTaskSlice = createSlice({
	name: 'addTask',
	initialState,
	reducers: {
		addTaskPending: (state) => {
			state.isLoading = true;
		},
		addTaskSuccess: (state, { payload }) => {
			state.isLoading = false;
			state.status = 'success';
			state.message = payload;
		},
		addTaskError: (state, { payload }) => {
			state.isLoading = false;
			state.status = 'error';
			state.message = payload;
		},
		addStudentTaskResetMessage: (state) => {
			state.message = '';
		},
	},
});

const { reducer, actions } = addTaskSlice;

export const {
	addTaskPending,
	addTaskSuccess,
	addTaskError,
	addStudentTaskResetMessage,
} = actions;

export default reducer;
