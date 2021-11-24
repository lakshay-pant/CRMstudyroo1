import {
	leadTaskPending,
	leadTaskSuccess,
	leadTaskError,
	leadTaskResetMessage,
} from './leadTaskSlice';

import { addLeadTask } from '../../api/leadApi';

export const leadTask = (frmDt, id) => async (dispatch) => {
	try {
		dispatch(leadTaskPending());

		const result = await addLeadTask(frmDt, id);
		result.status === 'success'
			? dispatch(leadTaskSuccess(result.message)) &&
			  setTimeout(() => {
					dispatch(leadTaskResetMessage());
			  }, 2000)
			: dispatch(leadTaskError(result.message));
	} catch (error) {
		dispatch(leadTaskError(error.message));
	}
};
