const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const {
	insertCourse,
	getCourses,
	getCourseById,
	getAllCourses,
	deleteAllUserCourse,
	getCourseAllUsersById,
} = require('../model/courses/Courses.model');
const {
	userAuthorization,
} = require('../middlewares/authorization.middleware');

router.all('/', (req, res, next) => {
	// res.json({ message: "return form ticket router" });

	next();
});

// create new student record
router.post('/', userAuthorization, async (req, res) => {
	const { publicName, status, nickName, type } = req.body;

	try {
		const userId = req.userId;

		const newUserObj = {
			clientId: userId,
			publicName,
			status,
			nickName,
			type,
		};
		console.log('yooo', newUserObj);
		const result = await insertCourse(newUserObj);
		console.log(result);

		if (result._id) {
			return res.json({
				status: 'success',
				message: 'New course has been added bc!',
			});
		}

		res.json({
			status: 'error',
			message: 'Unable to add new Course , please try again later',
		});
	} catch (error) {
		console.log(error);
		res.json({ status: 'error', message: error.message });
	}
});

// Get all students
router.get('/', userAuthorization, async (req, res) => {
	try {
		const userId = req.userId;
		const result = await getCourses(userId);

		return res.json({
			status: 'success',
			result,
		});
	} catch (error) {
		res.json({ status: 'error', message: error.message });
	}
});

//Get all courses of all users
router.get('/all-courses', userAuthorization, async (req, res) => {
	try {
		const result = await getAllCourses();

		return res.json({
			status: 'success',
			result,
		});
	} catch (error) {
		res.json({ status: 'error', message: error.message });
	}
});

// Get specific student by id
router.get('/:_id', userAuthorization, async (req, res) => {
	try {
		const { _id } = req.params;

		const result = await getCourseById(_id);

		return res.json({
			status: 'success',
			result,
		});
	} catch (error) {
		res.json({ status: 'error', message: error.message });
	}
});

//update all courses

router.patch('/:_id', userAuthorization, async (req, res) => {
	try {
		const { _id } = req.params;

		var {
			publicName,
			status,
			nickName,
			type,
			code,
			slogan,
			sloganLanguage,
			aboutUsContent,
			aboutUsLanguage,
			websiteUrl,
			facebookUrl,
			youtubeUrl,
			instagramUrl,
			skypeId,
			averageAge,
			since,
		} = req.body;

		const userProf = await getCourseAllUsersById(_id);
		userProf.publicName = publicName ? publicName : userProf.publicName;
		userProf.status = status ? status : userProf.status;
		userProf.nickName = nickName ? nickName : userProf.nickName;
		userProf.type = type ? type : userProf.type;
		userProf.code = code ? code : userProf.code;
		userProf.slogan = slogan ? slogan : userProf.slogan;
		userProf.sloganLanguage = sloganLanguage
			? sloganLanguage
			: userProf.sloganLanguage;
		userProf.aboutUsContent = aboutUsContent
			? aboutUsContent
			: userProf.aboutUsContent;
		userProf.aboutUsLanguage = aboutUsLanguage
			? aboutUsLanguage
			: userProf.aboutUsLanguage;
		userProf.websiteUrl = websiteUrl ? websiteUrl : userProf.websiteUrl;
		userProf.facebookUrl = facebookUrl ? facebookUrl : userProf.facebookUrl;
		userProf.youtubeUrl = youtubeUrl ? youtubeUrl : userProf.youtubeUrl;
		userProf.instagramUrl = instagramUrl ? instagramUrl : userProf.instagramUrl;
		userProf.skypeId = skypeId ? skypeId : userProf.skypeId;
		userProf.averageAge = averageAge ? averageAge : userProf.averageAge;
		userProf.since = since ? since : userProf.since;

		const result = await insertCourse(userProf);

		res.json({ status: 'success', message: 'Course updated' });
	} catch (error) {
		console.log(error);
		res.json({ status: 'error', message: error.message });
	}
});

// Delete a student record
router.delete('/:_id', userAuthorization, async (req, res) => {
	try {
		const { _id } = req.params;

		const result = await deleteAllUserCourse({ _id });

		return res.json({
			status: 'success',
			message: 'The student record has been deleted',
		});
	} catch (error) {
		res.json({ status: 'error', message: error.message });
	}
});

module.exports = router;
