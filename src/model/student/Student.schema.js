const { string } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
	clientId: {
		type: Schema.Types.ObjectId,
	},

	userName: {
		type: String,
		maxlength: 50,
	},
	firstName: {
		type: String,
		maxlength: 50,
	},
	middleName: {
		type: String,
		maxlength: 50,
	},
	lastName: {
		type: String,
		maxlength: 50,
	},
	birthday: {
		type: String,
		maxlength: 50,
	},
	nation: {
		type: String,
		maxlength: 50,
	},
	genders: {
		type: String,
		maxlength: 50,
	},

	onShorePhone: {
		type: String,
		maxlength: 11,
	},
	offShorePhone: {
		type: String,
		maxlength: 11,
	},
	salesPipeline: {
		type: String,
		maxlength: 50,
	},
	salesStatus: {
		type: String,
		maxlength: 50,
	},
	heatLevel: {
		type: String,
		maxlength: 50,
	},
	email: {
		type: String,
		maxlength: 50,
	},
	note: {
		type: String,
		maxlength: 100,
	},
	onShoreCurrentLocation: {
		type: String,
		maxlength: 100,
	},
	offShoreCurrentLocation: {
		type: String,
		maxlength: 100,
	},
	onShoreAddress: {
		type: String,
		maxlength: 100,
	},
	onShoreLocation: {
		type: String,
		maxlength: 100,
	},
	unitNumber: {
		type: String,
		maxlength: 100,
	},
	streetNumber: {
		type: String,
		maxlength: 100,
	},
	streetName: {
		type: String,
		maxlength: 100,
	},
	city: {
		type: String,
		maxlength: 100,
	},
	country: {
		type: String,
		maxlength: 100,
	},
	zipCode: {
		type: String,
		maxlength: 100,
	},

	offShoreAddress: {
		type: String,
		maxlength: 100,
	},
	offShoreLocation: {
		type: String,
		maxlength: 100,
	},
	offShoreUnitNumber: {
		type: String,
		maxlength: 100,
	},
	offShoreStreetNumber: {
		type: String,
		maxlength: 100,
	},
	streetNa: {
		type: String,
		maxlength: 100,
	},
	offShoreCity: {
		type: String,
		maxlength: 100,
	},
	offShoreCountry: {
		type: String,
		maxlength: 100,
	},
	offShoreZipCode: {
		type: String,
		maxlength: 100,
	},
	usi: {
		type: String,
		maxlength: 100,
	},
	educationLevel: {
		type: String,
		maxlength: 100,
	},
	instituteName: {
		type: String,
		maxlength: 100,
	},
	gpa: {
		type: String,
		maxlength: 100,
	},
	yearLevel: {
		type: String,
		maxlength: 100,
	},
	schoolCurriculum: {
		type: String,
		maxlength: 100,
	},
	schoolCurriculumDetails: {
		type: String,
		maxlength: 100,
	},
	passNumber: {
		type: String,
		maxlength: 100,
	},
	passNationality: {
		type: String,
		maxlength: 100,
	},
	passIssueDate: {
		type: String,
		maxlength: 100,
	},
	passExpiryDate: {
		type: String,
		maxlength: 100,
	},
	passComments: {
		type: String,
		maxlength: 100,
	},
	grantDate: {
		type: String,
		maxlength: 100,
	},
	visaExpiryDate: {
		type: String,
		maxlength: 100,
	},
	visaType: {
		type: String,
		maxlength: 100,
	},
	visaComments: {
		type: String,
		maxlength: 100,
	},
	insuranceStartDate: {
		type: String,
		maxlength: 100,
	},
	insuranceExpiryDate: {
		type: String,
		maxlength: 100,
	},
	insuranceType: {
		type: String,
		maxlength: 100,
	},
	insuranceNumber: {
		type: String,
		maxlength: 100,
	},
	insuranceComment: {
		type: String,
		maxlength: 100,
	},
	otherComments: {
		type: String,
		maxlength: 100,
	},
	locationStatus: {
		type: String,
		maxlength: 100,
	},
	referalSource: {
		type: String,
		maxlength: 100,
	},
	addedAt: {
		type: Date,
		default: Date.now(),
	},
	passPortImage: {
		type: String,
	},
	certificateImage: {
		type: String,
	},
	taxId: {
		type: String,
		maxlength: 100,
	},
	lastVisited: {
		type: String,
		maxlength: 50,
	},
	lastContacted: {
		type: String,
		maxlength: 50,
	},
	departureFrom: {
		type: String,
		maxlength: 50,
	},
	departureTo: {
		type: String,
		maxlength: 50,
	},
	departureBooking: {
		type: String,
		maxlength: 50,
	},
	departureBookingRef: {
		type: String,
		maxlength: 50,
	},
	departureArrTime: {
		type: String,
		maxlength: 50,
	},
	departureDate: {
		type: String,
		maxlength: 50,
	},

	departureFlightNo: {
		type: String,
		maxlength: 50,
	},
	departureAirline: {
		type: String,
		maxlength: 50,
	},
	departureAirport: {
		type: String,
		maxlength: 50,
	},
	arrivalDate: {
		type: String,
		maxlength: 50,
	},
	arrivalFlightNo: {
		type: String,
		maxlength: 50,
	},
	arrivalAirline: {
		type: String,
		maxlength: 50,
	},
	arrivalAirport: {
		type: String,
		maxlength: 50,
	},

	studentTasks: [
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
});

module.exports = {
	StudentSchema: mongoose.model('Student', StudentSchema),
};
