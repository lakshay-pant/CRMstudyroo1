const express = require('express');
const router = express.Router();

const {
	insertLead,
	getLeads,
	deleteLead,
	getAllLeads,
	updateLeadTask,
	getAllUsersLeadById,
	updateLeadTaskDelete,
	updateTaskLead,
	getLeadById,
} = require('../model/leads/Lead.model');
const {
	userAuthorization,
} = require('../middlewares/authorization.middleware');

const { getUserNameById } = require('../model/user/User.model');

router.all('/', (req, res, next) => {
	// res.json({ message: "return form lead router" });
	next();
});

// add lead from studyroo website
router.post('/studyroo', async (req, res) => {
	const {
		leadFirstName,

		leadLastName,
		leadBirthday,

		leadNationality,
		leadEmail,
		leadOnShorePhone,
		leadMessage,
		leadService,
	} = req.body;

	try {
		const newUserObj = {
			leadFirstName,
			leadLastName,
			leadBirthday,
			leadNationality,
			leadEmail,
			leadOnShorePhone,
			leadMessage,
			leadService,
		};
		console.log('bb', newUserObj);
		const result = await insertLead(newUserObj);
		console.log(result);

		if (result._id) {
			return res.json({
				status: 'success',
				message: 'New Lead has been added!',
			});
		}

		res.json({
			status: 'error',
			message: 'Unable to add new Lead , please try again later',
		});
	} catch (error) {
		console.log(error);
		res.json({ status: 'error', message: error.message });
	}
});

// create new student record
router.post('/', userAuthorization, async (req, res) => {
	const {
		leadFirstName,
		leadMiddleName,
		leadLastName,
		leadBirthday,
		leadGender,
		leadNationality,
		leadEmail,
		leadOnShorePhone,
		leadOffShorePhone,
		leadLevel,
		leadOnShoreLocation,
		leadOffShoreLocation,
		leadRefferalSource,
		leadLocationStatus,
	} = req.body;

	try {
		const userId = req.userId;
		const userName = await getUserNameById(userId);

		const newUserObj = {
			clientId: userId,
			leadUserName: userName,
			leadFirstName,
			leadMiddleName,
			leadLastName,
			leadBirthday,
			leadGender,
			leadNationality,
			leadEmail,
			leadOnShorePhone,
			leadOffShorePhone,
			leadLevel,
			leadOnShoreLocation,
			leadOffShoreLocation,
			leadRefferalSource,
			leadLocationStatus,
		};
		const result = await insertLead(newUserObj);
		console.log(result);

		if (result._id) {
			return res.json({
				status: 'success',
				message: 'New Lead has been added!',
			});
		}

		res.json({
			status: 'error',
			message: 'Unable to add new Lead , please try again later',
		});
	} catch (error) {
		console.log(error);
		res.json({ status: 'error', message: error.message });
	}
});
// Get user Leads
router.get('/', userAuthorization, async (req, res) => {
	try {
		const userId = req.userId;
		const result = await getLeads(userId);

		return res.json({
			status: 'success',
			result,
		});
	} catch (error) {
		res.json({ status: 'error', message: error.message });
	}
});

//Get all leads
router.get('/all-leads', userAuthorization, async (req, res) => {
	try {
		const result = await getAllLeads();

		return res.json({
			status: 'success',
			result,
		});
	} catch (error) {
		res.json({ status: 'error', message: error.message });
	}
});

// Get specific lead by id of any user

router.get('/:_id', async (req, res) => {
	try {
		const { _id } = req.params;

		const result = await getAllUsersLeadById(_id);

		return res.json({
			status: 'success',
			result,
		});
	} catch (error) {
		res.json({ status: 'error', message: error.message });
	}
});

//update Lead record

