import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoadingOfice: false,
	statusOfice: '',
	messageOfice: '',
};

const addOfficeSlice = createSlice({
	name: 'addOffice',
	initialState,
	reducers: {
		addOfficePending: (state) => {
			state.isLoadingOfice = true;
		},
		addOfficeSuccess: (state, { payload }) => {
			state.isLoadingOfice = false;
			state.statusOfice = 'success';
			state.messageOfice = payload;
		},
		addOfficeError: (state, { payload }) => {
			state.isLoadingOfice = false;
			state.statusOfice = 'error';
			state.messageOfice = payload;
		},
		addOfficeResetMessage: (state) => {
			state.messageOfice = '';
		},
	},
});

const { reducer, actions } = addOfficeSlice;

export const {
	addOfficePending,
	addOfficeSuccess,
	addOfficeError,
	addOfficeResetMessage,
} = actions;

export default reducer;
