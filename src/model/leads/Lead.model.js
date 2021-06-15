const { LeadSchema } = require('./Lead.schema');

const insertLead = (LeadObj) => {
	return new Promise((resolve, reject) => {
		try {
			LeadSchema(LeadObj)
				.save()
				.then((data) => resolve(data))
				.catch((error) => reject(error));
		} catch (error) {
			reject(error);
		}
	});
};

const getLeads = (clientId) => {
	return new Promise((resolve, reject) => {
		try {
			LeadSchema.find({ clientId })
				.then((data) => resolve(data))
				.catch((error) => reject(error));
		} catch (error) {
			reject(error);
		}
	});
};

const getAllLeads = () => {
	return new Promise((resolve, reject) => {
		try {
			LeadSchema.find()
				.then((data) => resolve(data))
				.catch((error) => reject(error));
		} catch (error) {
			reject(error);
		}
	});
};

const getAllUsersLeadById = (_id) => {
	return new Promise((resolve, reject) => {
		try {
			LeadSchema.findOne({ _id })
				.then((data) => resolve(data))
				.catch((error) => reject(error));
		} catch (error) {
			reject(error);
		}
	});
};

const deleteLead = ({ _id }) => {
	return new Promise((resolve, reject) => {
		try {
			LeadSchema.findOneAndDelete({ _id })
				.then((data) => resolve(data))
				.catch((error) => reject(error));
		} catch (error) {
			reject(error);
		}
	});
};

const updateLeadTask = ({
	_id,
	statusNote,
	taskStatus,
	taskStartDate,
	taskEndDate,
	taskNote,
	assignee,
	taskCompleted,
	taskEndTime,
	taskStartTime,
}) => {
	return new Promise((resolve, reject) => {
		try {
			LeadSchema.findOneAndUpdate(
				{ _id },
				{
					status: 'Pending operator response',
					$push: {
						leadTasks: {
							statusNote,
							taskStatus,
							taskStartDate,
							taskEndDate,
							taskNote,
							assignee,
							taskCompleted,
							taskStartTime,
							taskEndTime,
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

const updateLeadTaskDelete = (id1, id2) => {
	return new Promise((resolve, reject) => {
		try {
			LeadSchema.findByIdAndUpdate(
				id1,
				{
					$pull: {
						leadTasks: {
							_id: id2,
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

const updateTaskLead = (
	id3,
	{
		statusNote,
		taskStatus,
		taskStartDate,
		taskStartTime,
		taskEndTime,
		taskEndDate,
		taskNote,
		assignee,
		taskCompleted,
	}
) => {
	return new Promise((resolve, reject) => {
		try {
			LeadSchema.findOneAndUpdate(
				{ 'leadTasks._id': id3 },
				{
					$set: {
						'leadTasks.$.statusNote': statusNote,
						'leadTasks.$.taskStatus': taskStatus,
						'leadTasks.$.taskStartDate': taskStartDate,
						'leadTasks.$.taskStartTime': taskStartTime,
						'leadTasks.$.taskEndTime': taskEndTime,
						'leadTasks.$.taskEndDate': taskEndDate,
						'leadTasks.$.taskNote': taskNote,
						'leadTasks.$.assignee': assignee,
						'leadTasks.$.taskCompleted': taskCompleted,
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
	insertLead,
	getLeads,
	deleteLead,
	getAllLeads,
	updateLeadTask,
	getAllUsersLeadById,
	updateLeadTaskDelete,
	updateTaskLead,
};
