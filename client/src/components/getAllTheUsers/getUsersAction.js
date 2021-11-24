import {
	fetchUserLoading,
	fetchUserSuccess,
	fetchUserFail,
	searchUsers,
	fetchUserOffice,
} from './getUsersSlice';

import { getAllUser } from '../../api/userApi';

export const fetchAllUsers = () => async (dispatch) => {
	dispatch(fetchUserLoading());
	try {
		const result = await getAllUser();

		result.data.result.length &&
			dispatch(fetchUserSuccess(result.data.result)) &&
			dispatch(fetchUserOffice(result.data.result));
	} catch (error) {
		dispatch(fetchUserFail(error.message));
	}
};

export const filterSearchUser = (str) => (dispatch) => {
	dispatch(searchUsers(str));
};
