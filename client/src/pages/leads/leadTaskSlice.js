import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoadingLeadTask: false,
	statusLeadTask: '',
	messageLeadTask: '',
};

const leadTaskSlice = createSlice({
	name: 'leadTask',
	initialState,
	reducers: {
		leadTaskPending: (state) => {
			state.isLoadingLeadTask = true;
		},
		leadTaskSuccess: (state, { payload }) => {
			state.isLoadingLeadTask = false;
			state.statusLeadTask = 'success';
			state.messageLeadTask = payload;
		},
		leadTaskError: (state, { payload }) => {
			state.isLoadingLeadTask = false;
			state.statusLeadTask = 'error';
			state.messageLeadTask = payload;
		},
		leadTaskResetMessage: (state) => {
			state.messageLeadTask = '';
		},
	},
});

const { reducer, actions } = leadTaskSlice;

export const {
	leadTaskPending,
	leadTaskSuccess,
	leadTaskError,
	leadTaskResetMessage,
} = actions;

export default reducer;
