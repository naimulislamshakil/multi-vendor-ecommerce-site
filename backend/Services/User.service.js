const USER = require('../Schemas/User.schema');

exports.createUserService = async (data) => {
	const result = await USER.create(data);
	console.log(result);
	return result;
};
