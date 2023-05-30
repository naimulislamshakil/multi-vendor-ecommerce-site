const PRODUCT = require('../Schemas/Product.schema');

exports.createProductService = async (data) => {
	const result = await PRODUCT.create(data);
	return result;
};
