import axios from 'axios';
const addLeadUrl = 'https://studyrooapp.herokuapp.com/v1/leads';

export const createNewLead = (frmData) => {
	console.log('from api', frmData);
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.post(addLeadUrl, frmData, {
				headers: {
					Authorization: sessionStorage.getItem('accessJWT'),
				},
			});
			console.log('bb', result);

			resolve(result.data);
		} catch (error) {
			console.log(error.message);
			reject(error);
		}
	});
};

export const getAllUserLeads = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.get(
				'https://studyrooapp.herokuapp.com/v1/leads/all-leads',
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

export const getAllUserSingleLead = (_id) => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.get(
				'https://studyrooapp.herokuapp.com/v1/leads/' + _id
			);

			resolve(result);
		} catch (error) {
			reject(error);
		}
	});
};

export const addLeadTask = (frmData, id) => {
	console.log('from api', frmData);
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.put(
				'https://studyrooapp.herokuapp.com/v1/leads/' + id,
				frmData,
				{
					headers: {
						Authorization: sessionStorage.getItem('accessJWT'),
					},
				}
			);

			resolve(result.data);
		} catch (error) {
			console.log(error.message);
			reject(error);
		}
	});
};

export const DeleteAllUserLeads = (id) => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.delete(
				'https://studyrooapp.herokuapp.com/v1/leads/' + id,
				{
					headers: {
						Authorization: sessionStorage.getItem('accessJWT'),
					},
				}
			);

			resolve(result.data);
		} catch (error) {
			console.log(error.message);
			reject(error);
		}
	});
};

export const DeleteAllUserLeadsTask = (id1, id2) => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.delete(
				'https://studyrooapp.herokuapp.com/v1/leads/' + id1 + '/' + id2,
				{
					headers: {
						Authorization: sessionStorage.getItem('accessJWT'),
					},
				}
			);

			resolve(result.data);
		} catch (error) {
			console.log(error.message);
			reject(error);
		}
	});
};

export const UpdateLeadTask = (frmData, id1, id2) => {
	console.log('from api', frmData);
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.put(
				'https://studyrooapp.herokuapp.com/v1/leads/' + id1 + '/' + id2,
				frmData,
				{
					headers: {
						Authorization: sessionStorage.getItem('accessJWT'),
					},
				}
			);

			resolve(result.data);
		} catch (error) {
			console.log(error.message);
			reject(error);
		}
	});
};

export const UpdateAllUserLeads = (frmData, id) => {
	console.log('from api', frmData);
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.patch(
				'https://studyrooapp.herokuapp.com/v1/leads/' + id,
				frmData,
				{
					headers: {
						Authorization: sessionStorage.getItem('accessJWT'),
					},
				}
			);

			resolve(result.data);
		} catch (error) {
			console.log(error.message);
			reject(error);
		}
	});
};
