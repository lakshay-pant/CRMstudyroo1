import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isCertificateLoading: false,
	certificateStatus: '',
	certificateMessage: '',
};

const addCertificateSlice = createSlice({
	name: 'addCertificate',
	initialState,
	reducers: {
		addCertificatePending: (state) => {
			state.isLoading = true;
		},
		addCertificateSuccess: (state, { payload }) => {
			state.isLoading = false;
			state.status = 'success';
			state.message = payload;
		},
		addCertificateError: (state, { payload }) => {
			state.isLoading = false;
			state.status = 'error';
			state.message = payload;
		},
	},
});

const { reducer, actions } = addCertificateSlice;

export const {
	addCertificatePending,
	addCertificateSuccess,
	addCertificateError,
} = actions;

export default reducer;
