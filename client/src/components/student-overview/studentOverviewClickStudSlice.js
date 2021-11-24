import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	student: {},
	isLoadingShowSingleStudent: false,
	errorSingleStudent: '',
};

const singleStudentSlice = createSlice({
	name: 'singleStudent',
	initialState,
	reducers: {
		fetchSingleStudentLoading: (state) => {
			state.isLoadingShowSingleStudent = true;
		},
		fetchSingleStudentSuccess: (state, action) => {
			state.student = action.payload;
			state.isLoadingShowSingleStudent = false;
		},
		fetchSingleStudentFail: (state, { payload }) => {
			state.isLoadingShowSingleStudent = false;
			state.errorSingleStudent = payload;
		},
	},
});

const { reducer, actions } = singleStudentSlice;

export const {
	fetchSingleStudentLoading,
	fetchSingleStudentSuccess,
	fetchSingleStudentFail,
} = actions;

export default reducer;
