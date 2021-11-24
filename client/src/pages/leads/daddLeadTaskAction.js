import {
	addLeadTaskDPending,
	addLeadTaskDSuccess,
	addLeadTaskDError,
} from './daddLeadTaskSlice';

import { createNewLeadTask } from '../../api/leadTaskApi';

export const addLeadTaskD = (frmDt) => async (dispatch) => {
	try {
		dispatch(addLeadTaskDPending());

		const result = await createNewLeadTask(frmDt);
		result.status === 'success'
			? dispatch(addLeadTaskDSuccess(result.message))
			: dispatch(addLeadTaskDError(result.message));

		console.log('hello i m lead', result);
	} catch (error) {
		dispatch(addLeadTaskDError(error.message));
	}
};
