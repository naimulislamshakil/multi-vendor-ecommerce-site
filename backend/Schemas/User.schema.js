const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
	firstName: {
		type: String,
		required: true,
		trim: true,
	},
	lastName: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: [true, 'Please enter your email!'],
	},
	password: {
		type: String,
		required: [true, 'Please enter your password'],
		minLength: [4, 'Password should be greater than 4 characters'],
		select: false,
	},
	phoneNumber: {
		type: Number,
	},
	addresses: [
		{
			country: {
				type: String,
			},
			city: {
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
			addressType: {
				type: String,
			},
		},
	],
	role: {
		type: String,
		default: 'user',
	},
	avatar: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
	resetPasswordToken: String,
	resetPasswordTime: Date,
});

userSchema.pre('save', function (next) {
	if (!this.isModified('password')) return next();

	const password = this.password;
	const hashPassword = bcrypt.hashSync(password, 10);
	this.password = hashPassword;
	next();
});

const USER = mongoose.model('User', userSchema);

module.exports = USER;
