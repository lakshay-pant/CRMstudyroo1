import {
	fetchSingleProviderLoading,
	fetchSingleProviderSuccess,
	fetchSingleProviderFail,
} from './singleProviderSlice';

import { getSingleProvider } from '../../api/courseApi';

export const fetchSingleProvider = (id) => async (dispatch) => {
	dispatch(fetchSingleProviderLoading());
	try {
		const result = await getSingleProvider(id);

		result.data.result &&
			dispatch(fetchSingleProviderSuccess(result.data.result));
	} catch (error) {
		dispatch(fetchSingleProviderFail(error.message));
	}
};
