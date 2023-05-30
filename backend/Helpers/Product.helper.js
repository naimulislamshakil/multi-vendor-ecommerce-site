const ProductService = require('../Services/Product.service');

exports.createProductHelper = async (req, res) => {
	try {
		const result = await ProductService.createProductService(req.body);

		res.status(200).json({
			status: 'Success',
			message: 'Product Create Successfully.',
		});
	} catch (error) {
		res.status(404).json({
			status: 'Failed',
			message: 'Product Not Create.',
		});
	}
};
