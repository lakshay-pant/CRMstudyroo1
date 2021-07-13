const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeadTaskSchema = new Schema({
	statusNote: {
		type: String,
		maxlength: 50,
	},
	clientId: {
		type: Schema.Types.ObjectId,
	},
	taskStatus: {
		type: String,
		maxlength: 1000,
	},
	leadTaskUserId: {
		type: String,
	},
	userId: {
		type: String,
	},
	taskStartDate: {
		type: String,
		maxlength: 1000,
	},
	taskStartTime: {
		type: String,
		maxlength: 1000,
	},
	taskEndTime: {
		type: String,
		maxlength: 1000,
	},
	taskEndDate: {
		type: String,
		maxlength: 1000,
	},
	taskNote: {
		type: String,
		maxlength: 1000,
	},
	assignee: {
		type: String,
		maxlength: 1000,
	},
	taskCompleted: {
		type: Boolean,
		default: false,
	},

	msgAt: {
		type: Date,

		default: Date.now(),
	},
});

module.exports = {
	LeadTaskSchema: mongoose.model('leadtask', LeadTaskSchema),
};
