import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoadingLeadEditD: false,
	statusLeadEditD: '',
	messageLeadEditD: '',
};

const editLeadSliceD = createSlice({
	name: 'editLeadD',
	initialState,
	reducers: {
		editLeadPendingD: (state) => {
			state.isLoadingLeadEditD = true;
		},
		editLeadSuccessD: (state, { payload }) => {
			state.isLoadingLeadEditD = false;
			state.statusLeadEditD = 'success';
			state.messageLeadEditD = payload;
		},
		editLeadErrorD: (state, { payload }) => {
			state.isLoadingLeadEditD = false;
			state.statusLeadEditD = 'error';
			state.messageLeadEditD = payload;
		},
	},
});

const { reducer, actions } = editLeadSliceD;

export const { editLeadPendingD, editLeadSuccessD, editLeadErrorD } = actions;

export default reducer;
