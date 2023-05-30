const BRAND = require('../Schemas/Brand.schema');

exports.createBrandService = async (data) => {
	const result = await BRAND.create(data);
	return result;
};

exports.getAllBrandName = async () => {
	const brands = await BRAND.find();
	const brandName = brands.map((brand) => brand.name);
	return brandName;
};
