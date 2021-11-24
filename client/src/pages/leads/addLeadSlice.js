import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoadingLead: false,
	statusLead: '',
	messageLead: '',
};

const addLeadSlice = createSlice({
	name: 'addLead',
	initialState,
	reducers: {
		addLeadPending: (state) => {
			state.isLoadingLead = true;
		},
		addLeadSuccess: (state, { payload }) => {
			state.isLoadingLead = false;
			state.statusLead = 'success';
			state.messageLead = payload;
		},
		addLeadError: (state, { payload }) => {
			state.isLoadingLead = false;
			state.statusLead = 'error';
			state.messageLead = payload;
		},
		addLeadResetSuccessMSg: (state) => {
			state.messageLead = '';
		},
	},
});

const { reducer, actions } = addLeadSlice;

export const {
	addLeadPending,
	addLeadSuccess,
	addLeadError,
	addLeadResetSuccessMSg,
} = actions;

export default reducer;
