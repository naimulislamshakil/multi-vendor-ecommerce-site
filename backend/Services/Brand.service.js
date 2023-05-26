const BRAND = require('../Schemas/Brand.schema');

exports.createBrandService = async (data) => {
	const result = await BRAND.create(data);
	return result;
};
