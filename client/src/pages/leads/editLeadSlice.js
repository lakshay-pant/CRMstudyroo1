import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoadingLeadEdit: false,
	statusLeadEdit: '',
	messageLeadEdit: '',
};

const editLeadSlice = createSlice({
	name: 'editLead',
	initialState,
	reducers: {
		editLeadPending: (state) => {
			state.isLoadingLeadEdit = true;
		},
		editLeadSuccess: (state, { payload }) => {
			state.isLoadingLeadEdit = false;
			state.statusLeadEdit = 'success';
			state.messageLeadEdit = payload;
		},
		editLeadError: (state, { payload }) => {
			state.isLoadingLeadEdit = false;
			state.statusLeadEdit = 'error';
			state.messageLeadEdit = payload;
		},
		editLeadResetMessage: (state) => {
			state.messageLeadEdit = '';
		},
	},
});

const { reducer, actions } = editLeadSlice;

export const {
	editLeadPending,
	editLeadSuccess,
	editLeadError,
	editLeadResetMessage,
} = actions;

export default reducer;
