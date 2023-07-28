const fs = require('fs');

exports.fileUplode = async (req, res) => {
	try {
		console.log(req);
		res.send(req);
	} catch (error) {
		res.status(404).json({
			status: 'Failed',
			message: error.message,
		});
	}
};
