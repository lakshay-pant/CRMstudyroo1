import {
	fetchLeadTaskLoadingD,
	fetchLeadTaskSuccessD,
	fetchLeadTaskFailD,
} from './dGetLeadTaskSlice';

import { getAllLeadtask } from '../../api/leadTaskApi';

export const fetchAllLeadTaskD = () => async (dispatch) => {
	dispatch(fetchLeadTaskLoadingD());
	try {
		const result = await getAllLeadtask();

		dispatch(fetchLeadTaskSuccessD(result.data.result));
	} catch (error) {
		dispatch(fetchLeadTaskFailD(error.message));
	}
};
