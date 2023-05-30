const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const productSchema = mongoose.Schema({
	name: {
		type: String,
		unique: true,
		required: true,
		trim: true,
	},
	description: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	unit: {
		type: String,
		required: true,
		enum: ['pcs', 'litter', 'kg'],
	},
	status: {
		type: String,
		required: true,
		enum: ['in-stock', 'out-stock', 'discontinued'],
	},
	quantity: {
		type: Number,
		required: true,
	},
	suppliers: [
		{
			type: ObjectId,
			ref: 'Suppliers',
		},
	],
	categories: {
		type: String,
		required: true,
	},
	tag: [
		{
			type: String,
			required: true,
		},
	],
});

const PRODUCT = mongoose.model('Product', productSchema);

module.exports = PRODUCT;
