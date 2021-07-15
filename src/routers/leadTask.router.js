const express = require('express');
const router = express.Router();
const {
	insertLeadTask,
	getLeadTasks,
	getLeadTaskById,
	deleteLeadTask,
	getUserNameById,
	deleteAllLeadTask,
} = require('../model/leadTask/LeadTask.model');
const {
	userAuthorization,
} = require('../middlewares/authorization.middleware');

router.all('/', (req, res, next) => {
	// res.json({ message: "return form task router" });
	next();
});

// create new task
router.post('/', userAuthorization, async (req, res) => {
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
	} = req.body;

	try {
		const userid = req.userId;
		const userNameTask = await getUserNameById(userid);

		const newUserObj = {
			clientId: userid,
			statusNote,
			userName: userNameTask.firstName + ' ' + userNameTask.lastName,
			taskStatus,
			taskStartDate,
			taskEndDate,
			taskNote,
			assignee,
			taskCompleted,
			taskStartTime,
			taskEndTime,
			leadTaskUserId,
		};
		const result = await insertLeadTask(newUserObj);
		console.log(result);

		if (result._id) {
			return res.json({
				status: 'success',
				message: 'New lead task has been added!',
			});
		}

		res.json({
			status: 'error',
			message: 'Unable to add new lead task , please try again later',
		});
	} catch (error) {
		console.log(error);
		res.json({ status: 'error', message: error.message });
	}
});
// Get all tasks
router.get('/', userAuthorization, async (req, res) => {
	try {
		const userId = req.userId;
		const result = await getLeadTasks();

		return res.json({
			status: 'success',
			result,
		});
	} catch (error) {
		res.json({ status: 'error', message: error.message });
	}
});

// Get specific task by id
router.get('/:_id', userAuthorization, async (req, res) => {
	try {
		const { _id } = req.params;

		const clientId = req.userId;
		const result = await getLeadTaskById(_id, clientId);

		return res.json({
			status: 'success',
			result,
		});
	} catch (error) {
		res.json({ status: 'error', message: error.message });
	}
});

//update task record

router.patch('/:_id', userAuthorization, async (req, res) => {
	try {
		const _id = req.params;

		var {
			statusNote,
			taskStatus,
			taskStartDate,
			taskEndDate,
			taskNote,
			assignee,
			taskCompleted,
			taskStartTime,
			taskEndTime,
		} = req.body;
		var taskProf = await getLeadTaskById(_id);
		taskProf.statusNote = statusNote ? statusNote : taskProf.statusNote;
		taskProf.taskStartDate = taskStartDate
			? taskStartDate
			: taskProf.taskStartDate;
		taskProf.taskEndDate = taskEndDate ? taskEndDate : taskProf.taskEndDate;
		taskProf.taskStatus = taskStatus ? taskStatus : taskProf.taskStatus;

		taskProf.taskNote = taskNote ? taskNote : taskProf.taskNote;
		taskProf.assignee = assignee ? assignee : taskProf.assignee;

		taskProf.taskCompleted = taskCompleted
			? taskCompleted
			: taskProf.taskCompleted;
		taskProf.taskStartTime = taskStartTime
			? taskStartTime
			: taskProf.taskStartTime;
		taskProf.taskEndTime = taskEndTime ? taskEndTime : taskProf.taskEndTime;
		const result = await insertLeadTask(taskProf);
		res.json({ message: 'Lead Task updated', result });
	} catch (error) {
		res.json({ status: 'error', message: error.message });
	}
});

// Delete a student record
router.delete('/:_id', userAuthorization, async (req, res) => {
	try {
		const _id = req.params;
		// const _id = req.userId;

		const result = await deleteLeadTask(_id);

		return res.json({
			status: 'success',
			message: 'The Lead task  has been deleted',
			result,
		});
	} catch (error) {
		res.json({ status: 'error', message: error.message });
	}
});

// Delete all lead task
router.delete('/', userAuthorization, async (req, res) => {
	try {
		const _id = req.params;
		// const _id = req.userId;

		const result = await deleteAllLeadTask();

		return res.json({
			status: 'success',
			message: 'All Lead task  has been deleted',
			result,
		});
	} catch (error) {
		res.json({ status: 'error', message: error.message });
	}
});

module.exports = router;
