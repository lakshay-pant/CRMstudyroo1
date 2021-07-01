const { token } = require('morgan');
const { UserSchema } = require('./User.schema');

const insertUser = (userObj) => {
	return new Promise((resolve, reject) => {
		try {
			UserSchema(userObj)
				.save()
				.then((data) => resolve(data))
				.catch((error) => reject(error));
		} catch (error) {
			res.json({ status: 'error', message: error.message });
		}
	});
};

const getAllUsers = () => {
	return new Promise((resolve, reject) => {
		try {
			UserSchema.find()
				.then((data) => resolve(data))
				.catch((error) => reject(error));
		} catch (error) {
			reject(error);
		}
	});
};

const getUserByEmail = (email) => {
	return new Promise((resolve, reject) => {
		if (!email) return false;

		try {
			UserSchema.findOne({ email }, (error, data) => {
				if (error) {
					console.log(error);
					reject(error);
				}
				resolve(data);
			});
		} catch (error) {
			reject(error);
		}
	});
};

const getUserById = (_id) => {
	return new Promise((resolve, reject) => {
		if (!_id) return false;

		try {
			UserSchema.findOne({ _id }, (error, data) => {
				if (error) {
					console.log(error);
					reject(error);
				}
				resolve(data);
			});
		} catch (error) {
			reject(error);
		}
	});
};

const getUserNameById = (_id) => {
	return new Promise((resolve, reject) => {
		if (!_id) return false;

		try {
			UserSchema.findOne({ _id }, (error, data) => {
				if (error) {
					console.log(error);
					reject(error);
				}
				resolve(data.firstName);
			});
		} catch (error) {
			reject(error);
		}
	});
};

const storeUserRefreshJWT = (_id, token) => {
	return new Promise((resolve, reject) => {
		try {
			UserSchema.findOneAndUpdate(
				{ _id },
				{
					$set: { 'refreshJWT.token': token, 'refreshJWT.addedAt': Date.now() },
				},
				{ new: true }
			)
				.then((data) => resolve(data))
				.catch((error) => {
					console.log(error);
					reject(error);
				});
		} catch (error) {
			console.log(error);
			reject(error);
		}
	});
};

const updatePassword = (email, newhashedPass) => {
	return new Promise((resolve, reject) => {
		try {
			UserSchema.findOneAndUpdate(
				{ email },
				{
					$set: { password: newhashedPass },
				},
				{ new: true }
			)
				.then((data) => resolve(data))
				.catch((error) => {
					console.log(error);
					reject(error);
				});
		} catch (error) {
			console.log(error);
			reject(error);
		}
	});
};

const updateUserStudentTask = ({
	_id,
	taskName,
	dueDate,
	taskDetails,
	studentAssign,
	taskStatus,
	assignTo,
	userGroup,
	offices,
	type,
	taskId,
	studentId,
	userId,
}) => {
	return new Promise((resolve, reject) => {
		try {
			UserSchema.findOneAndUpdate(
				{ _id },
				{
					status: 'Pending operator response',
					$push: {
						userStudentTasks: {
							taskName,
							dueDate,
							taskDetails,
							studentAssign,
							taskStatus,
							assignTo,
							userGroup,
							offices,
							type,
							taskId,
							studentId,
							userId,
						},
					},
				},
				{ new: true }
			)
				.then((data) => resolve(data))
				.catch((error) => reject(error));
		} catch (error) {
			reject(error);
		}
	});
};

const updateUserTaskStudent = (
	id3,
	{ taskName, dueDate, taskDetails, taskStatus, userGroup, offices, type }
) => {
	return new Promise((resolve, reject) => {
		try {
			UserSchema.findOneAndUpdate(
				{ 'userStudentTasks.taskId': id3 },
				{
					$set: {
						'userStudentTasks.$.taskName': taskName,
						'userStudentTasks.$.dueDate': dueDate,
						'userStudentTasks.$.taskStatus': taskStatus,
						'userStudentTasks.$.taskDetails': taskDetails,
						'userStudentTasks.$.userGroup': userGroup,
						'userStudentTasks.$.offices': offices,
						'userStudentTasks.$.type': type,
					},
				},
				{ new: true }
			)
				.then((data) => resolve(data))
				.catch((error) => reject(error));
		} catch (error) {
			reject(error);
		}
	});
};

const updateUserStudentTaskDelete = (id1, id2) => {
	return new Promise((resolve, reject) => {
		try {
			UserSchema.findByIdAndUpdate(
				id1,
				{
					$pull: {
						userStudentTasks: {
							taskId: id2,
						},
					},
				},
				{ new: true }
			)
				.then((data) => resolve(data))
				.catch((error) => reject(error));
		} catch (error) {
			reject(error);
		}
	});
};

module.exports = {
	insertUser,
	getUserByEmail,
	getUserById,
	storeUserRefreshJWT,
	updatePassword,
	getAllUsers,
	getUserNameById,
	updateUserStudentTask,
	updateUserTaskStudent,
	updateUserStudentTaskDelete,
};
