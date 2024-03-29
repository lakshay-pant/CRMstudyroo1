const Joi = require('joi');

const email = Joi.string().email({
	minDomainSegments: 2,
	tlds: { allow: ['com', 'net'] },
});

const pin = Joi.number().min(10000).max(999999).required();
const shortStr = Joi.string().min(2).max(50);

const newPassword = Joi.string().alphanum().min(3).max(30).required();

const resetPassReqValidation = (req, res, next) => {
	const schema = Joi.object({ email });

	const value = schema.validate(req.body);
	if (value.error) {
		return res.json({ status: 'error', message: value.error.message });
	}
	next();
};
const updatePassValidation = (req, res, next) => {
	const schema = Joi.object({ email, pin, newPassword });

	const value = schema.validate(req.body);
	if (value.error) {
		return res.json({ status: 'error', message: value.error.message });
	}
	next();
};

const newUserValidation = (req, res, next) => {
	const schema = Joi.object({
		firstName: shortStr.required(),
		lastName: shortStr.required(),
		email: shortStr.required(),
		password: shortStr.required(),
		birthdate: shortStr.required(),
		tele: shortStr.required(),
		gender: shortStr.required(),
		position: shortStr.required(),
		officeName: shortStr.required(),
		userGroup: shortStr.required(),
		userGroupOffice: shortStr.required(),
	});

	const value = schema.validate(req.body);

	if (value.error) {
		return res.json({ status: 'error', message: value.error.message });
	}

	next();
};

module.exports = {
	resetPassReqValidation,
	updatePassValidation,
	newUserValidation,
};
