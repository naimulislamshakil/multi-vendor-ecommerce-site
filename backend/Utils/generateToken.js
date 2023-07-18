const jwt = require('jsonwebtoken');

const generateToken = (email, id, roll) => {
	const token = jwt.sign({ email, id, roll }, process.env.JWT_SECRET, {
		expiresIn: '1d',
	});
	return token;
};

module.exports = generateToken;
