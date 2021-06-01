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
		required: true,
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
		type: Number,
		maxlength: 11,
	},
	offShorePhone: {
		type: Number,
		maxlength: 11,
	},
	salesPipeline: {
		type: String,
		maxlength: 50,
		required: true,
	},
	salesStatus: {
		type: String,
		maxlength: 50,
		required: true,
	},
	heatLevel: {
		type: String,
		maxlength: 50,
		required: true,
	},
	email: {
		type: String,
		maxlength: 50,
		required: true,
	},
	note: {
		type: String,
		maxlength: 100,
		required: true,
	},
	onShoreCurrentLocation: {
		type: String,
		maxlength: 100,
		required: true,
	},
	offShoreCurrentLocation: {
		type: String,
		maxlength: 100,
		required: true,
	},
	onShoreAddress: {
		type: String,
		maxlength: 100,
		required: true,
	},
	onShoreLocation: {
		type: String,
		maxlength: 100,
		required: true,
	},
	unitNumber: {
		type: String,
		maxlength: 100,
		required: true,
	},
	streetNumber: {
		type: String,
		maxlength: 100,
		required: true,
	},
	streetName: {
		type: String,
		maxlength: 100,
		required: true,
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
		required: true,
	},

	offShoreAdress: {
		type: String,
		maxlength: 100,
		required: true,
	},
	offShoreLocation: {
		type: String,
		maxlength: 100,
		required: true,
	},
	offShoreUnitNumber: {
		type: String,
		maxlength: 100,
		required: true,
	},
	offShoreStreetNumber: {
		type: String,
		maxlength: 100,
		required: true,
	},
	streetNa: {
		type: String,
		maxlength: 100,
		required: true,
	},
	offShoreCity: {
		type: String,
		maxlength: 100,
		required: true,
	},
	offShoreCountry: {
		type: String,
		maxlength: 100,
	},
	offShoreZipCode: {
		type: String,
		maxlength: 100,
		required: true,
	},
	usi: {
		type: String,
		maxlength: 100,
		required: true,
	},
	educationLevel: {
		type: String,
		maxlength: 100,
		required: true,
	},
	instituteName: {
		type: String,
		maxlength: 100,
		required: true,
	},
	gpa: {
		type: String,
		maxlength: 100,
		required: true,
	},
	yearLevel: {
		type: String,
		maxlength: 100,
		required: true,
	},
	schoolCurriculum: {
		type: String,
		maxlength: 100,
		required: true,
	},
	schoolCurriculumDetails: {
		type: String,
		maxlength: 100,
		required: true,
	},
	passNumber: {
		type: String,
		maxlength: 100,
		required: true,
	},
	passNationality: {
		type: String,
		maxlength: 100,
		required: true,
	},
	passIssueDate: {
		type: String,
		maxlength: 100,
		required: true,
	},
	passExpiryDate: {
		type: String,
		maxlength: 100,
		required: true,
	},
	passComments: {
		type: String,
		maxlength: 100,
		required: true,
	},
	grantDate: {
		type: String,
		maxlength: 100,
		required: true,
	},
	visaExpiryDate: {
		type: String,
		maxlength: 100,
		required: true,
	},
	visaType: {
		type: String,
		maxlength: 100,
		required: true,
	},
	visaComments: {
		type: String,
		maxlength: 100,
		required: true,
	},
	insuranceStartDate: {
		type: String,
		maxlength: 100,
		required: true,
	},
	insuranceExpiryDate: {
		type: String,
		maxlength: 100,
		required: true,
	},
	insuranceType: {
		type: String,
		maxlength: 100,
		required: true,
	},
	insuranceNumber: {
		type: String,
		maxlength: 100,
		required: true,
	},
	insuranceComment: {
		type: String,
		maxlength: 100,
		required: true,
	},
	otherComments: {
		type: String,
		maxlength: 100,
		required: true,
	},
	locationStatus: {
		type: String,
		maxlength: 100,
	},
	referalSource: {
		type: String,
		maxlength: 100,
		required: true,
	},
	addedAt: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = {
	StudentSchema: mongoose.model('Student', StudentSchema),
};
