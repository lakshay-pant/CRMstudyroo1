const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leadTaskSchema = new Schema({
	statusNote: {
		type: String,
		maxlength: 50,
		required: true,
	},
	taskStatus: {
		type: String,
		maxlength: 1000,

		required: true,
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

		required: true,
	},
	taskStartTime: {
		type: String,
		maxlength: 1000,

		required: true,
	},
	taskEndTime: {
		type: String,
		maxlength: 1000,

		required: true,
	},
	taskEndDate: {
		type: String,
		maxlength: 1000,

		required: true,
	},
	taskNote: {
		type: String,
		maxlength: 1000,

		required: true,
	},
	assignee: {
		type: String,
		maxlength: 1000,

		required: true,
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
	taskSchema: mongoose.model('leadtask', leadTaskSchema),
};
