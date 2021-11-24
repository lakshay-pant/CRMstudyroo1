import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoadingDeleteLeadTaskD: false,
	statusDeleteLeadTaskD: '',
	messageDeleteLeadTaskD: '',
};

const deleteLeadSliceD = createSlice({
	name: 'deleteLeadTaskD',
	initialState,
	reducers: {
		deleteLeadTaskPendingD: (state) => {
			state.isLoadingDeleteLeadTaskD = true;
		},
		deleteLeadTaskSuccessD: (state, { payload }) => {
			state.isLoadingDeleteLeadTaskD = false;
			state.statusDeleteLeadTaskD = 'success';
			state.messageDeleteLeadTaskD = payload;
		},
		deleteLeadTaskErrorD: (state, { payload }) => {
			state.isLoadingDeleteLeadTaskD = false;
			state.statusDeleteLeadTaskD = 'error';
			state.messageDeleteLeadTaskD = payload;
		},
		deleteResetSuccessMSgD: (state) => {
			state.isLoadingDeleteLeadTaskD = true;
			state.messageDeleteLeadTaskD = '';
		},
	},
});

const { reducer, actions } = deleteLeadSliceD;

export const {
	deleteLeadTaskPendingD,
	deleteLeadTaskSuccessD,
	deleteLeadTaskErrorD,
	deleteResetSuccessMSgD,
} = actions;

export default reducer;
