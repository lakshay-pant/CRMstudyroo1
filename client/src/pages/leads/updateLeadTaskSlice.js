import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoadingEditLeadTask: false,
	statusEditLeadTask: '',
	messageEditLeadTask: '',
};

const editLeadTaskSlice = createSlice({
	name: 'editLeadTask',
	initialState,
	reducers: {
		editLeadTaskPending: (state) => {
			state.isLoadingEditLeadTask = true;
		},
		editLeadTaskSuccess: (state, { payload }) => {
			state.isLoadingEditLeadTask = false;
			state.statusEditLeadTask = 'success';
			state.messageEditLeadTask = payload;
		},
		editLeadTaskError: (state, { payload }) => {
			state.isLoadingEditLeadTask = false;
			state.statusEditLeadTask = 'error';
			state.messageEditLeadTask = payload;
		},
		editLeadTaskResetSuccessMSg: (state) => {
			state.messageEditLeadTask = '';
		},
	},
});

const { reducer, actions } = editLeadTaskSlice;

export const {
	editLeadTaskPending,
	editLeadTaskSuccess,
	editLeadTaskError,
	editLeadTaskResetSuccessMSg,
} = actions;

export default reducer;
