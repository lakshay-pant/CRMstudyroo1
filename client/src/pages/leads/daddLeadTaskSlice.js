import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoadingLeadTaskD: false,
	statusLeadTaskD: '',
	messageLeadTaskD: '',
};

const addLeadTaskDSlice = createSlice({
	name: 'addLeadTaskD',
	initialState,
	reducers: {
		addLeadTaskDPending: (state) => {
			state.isLoadingLeadTaskD = true;
		},
		addLeadTaskDSuccess: (state, { payload }) => {
			state.isLoadingLeadTaskD = false;
			state.statusLeadTaskD = 'success';
			state.messageLeadTaskD = payload;
		},
		addLeadTaskDError: (state, { payload }) => {
			state.isLoadingLeadTaskD = false;
			state.statusLeadTaskD = 'error';
			state.messageLeadTaskD = payload;
		},
		addLeadTaskDResetSuccessMSg: (state) => {
			state.messageLeadTaskD = '';
		},
	},
});

const { reducer, actions } = addLeadTaskDSlice;

export const {
	addLeadTaskDPending,
	addLeadTaskDSuccess,
	addLeadTaskDError,
	addLeadTaskDResetSuccessMSg,
} = actions;

export default reducer;
