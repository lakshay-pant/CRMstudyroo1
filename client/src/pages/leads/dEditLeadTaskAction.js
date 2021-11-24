import {
	editLeadErrorD,
	editLeadPendingD,
	editLeadSuccessD,
} from './dEditLeadTaskSlice';

import { UpdateAllLeadTask } from '../../api/leadTaskApi';

export const editLeadTaskD = (frmDt, id) => async (dispatch) => {
	try {
		dispatch(editLeadPendingD());

		const result = await UpdateAllLeadTask(frmDt, id);
		result.status === 'success'
			? dispatch(editLeadSuccessD(result.message))
			: dispatch(editLeadErrorD(result.message));
	} catch (error) {
		dispatch(editLeadErrorD(error.message));
	}
};
