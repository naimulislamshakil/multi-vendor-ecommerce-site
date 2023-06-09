const BrandService = require('../Services/Brand.service.js');

exports.createBrandHelper = async (req, res) => {
	try {
		const result = await BrandService.createBrandService(req.body);
		res.status(200).json({
			status: 'Success',
			message: 'Brand Create Successfully.',
		});
	} catch (error) {
		res.status(404).json({
			status: 'Failed',
			message: error.message,
		});
	}
};

exports.getAllBrandName = async (req, res) => {
	try {
		const BrandName = await BrandService.getAllBrandName();
		res.status(200).json({
			status: 'Success',
			message: 'Brand Name Get Successfully.',
			BrandName,
		});
	} catch (error) {
		res.status(404).json({
			status: 'Failed',
			message: error.message,
		});
	}
};
