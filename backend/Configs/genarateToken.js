const jwt = require('jsonwebtoken');

const genarateToken = (email, id) => {
	const token = jwt.sign({ email, id }, process.env.JWT_SECRET, {
		expiresIn: '1d',
	});

	return token;
};

module.exports = genarateToken;
