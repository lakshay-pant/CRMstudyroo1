import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoading: false,
	status: '',
	message: '',
};

const addStudentSlice = createSlice({
	name: 'addStudent',
	initialState,
	reducers: {
		addStudentPending: (state) => {
			state.isLoading = true;
		},
		addStudentSuccess: (state, { payload }) => {
			state.isLoading = false;
			state.status = 'success';
			state.message = payload;
		},
		addStudentError: (state, { payload }) => {
			state.isLoading = false;
			state.status = 'error';
			state.message = payload;
		},
		addStudentResetMessage: (state) => {
			state.message = '';
		},
	},
});

const { reducer, actions } = addStudentSlice;

export const {
	addStudentPending,
	addStudentSuccess,
	addStudentError,
	addStudentResetMessage,
} = actions;

export default reducer;
