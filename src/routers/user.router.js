const express = require('express');
const { route, post } = require('./student.router');
const router = express.Router();

const {
	insertUser,
	getUserByEmail,
	getUserById,
	getAllUsersById,
	updatePassword,
	storeUserRefreshJWT,
	getAllUsers,
	updateUserStudentTask,
	updateUserTaskStudent,
	updateUserStudentTaskDelete,
	updateUserLeadTask,
	updateUserTaskLead,
	updateUserLeadTaskDelete,
} = require('../model/user/User.model');
const { hashPassword, comparePassword } = require('../helpers/bcrypt.helper');
const { crateAccessJWT, crateRefreshJWT } = require('../helpers/jwt.helper');

const {
	userAuthorization,
} = require('../middlewares/authorization.middleware');
const {
	setPasswordRestPin,
	getPinByEmailPin,
	deletePin,
} = require('../model/restPin/RestPin.model');
const { emailProcessor } = require('../helpers/email.helper');
const {
	resetPassReqValidation,
	updatePassValidation,
	newUserValidation,
} = require('../middlewares/formValidation.middleware');
const { verify } = require('jsonwebtoken');

const { deleteJWT } = require('../helpers/redis.helper');

const { UserSchema } = require('../model/user/User.schema');
const { date } = require('joi');

const verificationURL = 'http://localhost:3000/verification/';

router.all('/', (req, res, next) => {
	// res.json({ message: "return form user router" });

	next();
});

// Get user profile router
router.get('/', userAuthorization, async (req, res) => {
	//this data coming form database
	const _id = req.userId;

	const userProf = await getUserById(_id);

	res.json({ user: userProf });
});

// Get all users
router.get('/all-users', async (req, res) => {
	try {
		const result = await getAllUsers();

		return res.json({
			status: 'success',
			result,
		});
	} catch (error) {
		res.json({ status: 'error', message: error.message });
	}
});
// Create new user router

router.post('/', newUserValidation, async (req, res) => {
	const { firstName, lastName, email, password, birthdate, tele, gender } =
		req.body;

	// Mongoose Model.findOne()
	UserSchema.findOne({ email: email }).then((user) => {
		if (user) {
			res.json({ status: 'error', message: 'Email already Exist!!' });
		}
	});
	try {
		//hash password
		const hashedPass = await hashPassword(password);

		const newUserObj = {
			firstName,
			lastName,
			email,
			birthdate,
			tele,
			gender,
			password: hashedPass,
		};

		const result = await insertUser(newUserObj);
		console.log('_____________________________aaaaaaaaaaaaa', result);

		await emailProcessor({
			email,
			type: 'new-user-confirmation-required',
			verificationLink: verificationURL + result._id + '/' + email,
		});

		res.json({ status: 'success', message: 'New user created', result });
	} catch (error) {
		console.log(error);
		let message =
			'Unable to create new user at the moment, Please try agin or contact administration!';
		if (error.message.includes('duplicate key error collection')) {
			message = 'this email already has an account';
		}
		res.json({ status: 'error', message });
	}
});

//User sign in Router
router.post('/login', async (req, res) => {
	console.log(req.body);

	const { email, password } = req.body;

	if (!email || !password) {
		return res.json({ status: 'error', message: 'Invalid form submition!' });
	}

	const user = await getUserByEmail(email);

	const passFromDb = user && user._id ? user.password : null;

	if (!passFromDb)
		return res.json({ status: 'error', message: 'Invalid Email or Password!' });

	const result = await comparePassword(password, passFromDb);

	if (!result) {
		return res.json({ status: 'error', message: 'Invalid email or password!' });
	}

	const accessJWT = await crateAccessJWT(user.email, `${user._id}`);
	const refreshJWT = await crateRefreshJWT(user.email, `${user._id}`);

	res.json({
		status: 'success',
		message: 'Login Successfully!',
		accessJWT,
		refreshJWT,
	});
});

router.post('/reset-password', resetPassReqValidation, async (req, res) => {
	const { email } = req.body;

	const user = await getUserByEmail(email);

	if (user && user._id) {
		/// crate// 2. create unique 6 digit pin
		const setPin = await setPasswordRestPin(email);
		await emailProcessor({
			email,
			pin: setPin.pin,
			type: 'request-new-password',
		});

		return res.json({
			status: 'success',
			message:
				'If the email is exist in our database, the password reset pin will be sent shortly.',
		});
	}

	res.json({
		status: 'error',
		message:
			'If the email is exist in our database, the password reset pin will be sent shortly.',
	});
});

