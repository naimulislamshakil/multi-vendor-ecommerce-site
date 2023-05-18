const UserService = require('../Services/User.service');

exports.createUserHelper = async (req, res) => {
	try {
		const result = await UserService.createUserService(req.body);
		res.status(200).json({
			status: 'Success',
			message: 'User Create SuccessFully',
		});
	} catch (error) {
		res.status(404).json({
			status: 'Failed',
			message: error.message,
		});
	}
};
