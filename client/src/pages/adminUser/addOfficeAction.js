import {
	addOfficePending,
	addOfficeSuccess,
	addOfficeError,
	addOfficeResetMessage,
} from './addOfficeSlice';

import { addOfficeToUser } from '../../api/userApi';

export const addOffice = (frmDt) => async (dispatch) => {
	try {
		dispatch(addOfficePending());

		const result = await addOfficeToUser(frmDt);
		result.status === 'success'
			? dispatch(addOfficeSuccess(result.message)) &&
			  setTimeout(() => {
					dispatch(addOfficeResetMessage());
			  }, 1000)
			: dispatch(addOfficeError(result.message));

		console.log(result);
	} catch (error) {
		dispatch(addOfficeError(error.message));
	}
};
