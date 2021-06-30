const { StudentSchema } = require('./Student.schema');

const insertStudent = (studentObj) => {
	return new Promise((resolve, reject) => {
		try {
			StudentSchema(studentObj)
				.save()
				.then((data) => resolve(data))
				.catch((error) => reject(error));
		} catch (error) {
			reject(error);
		}
	});
};

const getStudents = (clientId) => {
	return new Promise((resolve, reject) => {
		try {
			StudentSchema.find({ clientId })
				.then((data) => resolve(data))
				.catch((error) => reject(error));
		} catch (error) {
			reject(error);
		}
	});
};

const getAllStudents = () => {
	return new Promise((resolve, reject) => {
		try {
			StudentSchema.find()
				.then((data) => resolve(data))
				.catch((error) => reject(error));
		} catch (error) {
			reject(error);
		}
	});
};

const getStudentById = (_id, clientId) => {
	return new Promise((resolve, reject) => {
		try {
			StudentSchema.findOne({ _id, clientId })
				.then((data) => resolve(data))
				.catch((error) => reject(error));
		} catch (error) {
			reject(error);
		}
	});
};

const getStudentAllUsersById = (_id) => {
	return new Promise((resolve, reject) => {
		try {
			StudentSchema.findOne({ _id })
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

const deleteAllUserStudent = ({ _id }) => {
	return new Promise((resolve, reject) => {
		try {
			StudentSchema.findOneAndDelete({ _id })
				.then((data) => resolve(data))
				.catch((error) => reject(error));
		} catch (error) {
			reject(error);
		}
	});
};
const updateStudentTask = ({
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
}) => {
	return new Promise((resolve, reject) => {
		try {
			StudentSchema.findOneAndUpdate(
				{ _id },
				{
					status: 'Pending operator response',
					$push: {
						studentTasks: {
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
const updateStudentTaskDelete = (id1, id2) => {
	return new Promise((resolve, reject) => {
		try {
			StudentSchema.findByIdAndUpdate(
				id1,
				{
					$pull: {
						studentTasks: {
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

const updateTaskStudent = (
	id3,
	{ taskName, dueDate, taskDetails, taskStatus, userGroup, offices, type }
) => {
	return new Promise((resolve, reject) => {
		try {
			StudentSchema.findOneAndUpdate(
				{ 'studentTasks.taskId': id3 },
				{
					$set: {
						'studentTasks.$.taskName': taskName,
						'studentTasks.$.dueDate': dueDate,
						'studentTasks.$.taskStatus': taskStatus,
						'studentTasks.$.taskDetails': taskDetails,
						'studentTasks.$.userGroup': userGroup,
						'studentTasks.$.offices': offices,
						'studentTasks.$.type': type,
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
	insertStudent,
	getStudents,
	getStudentById,
	deleteStudent,
	getAllStudents,
	getStudentAllUsersById,
	deleteAllUserStudent,
	updateStudentTask,
	updateStudentTaskDelete,
	updateTaskStudent,
};
