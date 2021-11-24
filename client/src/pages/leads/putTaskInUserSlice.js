import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoadingUserLeadTask: false,
	statusUserLeadTask: '',
	messageUserLeadTask: '',
};

const userLeadTaskSlice = createSlice({
	name: 'userLeadTask',
	initialState,
	reducers: {
		userLeadTaskPending: (state) => {
			state.isLoadingUserLeadTask = true;
		},
		userLeadTaskSuccess: (state, { payload }) => {
			state.isLoadingUserLeadTask = false;
			state.statusUserLeadTask = 'success';
			state.messageUserLeadTask = payload;
		},
		userLeadTaskError: (state, { payload }) => {
			state.isLoadingUserLeadTask = false;
			state.statusUserLeadTask = 'error';
			state.messageUserLeadTask = payload;
		},
	},
});

const { reducer, actions } = userLeadTaskSlice;

export const { userLeadTaskPending, userLeadTaskSuccess, userLeadTaskError } =
	actions;

export default reducer;
