const express = require('express');
const router = express.Router();
const {
	insertTask,
	getTasks,
	getTaskById,
	deleteTask,
	getUserNameById,
} = require('../model/tasks/Tasks.model');
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
		taskName,
		type,
		dueDate,
		taskStatus,
		studentAssign,
		taskDetails,
		userGroupOffice,
		assignTo,
		taskId,
		studentId,
		userId,
	} = req.body;

	try {
		const userid = req.userId;
		const userNameTask = await getUserNameById(userid);

		const newUserObj = {
			clientId: userid,
			taskName,
			userName: userNameTask.firstName + ' ' + userNameTask.lastName,
			type,
			dueDate,
			taskStatus,
			taskDetails,
			studentAssign,
			userGroupOffice,
			assignTo,
			taskId,
			studentId,
			userId,
		};
		const result = await insertTask(newUserObj);
		console.log(result);

		if (result._id) {
			return res.json({
				status: 'success',
				message: 'New task has been added!',
			});
		}

		res.json({
			status: 'error',
			message: 'Unable to add new task , please try again later',
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
		const result = await getTasks();

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
		const result = await getTaskById(_id, clientId);

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
			taskName,
			type,
			dueDate,
			taskStatus,
			taskDetails,
			studentAssign,
			assignTo,
			userGroupOffice,
		} = req.body;
		const taskProf = await getTaskById(_id);
		taskProf.taskName = taskName ? taskName : taskProf.taskName;
		taskProf.type = type ? type : taskProf.type;
		taskProf.dueDate = dueDate ? dueDate : taskProf.dueDate;
		taskProf.taskStatus = taskStatus ? taskStatus : taskProf.taskStatus;

		taskProf.taskDetails = taskDetails ? taskDetails : taskProf.taskDetails;
		taskProf.studentAssign = studentAssign
			? studentAssign
			: taskProf.studentAssign;
		taskProf.assignTo = assignTo ? assignTo : taskProf.assignTo;
		taskProf.userGroupOffice = userGroupOffice
			? userGroupOffice
			: taskProf.userGroupOffice;

		const result = await insertTask(taskProf);
		res.json({ status: 'success', message: 'task updated', result });
	} catch (error) {
		res.json({ status: 'error', message: error.message });
	}
});

// Delete a student record
router.delete('/:_id', userAuthorization, async (req, res) => {
	try {
		const _id = req.params;
		// const _id = req.userId;

		const result = await deleteTask(_id);

		return res.json({
			status: 'success',
			message: 'The task record has been deleted',
			result,
		});
	} catch (error) {
		res.json({ status: 'error', message: error.message });
	}
});

module.exports = router;