router.patch('/reset-password', updatePassValidation, async (req, res) => {
	const { email, pin, newPassword } = req.body;

	const getPin = await getPinByEmailPin(email, pin);
	// 2. validate pin
	if (getPin._id) {
		const dbDate = getPin.addedAt;
		const expiresIn = 1;

		let expDate = dbDate.setDate(dbDate.getDate() + expiresIn);

		const today = new Date();

		if (today > expDate) {
			return res.json({ status: 'error', message: 'Invalid or expired pin.' });
		}

		// encrypt new password
		const hashedPass = await hashPassword(newPassword);

		const user = await updatePassword(email, hashedPass);

		if (user._id) {
			// send email notification
			await emailProcessor({ email, type: 'update-password-success' });

			////delete pin from db
			deletePin(email, pin);

			return res.json({
				status: 'success',
				message: 'Your password has been updated',
			});
		}
	}
	res.json({
		status: 'error',
		message: 'Unable to update your password. plz try again later',
	});
});

//update user

router.patch('/me', userAuthorization, async (req, res) => {
	try {
		const _id = req.userId;
		var { firstName, lastName, email, password, birthdate, tele, gender } =
			req.body;

		const userProf = await getUserById(_id);
		userProf.firstName = firstName ? firstName : userProf.firstName;
		userProf.lastNameName = lastName ? lastName : userProf.lastName;
		userProf.email = email ? email : userProf.email;
		userProf.birthdate = birthdate ? birthdate : userProf.birthdate;
		userProf.tele = tele ? tele : userProf.tele;
		userProf.gender = gender ? gender : userProf.gender;
		userProf.password = password
			? await hashPassword(password)
			: userProf.password;

		const result = await insertUser(userProf);

		res.json({ message: 'user updated', result });
	} catch (error) {
		console.log(error);
		res.json({ status: 'error', message: error.message });
	}
});

// User logout and invalidate jwts

router.delete('/logout', userAuthorization, async (req, res) => {
	const { authorization } = req.headers;
	//this data coming form database
	const _id = req.userId;

	// 2. delete accessJWT from redis database
	deleteJWT(authorization);

	// 3. delete refreshJWT from mongodb
	const result = await storeUserRefreshJWT(_id, '');

	if (result._id) {
		return res.json({ status: 'success', message: 'Logged out successfully' });
	}

	res.json({
		status: 'error',
		message: 'Unable to logg you out, plz try again later',
	});
});

router.get('/:_id', async (req, res) => {
	try {
		const { _id } = req.params;

		const result = await getUserById(_id);

		return res.json({
			status: 'success',
			result,
		});
	} catch (error) {
		res.json({ status: 'error', message: error.message });
	}
});

//put student task in user

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
			userGroup,
			offices,
			taskId,
			studentId,
			userId,
		} = req.body;

		const { _id } = req.params;
		const clientId = req.userId;

		const result = await updateUserStudentTask({
			_id,
			taskName,
			dueDate,
			taskDetails,
			studentAssign,
			taskStatus,
			assignTo,
			userGroup,
			offices,
			type,
			taskId,
			studentId,
			userId,
		});

		if (result._id) {
			return res.json({
				status: 'success',
				message: 'your Student Task has been added to User',
			});
		}
		res.json({
			status: 'error',
			message: 'Unable to update student task to user',
		});
	} catch (error) {
		res.json({ status: 'error', message: error.message });
	}
});

//update Student Task

router.put('/:fruitName/:fruitColor', async (req, res) => {
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

			userGroup,
			offices,
		} = req.body;
		const result = await updateUserTaskStudent(color, {
			taskName,
			dueDate,
			taskDetails,
			type,
			taskStatus,

			userGroup,
			offices,
		});

		if (result._id) {
			return res.json({
				status: 'success',
				message: 'your user Student task has been updated',
			});
		}
		res.json({
			status: 'error',
			message: 'Unable to update user student task ',
		});
	} catch (error) {
		res.json({ status: 'error', message: error.message });
	}
});

//delete task of student in user

router.delete('/:fruitName/:fruitColor', async (req, res) => {
	try {
		const name = req.params.fruitName;
		const color = req.params.fruitColor;
		const result = await updateUserStudentTaskDelete(name, color);

		if (result._id) {
			return res.json({
				status: 'success',
				message: 'Student task in user has been deleted',
			});
		}
		res.json({
			status: 'error',
			message: 'Unable to delete student task from user',
		});
	} catch (error) {
		res.json({ status: 'error', message: error.message });
	}
});

//add lead task in user schema

router.put('leadTask/:_id', userAuthorization, async (req, res) => {
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
		} = req.body;

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

router.put('leadTask/:fruitName/:fruitColor', async (req, res) => {
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
			assignee,
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
			assignee,
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

router.delete('leadTask/:fruitName/:fruitColor', async (req, res) => {
	try {
		const name = req.params.fruitName;
		const color = req.params.fruitColor;
		const result = await updateUserLeadTaskDelete(name, color);

		if (result._id) {
			return res.json({
				status: 'success',
				message: 'your user leadtask message deleted',
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
