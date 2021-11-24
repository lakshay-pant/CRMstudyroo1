import {
	deleteLeadTaskErrorD,
	deleteLeadTaskPendingD,
	deleteLeadTaskSuccessD,
} from './dDeleteLeadTaskSlice';

import { DeleteAllLeadtasks } from '../../api/leadTaskApi';

export const deleteLeadTaskD = (id) => async (dispatch) => {
	try {
		dispatch(deleteLeadTaskPendingD());

		const result = await DeleteAllLeadtasks(id);
		result.status === 'success'
			? dispatch(deleteLeadTaskSuccessD(result.message))
			: dispatch(deleteLeadTaskErrorD(result.message));

		console.log(result);
	} catch (error) {
		dispatch(deleteLeadTaskErrorD(error.message));
	}
};
