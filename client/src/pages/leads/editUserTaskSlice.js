import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoadingEditUserLeadTask: false,
	statusEditUserLeadTask: '',
	messageEditUserLeadTask: '',
};

const editUserLeadTaskSlice = createSlice({
	name: 'editUserLeadTask',
	initialState,
	reducers: {
		editUserLeadTaskPending: (state) => {
			state.isLoadingEditUserLeadTask = true;
		},
		editUserLeadTaskSuccess: (state, { payload }) => {
			state.isLoadingEditUserLeadTask = false;
			state.statusEditUserLeadTask = 'success';
			state.messageEditUserLeadTask = payload;
		},
		editUserLeadTaskError: (state, { payload }) => {
			state.isLoadingEditUserLeadTask = false;
			state.statusEditUserLeadTask = 'error';
			state.messageEditUserLeadTask = payload;
		},
		editUserLeadTaskResetSuccessMSg: (state) => {
			state.messageEditUserLeadTask = '';
		},
	},
});

const { reducer, actions } = editUserLeadTaskSlice;

export const {
	editUserLeadTaskPending,
	editUserLeadTaskSuccess,
	editUserLeadTaskError,
	editUserLeadTaskResetSuccessMSg,
} = actions;

export default reducer;
