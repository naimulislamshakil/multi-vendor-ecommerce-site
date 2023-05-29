const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const brandSchema = mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
			required: true,
			unique: true,
		},
		description: String,
		email: {
			type: String,
			required: true,
			unique: true,
			lowerCase: true,
		},
		website: String,
		phoneNumber: String,
		helpLine: String,
		addresses: {
			country: {
				type: String,
			},
			city: {
				type: String,
			},
			state: {
				type: String,
			},
			address1: {
				type: String,
			},
			address2: {
				type: String,
			},
			zipCode: {
				type: Number,
			},
		},

		product: [
			{
				type: ObjectId,
				ref: 'Product',
			},
		],
		suppliers: [
			{
				type: ObjectId,
				ref: 'Suppliers',
			},
		],
		status: {
			type: String,
			enum: ['Active', 'Inactive'],
			default: 'Active',
		},
	},
	{
		timestamps: true,
	}
);

const BRAND = mongoose.model('Brand', brandSchema);

module.exports = BRAND;
