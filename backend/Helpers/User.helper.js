const UserService = require('../Services/User.service');
const bcrypt = require('bcrypt');
const genarateToken = require('../Configs/genarateToken');

exports.createUserHelper = async (req, res) => {
	try {
		const { email } = req.body;
		console.log(email);
		const user = await UserService.loginUserService(email);

		if (user) {
			return res.status(404).json({
				status: 'Failed',
				message: 'User Alrady Exist.',
			});
		}

		const result = await UserService.createUserService(req.body);
		res.status(200).json({
			status: 'Success',
			message: 'User Create Successfully',
		});
	} catch (error) {
		res.status(404).json({
			status: 'Failed',
			message: error.message,
		});
	}
};

exports.loginUserHelper = async (req, res) => {
	try {
		const user = await UserService.loginUserService(req.body.email);

		if (!user) {
			return res.status(403).json({
				status: 'Failed',
				message: 'User Not Found.',
			});
		}

		const isMatch = bcrypt.compareSync(req.body.password, user.password);

		if (!isMatch) {
			return res.status(404).json({
				status: 'Failed',
				message: 'Invalid credentials.',
			});
		}

		const token = genarateToken(user.email, user._id);

		const { password: pass, ...other } = user.toObject();

		res.status(200).json({
			status: 'Success',
			message: 'User Login Successfully',
			token,
		});
	} catch (error) {
		res.status(404).json({
			status: 'Failed',
			message: error.message,
		});
	}
};

exports.getUserHelper = async (req, res) => {
	try {
		const user = await UserService.getUserService(req.user.id);
		const { password: pass, ...other } = user.toObject();
		res.status(200).json({
			status: 'Success',
			message: 'User Get Successfully',
			user: other,
		});
	} catch (error) {
		res.status(404).json({
			status: 'Failed',
			message: error.message,
		});
	}
};
