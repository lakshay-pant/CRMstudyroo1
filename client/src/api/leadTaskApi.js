import axios from 'axios';
const addLeadTaskUrl = 'https://studyrooapp.herokuapp.com/v1/leadTask/';

export const getAllLeadtask = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.get(
				'https://studyrooapp.herokuapp.com/v1/leadTask/',
				{
					headers: {
						Authorization: sessionStorage.getItem('accessJWT'),
					},
				}
			);

			resolve(result);
		} catch (error) {
			reject(error);
		}
	});
};
export const createNewLeadTask = (frmData) => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.post(addLeadTaskUrl, frmData, {
				headers: {
					Authorization: sessionStorage.getItem('accessJWT'),
				},
			});

			resolve(result.data);
		} catch (error) {
			console.log(error.message);
			reject(error);
		}
	});
};

export const UpdateAllLeadTask = (frmData, id) => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.patch(
				'https://studyrooapp.herokuapp.com/v1/leadTask/' + id,
				frmData,
				{
					headers: {
						Authorization: sessionStorage.getItem('accessJWT'),
					},
				}
			);
			console.log('RESULT', result);
			resolve(result.data);
		} catch (error) {
			reject(error);
		}
	});
};

export const DeleteAllLeadtasks = (id) => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.delete(
				'https://studyrooapp.herokuapp.com/v1/leadTask/' + id,
				{
					headers: {
						Authorization: sessionStorage.getItem('accessJWT'),
					},
				}
			);
			console.log('RESULT', result);
			resolve(result.data);
		} catch (error) {
			console.log('i am in error ', error.message);
			reject(error);
		}
	});
};

export const DeleteManyLeadTasks = (id) => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.delete(
				'https://studyrooapp.herokuapp.com/v1/leadTask/task/' + id,
				{
					headers: {
						Authorization: sessionStorage.getItem('accessJWT'),
					},
				}
			);
			console.log('RESULT', result);
			resolve(result.data);
		} catch (error) {
			console.log('i am in error ', error.message);
			reject(error);
		}
	});
};
