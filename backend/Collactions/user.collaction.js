const Service = require('../Services/user.service');

exports.createUserCollaction = async (req, res) => {
	try {
		const data = await Service.createUserService(req.body);

		res.status(200).json({
			status: 'Success',
			message: 'User Create Successfully..',
		});
	} catch (error) {
		res.status(404).json({
			status: 'Failed',
			message: error.message,
		});
	}
};
