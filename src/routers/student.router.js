const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const {
	insertStudent,
	getStudents,
	getStudentById,
	deleteStudent,
	getAllStudents,
	getStudentAllUsersById,
	deleteAllUserStudent,
	updateStudentTask,
	updateStudentTaskDelete,
	updateTaskStudent,
	getUserNameById,
} = require('../model/student/Student.model');
const {
	userAuthorization,
} = require('../middlewares/authorization.middleware');

router.all('/', (req, res, next) => {
	// res.json({ message: "return form ticket router" });

	next();
});

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './public/images');
	},
	filename: function (req, file, cb) {
		cb(
			null,
			file.fieldname + '-' + Date.now() + path.extname(file.originalname)
		);
	},
});

const fileFilter = (req, file, cb) => {
	//reject a file
	if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

// create new student record
router.post('/studyroo', async (req, res) => {
	const {
		firstName,
		lastName,
		birthday,
		nation,
		email,
		onShorePhone,
		note,
		services,
	} = req.body;

	try {
		const newUserObj = {
			firstName,
			lastName,
			birthday,
			email,
			onShorePhone,
			note,
			nation,
			services,
		};
		const result = await insertStudent(newUserObj);
		console.log(result);

		if (result._id) {
			return res.json({
				status: 'success',
				message: 'New student has been added!',
			});
		}

		res.json({
			status: 'error',
			message: 'Unable to add new student , please try again later',
		});
	} catch (error) {
		console.log(error);
		res.json({ status: 'error', message: error.message });
	}
});

// create new student record
router.post(
	'/',
	upload.single('file'),

	userAuthorization,
	async (req, res) => {
		const {
			firstName,
			middleName,
			lastName,
			birthday,
			genders,
			nation,
			email,
			onShorePhone,
			offShorePhone,
			salesPipeline,
			salesStatus,
			heatLevel,
			note,
			onShoreCurrentLocation,
			offShoreCurrentLocation,
			onShoreAddress,
			onShoreLocation,
			unitNumber,
			streetNumber,
			streetName,
			city,
			country,
			zipCode,
			offShoreAddress,
			offShoreLocation,
			offShoreUnitNumber,
			offShoreStreetNumber,
			streetNa,
			offShoreCity,
			offShoreCountry,
			offShoreZipCode,
			usi,
			educationLevel,
			instituteName,
			gpa,
			yearLevel,
			schoolCurriculum,
			schoolCurriculumDetails,
			passNumber,
			passNationality,
			passIssueDate,
			passExpiryDate,
			passComments,
			grantDate,
			visaExpiryDate,
			visaType,
			visaComments,
			insuranceStartDate,
			insuranceExpiryDate,
			insuranceType,
			insuranceNumber,
			insuranceComment,
			otherComments,
			locationStatus,
			referalSource,
		} = req.body;

		try {
			const userId = req.userId;
			const userName = await getUserNameById(userId);

			const newUserObj = {
				clientId: userId,
				userName: userName.firstName,
				firstName,
				middleName,
				lastName,
				birthday,
				genders,
				email,
				onShorePhone,
				offShorePhone,
				salesPipeline,
				salesStatus,
				heatLevel,
				note,
				nation,
				onShoreCurrentLocation,
				offShoreCurrentLocation,
				onShoreAddress,
				onShoreLocation,
				unitNumber,
				streetNumber,
				streetName,
				city,
				country,
				zipCode,
				offShoreAddress,
				offShoreLocation,
				offShoreUnitNumber,
				offShoreStreetNumber,
				streetNa,
				offShoreCity,
				offShoreCountry,
				offShoreZipCode,
				usi,
				educationLevel,
				instituteName,
				gpa,
				yearLevel,
				schoolCurriculum,
				schoolCurriculumDetails,
				passNumber,
				passNationality,
				passIssueDate,
				passExpiryDate,
				passComments,
				grantDate,
				visaExpiryDate,
				visaType,
				visaComments,
				insuranceStartDate,
				insuranceExpiryDate,
				insuranceType,
				insuranceNumber,
				insuranceComment,
				otherComments,
				locationStatus,
				referalSource,
			};
			const result = await insertStudent(newUserObj);
			console.log(result);

			if (result._id) {
				return res.json({
					status: 'success',
					message: 'New student has been added!',
				});
			}

			res.json({
				status: 'error',
				message: 'Unable to add new student , please try again later',
			});
		} catch (error) {
			console.log(error);
			res.json({ status: 'error', message: error.message });
		}
	}
);

// Get all students
router.get('/', userAuthorization, async (req, res) => {
	try {
		const userId = req.userId;
		const result = await getStudents(userId);

		return res.json({
			status: 'success',
			result,
		});
	} catch (error) {
		res.json({ status: 'error', message: error.message });
	}
});

//Get all students
router.get('/all-students', userAuthorization, async (req, res) => {
	try {
		const result = await getAllStudents();

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

		const result = await getStudentById(_id);

		return res.json({
			status: 'success',
			result,
		});
	} catch (error) {
		res.json({ status: 'error', message: error.message });
	}
});

//put student task

router.put('/:_id', userAuthorization, async (req, res) => {
	try {
		const {
			taskName,
			dueDate,
			taskDetails,
			studentAssign,
			type,
			taskStatus,
			assignTo,
			userGroupOffice,
			taskId,
			studentId,
			userId,
		} = req.body;

		const { _id } = req.params;
		const clientId = req.userId;

		const result = await updateStudentTask({
			_id,
			taskName,
			dueDate,
			taskDetails,
			studentAssign,
			taskStatus,
			assignTo,
			userGroupOffice,
			type,
			taskId,
			studentId,
			userId,
		});

		if (result._id) {
			return res.json({
				status: 'success',
				message: 'your Student Task has been added....',
			});
		}
		res.json({
			status: 'error',
			message: 'Unable to update student task',
		});
	} catch (error) {
		res.json({ status: 'error', message: error.message });
	}
});

//update Student Task

router.put('/:fruitName/:fruitColor', userAuthorization, async (req, res) => {
	try {
		const name = req.params.fruitName;
		const color = req.params.fruitColor;
		console.log(color);
		var {
			taskName,
			dueDate,
			taskDetails,
			type,
			taskStatus,

			userGroupOffice,
		} = req.body;
		const result = await updateTaskStudent(color, {
			taskName,
			dueDate,
			taskDetails,
			type,
			taskStatus,
			userGroupOffice,
		});

		if (result._id) {
			return res.json({
				status: 'success',
				message: 'your Student task has been updated',
			});
		}
		res.json({
			status: 'error',
			message: 'Unable to update student task ',
		});
	} catch (error) {
		res.json({ status: 'error', message: error.message });
	}
});

//update all student

router.patch('/:_id', userAuthorization, async (req, res) => {
	try {
		const { _id } = req.params;

		var {
			firstName,
			userName,
			middleName,
			lastName,
			birthday,
			genders,
			nation,
			email,
			onShorePhone,
			offShorePhone,
			salesPipeline,
			salesStatus,
			heatLevel,
			note,
			onShoreCurrentLocation,
			offShoreCurrentLocation,
			onShoreAddress,
			onShoreLocation,
			unitNumber,
			streetNumber,
			streetName,
			city,
			country,
			zipCode,
			offShoreAddress,
			offShoreLocation,
			offShoreUnitNumber,
			offShoreStreetNumber,
			streetNa,
			offShoreCity,
			offShoreCountry,
			offShoreZipCode,
			usi,
			educationLevel,
			instituteName,
			gpa,
			yearLevel,
			schoolCurriculum,
			schoolCurriculumDetails,
			passNumber,
			passNationality,
			passIssueDate,
			passExpiryDate,
			passComments,
			grantDate,
			visaExpiryDate,
			visaType,
			visaComments,
			insuranceStartDate,
			insuranceExpiryDate,
			insuranceType,
			insuranceNumber,
			insuranceComment,
			otherComments,
			locationStatus,
			referalSource,
			taxId,
			lastVisited,
			lastContacted,
			departureFrom,
			departureTo,
			departureBooking,
			departureBookingRef,
			departureArrTime,
			departureDate,
			departureFlightNo,
			departureAirline,
			departureAirport,
			arrivalDate,
			arrivalFlightNo,
			arrivalAirline,
			arrivalAirport,
		} = req.body;

		const userProf = await getStudentAllUsersById(_id);
		userProf.arrivalAirport = arrivalAirport
			? arrivalAirport
			: userProf.arrivalAirport;
		userProf.arrivalAirline = arrivalAirline
			? arrivalAirline
			: userProf.arrivalAirline;
		userProf.arrivalFlightNo = arrivalFlightNo
			? arrivalFlightNo
			: userProf.arrivalFlightNo;
		userProf.arrivalDate = arrivalDate ? arrivalDate : userProf.arrivalDate;
		userProf.departureAirport = departureAirport
			? departureAirport
			: userProf.departureAirport;
		userProf.departureAirline = departureAirline
			? departureAirline
			: userProf.departureAirline;
		userProf.departureFlightNo = departureFlightNo
			? departureFlightNo
			: userProf.departureFlightNo;
		userProf.departureDate = departureDate
			? departureDate
			: userProf.departureDate;
		userProf.departureArrTime = departureArrTime
			? departureArrTime
			: userProf.departureArrTime;
		userProf.departureBookingRef = departureBookingRef
			? departureBookingRef
			: userProf.departureBookingRef;
		userProf.departureBooking = departureBooking
			? departureBooking
			: userProf.departureBooking;
		userProf.departureTo = departureTo ? departureTo : userProf.departureTo;
		userProf.departureFrom = departureFrom
			? departureFrom
			: userProf.departureFrom;
		userProf.lastContacted = lastContacted
			? lastContacted
			: userProf.lastContacted;
		userProf.lastVisited = lastVisited ? lastVisited : userProf.lastVisited;
		userProf.taxId = taxId ? taxId : userProf.taxId;
		userProf.firstName = firstName ? firstName : userProf.firstName;
		userProf.userName = userName ? userName : userProf.userName;
		userProf.middleName = middleName ? middleName : userProf.middleName;
		userProf.lastName = lastName ? lastName : userProf.lastName;
		userProf.birthday = birthday ? birthday : userProf.birthday;
		userProf.genders = genders ? genders : userProf.genders;
		userProf.onShorePhone = onShorePhone ? onShorePhone : userProf.onShorePhone;
		userProf.offShorePhone = offShorePhone
			? offShorePhone
			: userProf.offShorePhone;
		userProf.salesPipeline = salesPipeline
			? salesPipeline
			: userProf.salesPipeline;
		userProf.salesStatus = salesStatus ? salesStatus : userProf.salesStatus;
		userProf.heatLevel = heatLevel ? heatLevel : userProf.heatLevel;
		userProf.note = note ? note : userProf.note;
		userProf.nation = nation ? nation : userProf.nation;
		userProf.email = email ? email : userProf.email;
		userProf.onShoreCurrentLocation = onShoreCurrentLocation
			? onShoreCurrentLocation
			: userProf.onShoreCurrentLocation;
		userProf.offShoreCurrentLocation = offShoreCurrentLocation
			? offShoreCurrentLocation
			: userProf.offShoreCurrentLocation;
		userProf.onShoreAddress = onShoreAddress
			? onShoreAddress
			: userProf.onShoreAddress;
		userProf.onShoreLocation = onShoreLocation
			? onShoreLocation
			: userProf.onShoreLocation;
		userProf.unitNumber = unitNumber ? unitNumber : userProf.unitNumber;
		userProf.streetNumber = streetNumber ? streetNumber : userProf.streetNumber;
		userProf.streetName = streetName ? streetName : userProf.streetName;
		userProf.city = city ? city : userProf.city;
		userProf.country = country ? country : userProf.country;
		userProf.zipCode = zipCode ? zipCode : userProf.zipCode;
		userProf.offShoreAddress = offShoreAddress
			? offShoreAddress
			: userProf.offShoreAddress;
		userProf.offShoreLocation = offShoreLocation
			? offShoreLocation
			: userProf.offShoreLocation;
		userProf.offShoreUnitNumber = offShoreUnitNumber
			? offShoreUnitNumber
			: userProf.offShoreUnitNumber;
		userProf.offShoreStreetNumber = offShoreStreetNumber
			? offShoreStreetNumber
			: userProf.offShoreStreetNumber;
		userProf.streetNa = streetNa ? streetNa : userProf.streetNa;
		userProf.offShoreCity = offShoreCity ? offShoreCity : userProf.offShoreCity;
		userProf.offShoreCountry = offShoreCountry
			? offShoreCountry
			: userProf.offShoreCountry;
		userProf.offShoreZipCode = offShoreZipCode
			? offShoreZipCode
			: userProf.offShoreZipCode;
		userProf.usi = usi ? usi : userProf.usi;
		userProf.educationLevel = educationLevel
			? educationLevel
			: userProf.educationLevel;
		userProf.instituteName = instituteName
			? instituteName
			: userProf.instituteName;
		userProf.gpa = gpa ? gpa : userProf.gpa;
		userProf.yearLevel = yearLevel ? yearLevel : userProf.yearLevel;
		userProf.schoolCurriculum = schoolCurriculum
			? schoolCurriculum
			: userProf.schoolCurriculum;
		userProf.schoolCurriculumDetails = schoolCurriculumDetails
			? schoolCurriculumDetails
			: userProf.schoolCurriculumDetails;
		userProf.passNumber = passNumber ? passNumber : userProf.passNumber;
		userProf.passNationality = passNationality
			? passNationality
			: userProf.passNationality;
		userProf.passIssueDate = passIssueDate
			? passIssueDate
			: userProf.passIssueDate;
		userProf.passExpiryDate = passExpiryDate
			? passExpiryDate
			: userProf.passExpiryDate;
		userProf.passComments = passComments ? passComments : userProf.passComments;
		userProf.grantDate = grantDate ? grantDate : userProf.grantDate;
		userProf.visaExpiryDate = visaExpiryDate
			? visaExpiryDate
			: userProf.visaExpiryDate;
		userProf.visaType = visaType ? visaType : userProf.visaType;
		userProf.visaComments = visaComments ? visaComments : userProf.visaComments;
		userProf.insuranceStartDate = insuranceStartDate
			? insuranceStartDate
			: userProf.insuranceStartDate;
		userProf.insuranceExpiryDate = insuranceExpiryDate
			? insuranceExpiryDate
			: userProf.insuranceExpiryDate;
		userProf.insuranceType = insuranceType
			? insuranceType
			: userProf.insuranceType;
		userProf.insuranceNumber = insuranceNumber
			? insuranceNumber
			: userProf.insuranceNumber;
		userProf.insuranceComment = insuranceComment
			? insuranceComment
			: userProf.insuranceComment;
		userProf.otherComments = otherComments
			? otherComments
			: userProf.otherComments;
		userProf.locationStatus = locationStatus
			? locationStatus
			: userProf.locationStatus;
		userProf.referalSource = referalSource
			? referalSource
			: userProf.referalSource;

		const result = await insertStudent(userProf);

		res.json({ status: 'success', message: 'student updated' });
	} catch (error) {
		console.log(error);
		res.json({ status: 'error', message: error.message });
	}
});

//delete Student Task

router.delete(
	'/:fruitName/:fruitColor',
	userAuthorization,
	async (req, res) => {
		try {
			const name = req.params.fruitName;
			const color = req.params.fruitColor;
			const result = await updateStudentTaskDelete(name, color);

			if (result._id) {
				return res.json({
					status: 'success',
					message: 'Student task has been deleted',
				});
			}
			res.json({
				status: 'error',
				message: 'Unable to delete student task',
			});
		} catch (error) {
			res.json({ status: 'error', message: error.message });
		}
	}
);

// Delete a student record
router.delete('/:_id', userAuthorization, async (req, res) => {
	try {
		const { _id } = req.params;

		const result = await deleteAllUserStudent({ _id });

		return res.json({
			status: 'success',
			message: 'The student record has been deleted',
		});
	} catch (error) {
		res.json({ status: 'error', message: error.message });
	}
});

module.exports = router;
