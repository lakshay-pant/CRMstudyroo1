import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	lead: null,
	isLoadingShowSingleLead: false,
	errorSingleLead: '',
};

const singleLeadSlice = createSlice({
	name: 'singleLead',
	initialState,
	reducers: {
		fetchSingleLeadLoading: (state) => {
			state.isLoadingShowSingleLead = true;
		},
		fetchSingleLeadSuccess: (state, action) => {
			state.lead = action.payload;
			state.isLoadingShowSingleLead = false;
		},
		fetchSingleLeadFail: (state, { payload }) => {
			state.isLoadingShowSingleLead = false;
			state.errorSingleLead = payload;
		},
	},
});

const { reducer, actions } = singleLeadSlice;

export const {
	fetchSingleLeadLoading,
	fetchSingleLeadSuccess,
	fetchSingleLeadFail,
} = actions;

export default reducer;
