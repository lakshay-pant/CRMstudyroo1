import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	leadTasks: [],
	isLoadingShowleadTaskD: false,
	errorLeadTask: '',
};

const leadTaskListSliceD = createSlice({
	name: 'leadTaskListD',
	initialState,
	reducers: {
		fetchLeadTaskLoadingD: (state) => {
			state.isLoadingShowleadTaskD = true;
		},
		fetchLeadTaskSuccessD: (state, action) => {
			state.leadTasks = action.payload;
			state.isLoadingShowleadTaskD = false;
		},
		fetchLeadTaskFailD: (state, { payload }) => {
			state.isLoadingShowleadTaskD = false;
			state.errorLeadTask = payload;
		},
	},
});

const { reducer, actions } = leadTaskListSliceD;

export const {
	fetchLeadTaskLoadingD,
	fetchLeadTaskSuccessD,
	fetchLeadTaskFailD,
	searchleadTasks,
} = actions;

export default reducer;
