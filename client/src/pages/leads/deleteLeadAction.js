import {
	deleteLeadError,
	deleteLeadPending,
	deleteLeadSuccess,
} from './deleteLeadSlice';

import { DeleteAllUserLeads } from '../../api/leadApi';

export const deleteLead = (id) => async (dispatch) => {
	try {
		dispatch(deleteLeadPending());

		const result = await DeleteAllUserLeads(id);
		result.status === 'success'
			? dispatch(deleteLeadSuccess(result.message))
			: dispatch(deleteLeadError(result.message));

		console.log(result);
	} catch (error) {
		dispatch(deleteLeadError(error.message));
	}
};
