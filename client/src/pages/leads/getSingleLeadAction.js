import {
	fetchSingleLeadLoading,
	fetchSingleLeadSuccess,
	fetchSingleLeadFail,
} from './getSingleLeadSlice';

import { getAllUserSingleLead } from '../../api/leadApi';

export const fetchSingleLead = (id) => async (dispatch) => {
	dispatch(fetchSingleLeadLoading());
	try {
		const result = await getAllUserSingleLead(id);
		console.log('hey', result);
		result.data.result && dispatch(fetchSingleLeadSuccess(result.data.result));
	} catch (error) {
		dispatch(fetchSingleLeadFail(error.message));
	}
};
