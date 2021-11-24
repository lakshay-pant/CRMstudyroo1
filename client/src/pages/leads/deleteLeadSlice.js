import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoadingDeleteLead: false,
	statusDeleteLead: '',
	messageDeleteLead: '',
};

const deleteLeadSlice = createSlice({
	name: 'deleteLead',
	initialState,
	reducers: {
		deleteLeadPending: (state) => {
			state.isLoadingDeleteLead = true;
		},
		deleteLeadSuccess: (state, { payload }) => {
			state.isLoadingDeleteLead = false;
			state.statusDeleteLead = 'success';
			state.messageDeleteLead = payload;
		},
		deleteLeadError: (state, { payload }) => {
			state.isLoadingDeleteLead = false;
			state.statusDeleteLead = 'error';
			state.messageDeleteLead = payload;
		},
		deleteResetSuccessMSg: (state) => {
			state.isLoadingDeleteLead = true;
			state.messageDeleteLead = '';
		},
	},
});

const { reducer, actions } = deleteLeadSlice;

export const {
	deleteLeadPending,
	deleteLeadSuccess,
	deleteLeadError,
	deleteResetSuccessMSg,
} = actions;

export default reducer;
