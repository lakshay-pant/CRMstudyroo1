import {
	fetchLeadLoading,
	fetchLeadSuccess,
	fetchLeadFail,
	searchLeads,
} from './showLeadSlice';

import { getAllUserLeads } from '../../api/leadApi';

export const fetchAllLeads = () => async (dispatch) => {
	dispatch(fetchLeadLoading());
	try {
		const result = await getAllUserLeads();

		dispatch(fetchLeadSuccess(result.data.result));
	} catch (error) {
		dispatch(fetchLeadFail(error.message));
	}
};

export const filterSerachLead = (str) => (dispatch) => {
	dispatch(searchLeads(str));
};
