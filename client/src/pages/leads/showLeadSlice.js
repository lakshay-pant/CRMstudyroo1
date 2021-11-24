import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	leads: [],
	isLoadingShowlead: false,
	error: '',
	searchLeadList: [],
};

const leadListSlice = createSlice({
	name: 'leadList',
	initialState,
	reducers: {
		fetchLeadLoading: (state) => {
			state.isLoadingShowlead = true;
		},
		fetchLeadSuccess: (state, action) => {
			state.leads = action.payload;
			state.isLoadingShowlead = false;
		},
		fetchLeadFail: (state, { payload }) => {
			state.isLoadingShowlead = false;
			state.error = payload;
		},
		searchLeads: (state, { payload }) => {
			state.searchLeadList = state.leads.filter((row) => {
				if (!payload) return row;

				return row.firstName.toLowerCase().includes(payload.toLowerCase());
			});
		},
	},
});

const { reducer, actions } = leadListSlice;

export const {
	fetchLeadLoading,
	fetchLeadSuccess,
	fetchLeadFail,
	searchLeads,
} = actions;

export default reducer;
