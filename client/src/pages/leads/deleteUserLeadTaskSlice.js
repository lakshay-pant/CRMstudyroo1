import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoadingDeleteUserLeadTask: false,
	statusDeleteUserLeadTask: '',
	messageDeleteUserLeadTask: '',
};

const deleteUserLeadTaskSlice = createSlice({
	name: 'deleteUserLeadTask',
	initialState,
	reducers: {
		deleteUserLeadTaskPending: (state) => {
			state.isLoadingDeleteUserLeadTask = true;
		},
		deleteUserLeadTaskSuccess: (state, { payload }) => {
			state.isLoadingDeleteUserLeadTask = false;
			state.statusDeleteUserLeadTask = 'success';
			state.messageDeleteUserLeadTask = payload;
		},
		deleteUserLeadTaskError: (state, { payload }) => {
			state.isLoadingDeleteUserLeadTask = false;
			state.statusDeleteUserLeadTask = 'error';
			state.messageDeleteUserLeadTask = payload;
		},
		deleteUserLeadTaskResetSuccessMSg: (state) => {
			state.isLoadingDeleteUserLeadTask = true;
			state.messageDeleteUserLeadTask = '';
		},
	},
});

const { reducer, actions } = deleteUserLeadTaskSlice;

export const {
	deleteUserLeadTaskPending,
	deleteUserLeadTaskSuccess,
	deleteUserLeadTaskError,
	deleteUserLeadTaskResetSuccessMSg,
} = actions;

export default reducer;
