import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoadingDeleteTask: true,
	statusDeleteTask: '',
	messageDeleteTask: '',
};

const deleteTaskSlice = createSlice({
	name: 'deleteTask',
	initialState,
	reducers: {
		deleteTaskPending: (state) => {
			state.isLoadingDeleteTask = true;
		},
		deleteTaskSuccess: (state, { payload }) => {
			state.isLoadingDeleteTask = false;
			state.statusDeleteTask = 'success';
			state.messageDeleteTask = payload;
		},
		deleteTaskError: (state, { payload }) => {
			state.isLoadingDeleteTask = false;
			state.statusDeleteTask = 'error';
			state.messageDeleteTask = payload;
		},
		deleteResetSuccessMSg: (state) => {
			state.messageDeleteTask = '';
		},
	},
});

const { reducer, actions } = deleteTaskSlice;

export const {
	deleteTaskPending,
	deleteTaskSuccess,
	deleteTaskError,
	deleteResetSuccessMSg,
} = actions;

export default reducer;
