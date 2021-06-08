const { LeadSchema } = require('./Lead.schema');

const updateLeadTaskDelete = (id1, id2) => {
	return new Promise((resolve, reject) => {
		try {
			LeadSchema.findByIdAndUpdate(id1, {
				$pull: {
					leadTasks: {
						_id: id2,
					},
				},
			})
				.then((data) => resolve(data))
				.catch((error) => reject(error));
		} catch (error) {
			reject(error);
		}
	});
};

module.exports = {
	updateLeadTaskDelete,
};
