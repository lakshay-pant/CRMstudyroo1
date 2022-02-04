import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	provider: {},
	isLoadingShowSingleProvider: false,
	errorSingleProvider: '',
};

const singleProviderSlice = createSlice({
	name: 'singleProvider',
	initialState,
	reducers: {
		fetchSingleProviderLoading: (state) => {
			state.isLoadingShowSingleProvider = true;
		},
		fetchSingleProviderSuccess: (state, action) => {
			state.provider = action.payload;
			state.isLoadingShowSingleProvider = false;
		},
		fetchSingleProviderFail: (state, { payload }) => {
			state.isLoadingShowSingleProvider = false;
			state.errorSingleProvider = payload;
		},
	},
});

const { reducer, actions } = singleProviderSlice;

export const {
	fetchSingleProviderLoading,
	fetchSingleProviderSuccess,
	fetchSingleProviderFail,
} = actions;

export default reducer;
