const { LeadTaskSchema } = require('./LeadTask.schema');
const { UserSchema } = require('../user/User.schema');

const insertLeadTask = (taskObj) => {
	return new Promise((resolve, reject) => {
		try {
			LeadTaskSchema(taskObj)
				.save()
				.then((data) => resolve(data))
				.catch((error) => reject(error));
		} catch (error) {
			reject(error);
		}
	});
};

const getLeadTasks = () => {
	return new Promise((resolve, reject) => {
		try {
			LeadTaskSchema.find()
				.then((data) => resolve(data))
				.catch((error) => reject());
		} catch (error) {
			reject(error);
		}
	});
};

const getLeadTaskById = (_id) => {
	return new Promise((resolve, reject) => {
		try {
			LeadTaskSchema.findOne({ leadTaskUserId: _id })
				.then((data) => resolve(data))
				.catch((error) => reject(error));
		} catch (error) {
			reject(error);
		}
	});
};

const deleteLeadTask = (_id) => {
	return new Promise((resolve, reject) => {
		try {
			LeadTaskSchema.findOneAndDelete({ leadTaskUserId: _id })
				.then((data) => resolve(data))
				.catch((error) => reject(error));
		} catch (error) {
			reject(error);
		}
	});
};

const deleteAllLeadTask = () => {
	return new Promise((resolve, reject) => {
		try {
			LeadTaskSchema.deleteMany()
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
	insertLeadTask,
	getLeadTasks,
	getLeadTaskById,
	deleteLeadTask,
	getUserNameById,
	deleteAllLeadTask,
};
