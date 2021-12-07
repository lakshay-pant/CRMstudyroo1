const { verifyAccessJWT } = require('../helpers/jwt.helper');

const { getUserByEmail } = require('../model/user/User.model');

const userAuthorization = async (req, res, next) => {
	const { authorization } = req.headers;

	const decoded = await verifyAccessJWT(authorization);

	if (decoded.email) {
		const user = await getUserByEmail(decoded.email);

		if (!user._id) {
			return res.status(403).json({ message: 'Forbidden' });
		}

		req.userId = user._id;

		return next();
	}

	return res.status(403).json({ message: 'Forbidden' });
};

module.exports = {
	userAuthorization,
};
