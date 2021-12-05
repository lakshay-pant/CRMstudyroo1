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
});

module.exports = {
	CourseSchema: mongoose.model('Course', CourseSchema),
};
