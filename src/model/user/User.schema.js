const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	firstName: {
		type: String,
		maxlength: 50,
	},
	kind: {
		type: String,
		maxlength: 50,
	},
	assigneeAdmin: {
		type: String,
		maxlength: 50,
	},
	adminId: {
		type: Schema.Types.ObjectId,
	},

	lastName: {
		type: String,
		maxlength: 50,
	},
	email: {
		type: String,
		maxlength: 50,
	},
	officeName: {
		type: String,
		maxlength: 50,
	},
	userGroup: {
		type: String,
		maxlength: 50,
	},
	userRoles: {
		type: String,
		maxlength: 50,
	},
	password: {
		type: String,
		minlength: 8,
		maxlength: 100,
	},
	birthdate: {
		type: String,
		maxlength: 50,
	},
	tele: {
		type: Number,
		maxlength: 50,
	},
	position: {
		type: String,
		maxlength: 50,
	},
	userGroupOffice: {
		type: String,
		maxlength: 50,
	},
	gender: {
		type: String,
		maxlength: 50,
	},

	accessJWT: {
		token: {
			type: String,
			maxlength: 500,
			default: '',
		},
		addedAt: {
			type: Date,

			default: Date.now(),
		},
	},
	avatar: {
		type: Buffer,
	},
	isVerified: {
		type: Boolean,

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
	office: [
		{
			officename: {
				type: String,
				maxlength: 50,
			},
			officePhone: {
				type: String,
				maxlength: 1000,
			},
			officeEmail: {
				type: String,
			},
			officeAddress: {
				type: String,
			},
			officeStreetNumber: {
				type: String,
				maxlength: 1000,
			},

			officeStreetName: {
				type: String,
				maxlength: 1000,
			},
			officeCity: {
				type: String,
				maxlength: 1000,
			},
			officeCountry: {
				type: String,
				maxlength: 1000,
			},
			officeZipcode: {
				type: String,
				maxlength: 1000,
			},
			officeLegalName: {
				type: String,
				maxlength: 1000,
			},
			officeCorporationId: {
				type: String,
				maxlength: 1000,
			},
			officeCurrency: {
				type: String,
				maxlength: 1000,
			},
			officeStudentStatus: {
				type: String,
				maxlength: 1000,
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
