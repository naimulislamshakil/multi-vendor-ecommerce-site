const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
	{
		first: {
			type: String,
			required: true,
			trim: true,
		},
		last: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
			min: 5,
		},
	},
	{ timestamps: true }
);

const USER = mongoose.model('user', userSchema);

module.exports = USER;
