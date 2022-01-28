import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoadingUser: false,
	statusAdminUser: '',
	messageAdminUser: '',
};

const addAdminUserSlice = createSlice({
	name: 'addAdminUser',
	initialState,
	reducers: {
		addAdminUserPending: (state) => {
			state.isLoadingUser = true;
		},
		addAdminUserSuccess: (state, { payload }) => {
			state.isLoadingUser = false;
			state.statusAdminUser = 'success';
			state.messageAdminUser = payload;
		},
		addAdminUserError: (state, { payload }) => {
			state.isLoadingUser = false;
			state.statusAdminUser = 'error';
			state.messageAdminUser = payload;
		},
		addAdminUserResetMessage: (state) => {
			state.messageAdminUser = '';
		},
	},
});

const { reducer, actions } = addAdminUserSlice;

export const {
	addAdminUserPending,
	addAdminUserSuccess,
	addAdminUserError,
	addAdminUserResetMessage,
} = actions;

export default reducer;
