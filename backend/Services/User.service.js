const USER = require('../Schemas/User.schema');

exports.createUserService = async (data) => {
	const result = await USER.create(data);
	return result;
};

exports.loginUserService = async (email) => {
	const user = await USER.findOne({ email });
	return user;
};
