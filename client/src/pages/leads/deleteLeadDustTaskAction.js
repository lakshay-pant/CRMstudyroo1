import {
	deleteLeadTaskDustError,
	deleteLeadTaskDustPending,
	deleteLeadTaskDustSuccess,
} from './deleteLeadDustTaskSlice';

import { DeleteManyLeadTasks } from '../../api/leadTaskApi';

export const deleteLeadTaskDust = (id) => async (dispatch) => {
	try {
		dispatch(deleteLeadTaskDustPending());

		const result = await DeleteManyLeadTasks(id);
		result.status === 'success'
			? dispatch(deleteLeadTaskDustSuccess(result.message))
			: dispatch(deleteLeadTaskDustError(result.message));

		console.log(result);
	} catch (error) {
		dispatch(deleteLeadTaskDustError(error.message));
	}
};
