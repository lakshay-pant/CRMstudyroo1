import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoadingStudentInfoEdit: false,
	statusStudentInfoEdit: '',
	messageStudentInfoEdit: '',
	messageCrmInfo: '',
};

const editStudentInfoSlice = createSlice({
	name: 'editStudentInfo',
	initialState,
	reducers: {
		editStudentInfoPending: (state) => {
			state.isLoadingStudentInfoEdit = true;
		},
		editStudentInfoSuccess: (state, { payload }) => {
			state.isLoadingStudentInfoEdit = false;
			state.statusStudentInfoEdit = 'success';
			state.messageStudentInfoEdit = payload;
		},
		editCrmStudentInfoSuccess: (state, { payload }) => {
			state.isLoadingStudentInfoEdit = false;
			state.statusStudentInfoEdit = 'success';
			state.messageCrmInfo = payload;
		},
		editStudentInfoError: (state, { payload }) => {
			state.isLoadingStudentInfoEdit = false;
			state.statusStudentInfoEdit = 'error';
			state.messageStudentInfoEdit = payload;
		},
		editStudentInfoResetMessage: (state) => {
			state.messageStudentInfoEdit = '';
		},
	},
});

const { reducer, actions } = editStudentInfoSlice;

export const {
	editStudentInfoPending,
	editStudentInfoSuccess,
	editStudentInfoError,
	editStudentInfoResetMessage,
	editCrmStudentInfoSuccess,
} = actions;

export default reducer;
