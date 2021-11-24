import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoadingDeleteLeadTaskDust: false,
	statusDeleteLeadTaskDust: '',
	messageDeleteLeadTaskDust: '',
};

const deleteLeadTaskDustSlice = createSlice({
	name: 'deleteLeadTaskDust',
	initialState,
	reducers: {
		deleteLeadTaskDustPending: (state) => {
			state.isLoadingDeleteLeadTaskDust = true;
		},
		deleteLeadTaskDustSuccess: (state, { payload }) => {
			state.isLoadingDeleteLeadTaskDust = false;
			state.statusDeleteLeadTaskDust = 'success';
			state.messageDeleteLeadTaskDust = payload;
		},
		deleteLeadTaskDustError: (state, { payload }) => {
			state.isLoadingDeleteLeadTaskDust = false;
			state.statusDeleteLeadTaskDust = 'error';
			state.messageDeleteLeadTaskDust = payload;
		},
		deleteTaskDustResetSuccessMSg: (state) => {
			state.isLoadingDeleteLeadTaskDust = true;
			state.messageDeleteLeadTaskDust = '';
		},
	},
});

const { reducer, actions } = deleteLeadTaskDustSlice;

export const {
	deleteLeadTaskDustPending,
	deleteLeadTaskDustSuccess,
	deleteLeadTaskDustError,
	deleteTaskDustResetSuccessMSg,
} = actions;

export default reducer;
