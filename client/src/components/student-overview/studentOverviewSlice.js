import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoadingEdit: false,
	statusEdit: '',
	messageEdit: '',
};

const editStudentSlice = createSlice({
	name: 'editStudent',
	initialState,
	reducers: {
		editStudentPending: (state) => {
			state.isLoadingEdit = true;
		},
		editStudentSuccess: (state, { payload }) => {
			state.isLoadingEdit = false;
			state.statusEdit = 'success';
			state.messageEdit = payload;
		},
		editStudentError: (state, { payload }) => {
			state.isLoadingEdit = false;
			state.statusEdit = 'error';
			state.messageEdit = payload;
		},
		editStudentResetMessage: (state) => {
			state.messageEdit = '';
		},
	},
});

const { reducer, actions } = editStudentSlice;

export const {
	editStudentPending,
	editStudentSuccess,
	editStudentError,
	editStudentResetMessage,
} = actions;

export default reducer;
