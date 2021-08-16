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
		type: Number,
		maxlength: 50,
		required: true,
	},
	position: {
		type: String,
		maxlength: 50,
	},
	officeName: {
		type: String,
		maxlength: 50,
	},
	groupUser: {
		type: String,
		maxlength: 50,
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

UserSchema.methods.toJSON = function () {
	const user = this;
	const userObject = user.toObject();

	delete userObject.password;
	delete userObject.refreshJWT;

	return userObject;
};

module.exports = {
	UserSchema: mongoose.model('User', UserSchema),
};
