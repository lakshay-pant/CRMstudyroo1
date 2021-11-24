import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoadingDeleteLeadTask: true,
	statusDeleteLeadTask: '',
	messageDeleteLeadTask: '',
};

const deleteLeadTaskSlice = createSlice({
	name: 'deleteLeadTask',
	initialState,
	reducers: {
		deleteLeadTaskPending: (state) => {
			state.isLoadingDeleteLeadTask = true;
		},
		deleteLeadTaskSuccess: (state, { payload }) => {
			state.isLoadingDeleteLeadTask = false;
			state.statusDeleteLeadTask = 'success';
			state.messageDeleteLeadTask = payload;
		},
		deleteLeadTaskError: (state, { payload }) => {
			state.isLoadingDeleteLeadTask = false;
			state.statusDeleteLeadTask = 'error';
			state.messageDeleteLeadTask = payload;
		},
		deleteTaskResetSuccessMSg: (state) => {
			state.messageDeleteLeadTask = '';
		},
	},
});

const { reducer, actions } = deleteLeadTaskSlice;

export const {
	deleteLeadTaskPending,
	deleteLeadTaskSuccess,
	deleteLeadTaskError,
	deleteTaskResetSuccessMSg,
} = actions;

export default reducer;
