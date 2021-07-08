const express = require('express');
const router = express.Router();
const { UserSchema } = require('../model/user/User.schema');
const {
	userAuthorization,
} = require('../middlewares/authorization.middleware');
const {
	updateUserLeadTask,
	updateUserTaskLead,
	updateUserLeadTaskDelete,
} = require('../model/user/User.model');

router.all('/', (req, res, next) => {
	// res.json({ message: "return form lead router" });
	next();
});

//add lead task in user schema

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

		console.log('hi 3');

		const { _id } = req.params;
		const clientId = req.userId;

		const result = await updateUserLeadTask({
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
				message: 'Lead task has been added into user',
			});
		}
		res.json({
			status: 'error',
			message: 'Unable to add lead task into user',
		});
	} catch (error) {
		res.json({ status: 'error', message: error.message });
	}
});

//update user lead task

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
		const result = await updateUserTaskLead(color, {
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
				message: 'your leadtask of user updated',
			});
		}
		res.json({
			status: 'error',
			message: 'Unable to update lead task of user',
		});
	} catch (error) {
		res.json({ status: 'error', message: error.message });
	}
});

//delete Lead task in user

router.delete('/:fruitName/:fruitColor', async (req, res) => {
	try {
		const name = req.params.fruitName;
		const color = req.params.fruitColor;
		const result = await updateUserLeadTaskDelete(name, color);

		if (result._id) {
			return res.json({
				status: 'success',
				message: 'your user leadtask message deletedNKNKK',
			});
		}
		res.json({
			status: 'error',
			message: 'Unable to delete user lead task',
		});
	} catch (error) {
		res.json({ status: 'error', message: error.message });
	}
});

module.exports = router;
