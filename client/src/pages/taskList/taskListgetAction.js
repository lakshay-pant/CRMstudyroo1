import {
	fetchtaskLoading,
	fetchtaskSuccess,
	fetchtaskFail,
	searchtask,
} from './taskListgetSlice';

import { getAlltask } from '../../api/taskApi';

export const fetchAlltask = () => async (dispatch) => {
	dispatch(fetchtaskLoading());
	try {
		const result = await getAlltask();

		dispatch(fetchtaskSuccess(result.data.result));
	} catch (error) {
		dispatch(fetchtaskFail(error.message));
	}
};

export const filterSerachtask = (str) => (dispatch) => {
	dispatch(searchtask(str));
};
