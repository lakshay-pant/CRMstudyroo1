import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	users: [],
	officesName: [],
	isLoading: false,

	error: '',

	searchUserList: [],
};

const userListSlice = createSlice({
	name: 'userList',
	initialState,
	reducers: {
		fetchUserLoading: (state) => {
			state.isLoading = true;
		},
		fetchUserSuccess: (state, action) => {
			state.users = action.payload;

			state.isLoading = false;
		},
		fetchUserFail: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		},
		fetchUserOffice: (state, action) => {
			state.officesName = state.users.map((row) => {
				return row.officeName;
			});

			state.isLoading = false;
		},
		searchUsers: (state, { payload }) => {
			state.searchUserList = state.users.filter((row) => {
				if (!payload) return row;

				return row.firstName.toLowerCase().includes(payload.toLowerCase());
			});
		},
	},
});
const { reducer, actions } = userListSlice;

export const {
	fetchUserLoading,
	fetchUserSuccess,
	fetchUserFail,
	searchUsers,
	fetchUserOffice,
} = actions;

export default reducer;
