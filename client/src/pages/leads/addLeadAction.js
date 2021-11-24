import {
	addLeadPending,
	addLeadSuccess,
	addLeadError,
	addLeadResetSuccessMSg,
} from './addLeadSlice';

import { createNewLead } from '../../api/leadApi';

export const addLead = (frmDt) => async (dispatch) => {
	try {
		dispatch(addLeadPending());

		const result = await createNewLead(frmDt);
		result.status === 'success'
			? dispatch(addLeadSuccess(result.message)) &&
			  setTimeout(() => {
					dispatch(addLeadResetSuccessMSg());
			  }, 2000)
			: dispatch(addLeadError(result.message)) &&
			  setTimeout(() => {
					dispatch(addLeadResetSuccessMSg());
			  }, 2000);

		console.log('hello i m lead', result);
	} catch (error) {
		dispatch(addLeadError(error.message)) &&
			setTimeout(() => {
				dispatch(addLeadResetSuccessMSg());
			}, 2000);
	}
};
