const { string } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
	clientId: {
		type: Schema.Types.ObjectId,
	},

	publicName: {
		type: String,
		maxlength: 50,
		required: true,
	},
	status: {
		type: String,
		maxlength: 50,
	},
	nickName: {
		type: String,
		maxlength: 50,
	},
	type: {
		type: String,
		maxlength: 50,
	},
	code: {
		type: String,
		maxlength: 50,
	},
	slogan: {
		type: String,
		maxlength: 50,
	},
	sloganLanguage: {
		type: String,
		maxlength: 50,
	},
	aboutUsContent: {
		type: String,
		maxlength: 50,
	},
	aboutUsLanguage: {
		type: String,
		maxlength: 50,
	},
	websiteUrl: {
		type: String,
		maxlength: 50,
	},
	facebookUrl: {
		type: String,
		maxlength: 50,
	},
	youtubeUrl: {
		type: String,
		maxlength: 50,
	},
	instagramUrl: {
		type: String,
		maxlength: 50,
	},
	skypeId: {
		type: String,
		maxlength: 50,
	},
	averageAge: {
		type: String,
		maxlength: 50,
	},
	since: {
		type: String,
		maxlength: 50,
	},
});

module.exports = {
	CourseSchema: mongoose.model('Course', CourseSchema),
};
