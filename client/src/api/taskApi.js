import axios from 'axios';
const addTaskUrl = 'https://studyrooapp.herokuapp.com/v1/tasks';

export const getAlltask = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.get(
				'https://studyrooapp.herokuapp.com/v1/tasks',
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
export const createNewTask = (frmData) => {
	console.log('from api', frmData);
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.post(addTaskUrl, frmData, {
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

export const UpdateAllTask = (frmData, id) => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.patch(
				'https://studyrooapp.herokuapp.com/v1/tasks/' + id,
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

export const DeleteAlltasks = (id) => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.delete(
				'https://studyrooapp.herokuapp.com/v1/tasks/' + id,
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