router.patch('/:_id', userAuthorization, async (req, res) => {
	try {
		const clientId = req.userId;
		const { _id } = req.params;

		var {
			leadUserName,
			leadFirstName,
			leadMiddleName,
			leadLastName,
			leadBirthday,
			leadGender,
			leadNationality,
			leadEmail,
			leadOnShorePhone,
			leadOffShorePhone,
			leadLevel,
			leadOnShoreLocation,
			leadOffShoreLocation,
			leadRefferalSource,
			leadLocationStatus,
		} = req.body;

		const userProf = await getLeadById(_id);
		userProf.leadFirstName = leadFirstName
			? leadFirstName
			: userProf.leadFirstName;
		userProf.leadMiddleName = leadMiddleName
			? leadMiddleName
			: userProf.leadMiddleName;
		userProf.leadLastName = leadLastName ? leadLastName : userProf.leadLastName;
		userProf.leadBirthday = leadBirthday ? leadBirthday : userProf.leadBirthday;
		userProf.leadGender = leadGender ? leadGender : userProf.leadGender;
		userProf.leadEmail = leadEmail ? leadEmail : userProf.leadEmail;
		userProf.leadOnShorePhone = leadOnShorePhone
			? leadOnShorePhone
			: userProf.leadOnShorePhone;
		userProf.leadOffShorePhone = leadOffShorePhone
			? leadOffShorePhone
			: userProf.leadOffShorePhone;
		userProf.leadLevel = leadLevel ? leadLevel : userProf.leadLevel;
		userProf.leadNationality = leadNationality
			? leadNationality
			: userProf.leadNationality;
		userProf.leadUserName = leadUserName ? leadUserName : userProf.leadUserName;
		userProf.leadOnShoreLocation = leadOnShoreLocation
			? leadOnShoreLocation
			: userProf.leadOnShoreLocation;
		userProf.leadOffShoreLocation = leadOffShoreLocation
			? leadOffShoreLocation
			: userProf.leadOffShoreLocation;
		userProf.leadRefferalSource = leadRefferalSource
			? leadRefferalSource
			: userProf.leadRefferalSource;
		userProf.leadLocationStatus = leadLocationStatus
			? leadLocationStatus
			: userProf.leadLocationStatus;

		const result = await insertLead(userProf);

		res.json({ status: 'success', message: 'Lead updated', result });
	} catch (error) {
		console.log(error);
		res.json({ status: 'error', message: error.message });
	}
});

//updateLeadTask

router.put('/:fruitName/:fruitColor', userAuthorization, async (req, res) => {
	try {
		const name = req.params.fruitName;
		const color = req.params.fruitColor;
		var {
			statusNote,
			taskStatus,
			taskStartDate,
			taskStartTime,
			taskEndTime,
			taskEndDate,
			taskNote,

			taskCompleted,
		} = req.body;
		const result = await updateTaskLead(color, {
			statusNote,
			taskStatus,
			taskStartDate,
			taskStartTime,
			taskEndTime,
			taskEndDate,
			taskNote,

			taskCompleted,
		});

		if (result._id) {
			return res.json({
				status: 'success',
				message: 'your leadtask message updated',
			});
		}
		res.json({
			status: 'error',
			message: 'Unable to update your message please try again later',
		});
	} catch (error) {
		res.json({ status: 'error', message: error.message });
	}
});

//put leads task

router.put('/:_id', userAuthorization, async (req, res) => {
	try {
		const {
			statusNote,
			taskStatus,
			taskStartDate,
			taskEndDate,
			taskNote,
			assignee,
			taskCompleted,
			taskStartTime,
			taskEndTime,
			leadTaskUserId,
			userId,
		} = req.body;

		const { _id } = req.params;
		const clientId = req.userId;

		const result = await updateLeadTask({
			_id,
			statusNote,
			taskStatus,
			taskStartDate,
			taskEndDate,
			taskNote,
			assignee,
			taskCompleted,
			taskEndTime,
			taskStartTime,
			leadTaskUserId,
			userId,
		});

		if (result._id) {
			return res.json({
				status: 'success',
				message: 'Lead Task has been added',
			});
		}
		res.json({
			status: 'error',
			message: 'Unable to add Lead Task',
		});
	} catch (error) {
		res.json({ status: 'error', message: error.message });
	}
});

//delete lead task

router.delete(
	'/:fruitName/:fruitColor',
	userAuthorization,
	async (req, res) => {
		try {
			const name = req.params.fruitName;
			const color = req.params.fruitColor;
			const result = await updateLeadTaskDelete(name, color);

			if (result._id) {
				return res.json({
					status: 'success',
					message: 'your leadtask message deleted',
				});
			}
			res.json({
				status: 'error',
				message: 'Unable to update your message please try again later',
			});
		} catch (error) {
			res.json({ status: 'error', message: error.message });
		}
	}
);

// Delete a Lead record
router.delete('/:_id', userAuthorization, async (req, res) => {
	try {
		const { _id } = req.params;

		const result = await deleteLead({ _id });

		return res.json({
			status: 'success',
			message: 'The Lead record has been deleted',
		});
	} catch (error) {
		res.json({ status: 'error', message: error.message });
	}
});

module.exports = router;
