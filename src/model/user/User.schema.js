const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	firstName: {
		type: String,
		maxlength: 50,
		required: true,
	},
	lastName: {
		type: String,
		maxlength: 50,
		required: true,
	},
	email: {
		type: String,
		maxlength: 50,
		required: true,
	},
	password: {
		type: String,
		minlength: 8,
		maxlength: 100,
		required: true,
	},
	birthdate: {
		type: String,
		maxlength: 50,
		required: true,
	},
	tele: {
		type: String,
		maxlength: 50,
		required: true,
	},
	gender: {
		type: String,
		maxlength: 50,
		required: true,
	},
	refreshJWT: {
		token: {
			type: String,
			maxlength: 500,
			default: '',
		},
		addedAt: {
			type: Date,
			required: true,
			default: Date.now(),
		},
	},
	isVerified: {
		type: Boolean,
		required: true,
		default: false,
	},
	userStudentTasks: [
		{
			taskId: {
				type: String,
			},
			studentId: {
				type: String,
			},
			userId: {
				type: String,
			},
			taskName: {
				type: String,
				maxlength: 50,
			},
			dueDate: {
				type: String,
				maxlength: 50,
			},
			type: {
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
		},
	],
	userLeadTasks: [
		{
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
		},
	],
});

module.exports = {
	UserSchema: mongoose.model('User', UserSchema),
};
