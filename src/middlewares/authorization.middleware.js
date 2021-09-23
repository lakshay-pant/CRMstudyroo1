const { verifyAccessJWT } = require('../helpers/jwt.helper');
const { UserSchema } = require('../model/user/User.schema');

const userAuthorization = async (req, res, next) => {
	const { authorization } = req.headers;

	const decoded = await verifyAccessJWT(authorization);

	if (decoded.email) {
		const user = await UserSchema.findOne({
			_id: decoded._id,
			'accessJWT.token': authorization,
		});
		req.userId = user;

		return next();
	}

	return res.status(403).json({ message: 'Forbidden' });
};

module.exports = {
	userAuthorization,
};
