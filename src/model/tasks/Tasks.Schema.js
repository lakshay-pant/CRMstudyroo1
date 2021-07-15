const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
	clientId: {
		type: Schema.Types.ObjectId,
	},
	taskId: {
		type: String,
	},
	studentId: {
		type: String,
	},
	userId: {
		type: String,
	},
	userName: {
		type: String,
		maxlength: 50,
	},
	taskName: {
		type: String,
		maxlength: 50,
	},
	dueDate: {
		type: String,
		maxlength: 50,
	},
	taskDetails: {
		type: String,
		maxlength: 50,
	},
	studentAssign: {
		type: String,
		maxlength: 50,
		required: true,
	},
	taskStatus: {
		type: String,
		maxlength: 1000,
		required: true,
	},
	assignTo: {
		type: String,
		maxlength: 50,
		required: true,
	},

	userGroup: {
		type: String,
		maxlength: 50,
	},
	offices: {
		type: String,
		maxlength: 50,
		required: true,
	},
	type: {
		type: String,
		maxlength: 50,
		required: true,
	},
	addedAt: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = {
	taskSchema: mongoose.model('task', taskSchema),
};
