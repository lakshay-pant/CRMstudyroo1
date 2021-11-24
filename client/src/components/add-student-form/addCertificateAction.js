import {
	addCertificatePending,
	addCertificateSuccess,
	addCertificateError,
} from './addCerificateSlice';

import { addCertificate } from '../../api/studentApi';

export const addCertificateStud = (frmDt) => async (dispatch) => {
	try {
		dispatch(addCertificatePending());

		const result = await addCertificate(frmDt);
		result.status === 'success'
			? dispatch(addCertificateSuccess(result.message))
			: dispatch(addCertificateError(result.message));

		console.log(result);
	} catch (error) {
		dispatch(addCertificateError(error.message));
	}
};
