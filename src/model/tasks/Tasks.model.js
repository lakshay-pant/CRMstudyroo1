const { taskSchema } = require('./Tasks.Schema');
const { UserSchema } = require('../user/User.schema');

const insertTask = (taskObj) => {
	return new Promise((resolve, reject) => {
		try {
			taskSchema(taskObj)
				.save()
				.then((data) => resolve(data))
				.catch((error) => reject(error));
		} catch (error) {
			reject(error);
		}
	});
};

const getTasks = () => {
	return new Promise((resolve, reject) => {
		try {
			taskSchema
				.find()
				.then((data) => resolve(data))
				.catch((error) => reject());
		} catch (error) {
			reject(error);
		}
	});
};

const getTaskById = (_id) => {
	return new Promise((resolve, reject) => {
		try {
			taskSchema
				.findOne({ _id })
				.then((data) => resolve(data))
				.catch((error) => reject(error));
		} catch (error) {
			reject(error);
		}
	});
};

const deleteTask = (_id) => {
	return new Promise((resolve, reject) => {
		try {
			taskSchema
				.findOneAndDelete(_id)
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

module.exports = {
	insertTask,
	getTasks,
	getTaskById,
	deleteTask,
	getUserNameById,
};
