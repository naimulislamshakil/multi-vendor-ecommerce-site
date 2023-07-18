const USER = require('../Schema/user.schema');

exports.createUserService = async (info) => {
	const data = await USER.create(info);
	return data;
};
