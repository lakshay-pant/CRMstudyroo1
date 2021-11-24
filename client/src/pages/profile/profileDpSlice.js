import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoadingDpAdd: false,
	statusDpAdd: '',
	messageDpAdd: '',
};

const addDpUserSlice = createSlice({
	name: 'addUserDp',
	initialState,
	reducers: {
		addUserDpPending: (state) => {
			state.isLoadingDpAdd = true;
		},
		addUserDpSuccess: (state, { payload }) => {
			state.isLoadingDpAdd = false;
			state.statusDpAdd = 'success';
			state.messageDpAdd = payload;
		},
		addUserDpError: (state, { payload }) => {
			state.isLoadingDpAdd = false;
			state.statusDpAdd = 'error';
			state.messageDpAdd = payload;
		},
		editResetSuccessMSg: (state) => {
			state.messageDpAdd = '';
		},
	},
});

const { reducer, actions } = addDpUserSlice;

export const {
	addUserDpPending,
	addUserDpSuccess,
	addUserDpError,
	editResetSuccessMSg,
} = actions;

export default reducer;
