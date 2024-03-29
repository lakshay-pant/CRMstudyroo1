const { string } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeadSchema = new Schema({
	clientId: {
		type: Schema.Types.ObjectId,
	},

	leadUserName: {
		type: String,
		maxlength: 50,
	},
	leadMessage: {
		type: String,
		maxlength: 100,
	},
	leadService: {
		type: String,
		maxlength: 100,
	},
	leadFirstName: {
		type: String,
		maxlength: 50,
	},
	leadBirthday: {
		type: String,
		maxlength: 50,
	},
	leadMiddleName: {
		type: String,
		maxlength: 50,
	},
	leadlastName: {
		type: String,
		maxlength: 50,
	},

	leadNationality: {
		type: String,
		maxlength: 50,
	},
	leadGender: {
		type: String,
		maxlength: 50,
	},

	leadOnShorePhone: {
		type: Number,
		maxlength: 50,
	},
	leadOffShorePhone: {
		type: Number,
		maxlength: 50,
	},
	leadLevel: {
		type: String,
		maxlength: 50,
	},
	leadEmail: {
		type: String,
		maxlength: 50,
	},
	leadOnShoreLocation: {
		type: String,
		maxlength: 50,
	},
	leadOffShoreLocation: {
		type: String,
		maxlength: 50,
	},
	leadLocationStatus: {
		type: String,
		maxlength: 50,
	},
	leadFixDate: {
		type: String,
		maxlength: 50,
	},
	leadRefferalSource: {
		type: String,
		maxlength: 50,
	},
	leadTasks: [
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
	addedAt: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = {
	LeadSchema: mongoose.model('Lead', LeadSchema),
};
