const Service = require('../Services/user.service');
const bcrypt = require('bcrypt');
const generateToken = require('../Utils/generateToken');

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

exports.loginUserCollaction = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await Service.loginUserService(email);
		console.log(email);
		if (!user) {
			return res.status(404).json({
				status: 'Failed',
				message: 'User Not Exist.',
			});
		}

		const match = bcrypt.compareSync(password, user.password);

		if (!match) {
			return res.status(404).json({
				status: 'Failed',
				message: 'Invalid credentials.',
			});
		}

		const token = generateToken(email, user._id, user.roll);

		const { password: pass, ...other } = user.toObject();

		res.cookie('accessToken', token, {
			expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
		});

		res.status(200).json({
			status: 'Success',
			message: 'User Successfully Login..',
			user: other,
			token,
		});
	} catch (error) {
		res.status(404).json({
			status: 'Failed',
			message: error.message,
		});
	}
};
