const { CourseSchema } = require('./Courses.schema');
const { UserSchema } = require('../user/User.schema');

const insertCourse = (courseObj) => {
	return new Promise((resolve, reject) => {
		try {
			CourseSchema(courseObj)
				.save()
				.then((data) => resolve(data))
				.catch((error) => reject(error));
		} catch (error) {
			reject(error);
		}
	});
};

const getCourses = (clientId) => {
	return new Promise((resolve, reject) => {
		try {
			CourseSchema.find({ clientId })
				.then((data) => resolve(data))
				.catch((error) => reject(error));
		} catch (error) {
			reject(error);
		}
	});
};

const getAllCourses = () => {
	return new Promise((resolve, reject) => {
		try {
			CourseSchema.find()
				.then((data) => resolve(data))
				.catch((error) => reject(error));
		} catch (error) {
			reject(error);
		}
	});
};

const getCourseById = (_id) => {
	return new Promise((resolve, reject) => {
		try {
			CourseSchema.findOne({ _id })
				.then((data) => resolve(data))
				.catch((error) => reject(error));
		} catch (error) {
			reject(error);
		}
	});
};

const getUserNameById = (_id) => {
	return new Promise((resolve, reject) => {
		try {
			UserSchema.findOne({ _id })
				.then((data) => resolve(data))
				.catch((error) => reject(error));
		} catch (error) {
			reject(error);
		}
	});
};

const deleteStudent = ({ _id, clientId }) => {
	return new Promise((resolve, reject) => {
		try {
			StudentSchema.findOneAndDelete({ _id, clientId })
				.then((data) => resolve(data))
				.catch((error) => reject(error));
		} catch (error) {
			reject(error);
		}
	});
};

const deleteAllUserCourse = ({ _id }) => {
	return new Promise((resolve, reject) => {
		try {
			CourseSchema.findOneAndDelete({ _id })
				.then((data) => resolve(data))
				.catch((error) => reject(error));
		} catch (error) {
			reject(error);
		}
	});
};

const getCourseAllUsersById = (_id) => {
	return new Promise((resolve, reject) => {
		try {
			CourseSchema.findOne({ _id })
				.then((data) => resolve(data))
				.catch((error) => reject(error));
		} catch (error) {
			reject(error);
		}
	});
};

module.exports = {
	insertCourse,
	getCourses,
	getCourseById,
	deleteStudent,
	getAllCourses,
	deleteAllUserCourse,
	getUserNameById,
	getCourseAllUsersById,
};
