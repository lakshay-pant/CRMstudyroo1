import axios from 'axios';
const addCourseUrl = 'https://studyrooapp.herokuapp.com/v1/course';

export const createNewCourse = (frmData) => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.post(addCourseUrl, frmData, {
				headers: {
					Authorization: localStorage.getItem('accessJWT'),
				},
			});

			resolve(result.data);
		} catch (error) {
			console.log(error.message);
			reject(error);
		}
	});
};

export const getAllUserSingleStudent = (_id) => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.get(
				'https://studyrooapp.herokuapp.com/v1/students/' + _id,
				{
					headers: {
						Authorization: localStorage.getItem('accessJWT'),
					},
				}
			);

			resolve(result);
		} catch (error) {
			reject(error);
		}
	});
};

export const addCertificate = (frmData) => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.post(
				'https://studyrooapp.herokuapp.com/v1/students/uploadCertificate',
				frmData,
				{
					headers: {
						Authorization: localStorage.getItem('accessJWT'),
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

export const getAllCourses = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.get(
				'https://studyrooapp.herokuapp.com/v1/course',
				{
					headers: {
						Authorization: localStorage.getItem('accessJWT'),
					},
				}
			);

			resolve(result);
		} catch (error) {
			reject(error);
		}
	});
};

export const getAllUserStudents = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.get(
				'https://studyrooapp.herokuapp.com/v1/students/all-students',
				{
					headers: {
						Authorization: localStorage.getItem('accessJWT'),
					},
				}
			);

			resolve(result);
		} catch (error) {
			reject(error);
		}
	});
};

export const UpdateAllUserStudents = (frmData, id) => {
	console.log('from api', frmData);
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.patch(
				'https://studyrooapp.herokuapp.com/v1/students/' + id,
				frmData,
				{
					headers: {
						Authorization: localStorage.getItem('accessJWT'),
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

export const DeleteAllUserStudents = (id) => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.delete(
				'https://studyrooapp.herokuapp.com/v1/students/' + id,
				{
					headers: {
						Authorization: localStorage.getItem('accessJWT'),
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

export const addStudentTask = (frmData, id) => {
	console.log('from api', frmData);
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.put(
				'https://studyrooapp.herokuapp.com/v1/students/' + id,
				frmData,
				{
					headers: {
						Authorization: localStorage.getItem('accessJWT'),
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

export const DeleteAllUserStudentTask = (id1, id2) => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.delete(
				'https://studyrooapp.herokuapp.com/v1/students/' + id1 + '/' + id2,
				{
					headers: {
						Authorization: localStorage.getItem('accessJWT'),
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

export const UpdateStudentTask = (frmData, id1, id2) => {
	console.log('from api', frmData);
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.put(
				'https://studyrooapp.herokuapp.com/v1/students/' + id1 + '/' + id2,
				frmData,
				{
					headers: {
						Authorization: localStorage.getItem('accessJWT'),
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
