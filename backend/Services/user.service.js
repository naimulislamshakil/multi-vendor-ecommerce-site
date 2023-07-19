const USER = require('../Schema/user.schema');

exports.createUserService = async (info) => {
	const data = await USER.create(info);
	return data;
};

exports.loginUserService = async (email) => {
	const user = await USER.findOne({ email });
	return user;
};

exports.persistentService = async (email) =>
{
	const user = await USER.findOne({ email });
	return user;
};
