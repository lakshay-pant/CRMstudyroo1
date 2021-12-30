const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	firstName: {
		type: String,
		maxlength: 50,
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
	officeName: {
		type: String,
		maxlength: 50,
		required: true,
	},
	userGroup: {
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
		type: Number,
		maxlength: 50,
		required: true,
	},
	position: {
		type: String,
		maxlength: 50,
		required: true,
	},
	userGroupOffice: {
		type: String,
		maxlength: 50,
		required: true,
	},
	gender: {
		type: String,
		maxlength: 50,
		required: true,
	},

	accessJWT: {
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
	avatar: {
		type: Buffer,
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
			},
			taskStatus: {
				type: String,
				maxlength: 1000,
			},
			assignTo: {
				type: String,
				maxlength: 50,
			},

			userGroupOffice: {
				type: String,
				maxlength: 50,
			},
		},
	],
	userLeadTasks: [
		{
			statusNote: {
				type: String,
				maxlength: 50,
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
		},
	],
});

module.exports = {
	UserSchema: mongoose.model('User', UserSchema),
};
