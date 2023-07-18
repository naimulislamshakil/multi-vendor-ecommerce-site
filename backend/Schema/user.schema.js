const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
		role: {
			type: String,
			enum: ['Seller', 'Admin'],
			default: 'Seller',
		},
	},
	{ timestamps: true }
);

userSchema.pre('save', function (next) {
	if (!this.isModified('password')) return next();

	const password = this.password;
	const hashPassword = bcrypt.hashSync(password, 10);
	this.password = hashPassword;
	next();
});

const USER = mongoose.model('user', userSchema);

module.exports = USER;
