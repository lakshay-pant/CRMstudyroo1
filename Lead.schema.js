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
	leadFirstName: {
		type: String,
		maxlength: 50,
		 required: true,
	},leadMessage: {
		type: String,
		maxlength: 50,
	},
	leadService: {
		type: String,
		maxlength: 50,
	},
	leadBirthday: {
		type: String,
		maxlength: 50,
		 required: true,
	},
	leadMiddleName: {
		type: String,
		maxlength: 50,
	},
	leadLastName: {
		type: String,
		maxlength: 50,
		 required: true,
		
	},

	leadNationality: {
		type: String,
		maxlength: 50,
		 required: true,
	},
	leadGender: {
		type: String,
		maxlength: 50,
	},

	leadOnShorePhone: {
		type: Number,
		maxlength: 11,
		 required: true,

	},
	leadOffShorePhone: {
		type: Number,
		maxlength: 11,
	},
	leadLevel: {
		type: String,
		maxlength: 50,
	},
	leadEmail: {
		type: String,
		maxlength: 50,
		 required: true,
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
	leadRefferalSource: {
		type: String,
		maxlength: 50,
	},
	leadMessage: {
		type: String,
		maxlength: 50,
	},
	leadService: {
		type: String,
		maxlength: 50,
	},


	leadTasks: [
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
	addedAt: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = {
	LeadSchema: mongoose.model('Lead', LeadSchema),
};
