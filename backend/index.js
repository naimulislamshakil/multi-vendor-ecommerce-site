const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const UserRoute = require('./Routes/v1/User.route');
require('dotenv').config();

// ADD MADILWARE
app.use(cors());
app.use(express.json());

// ADD MONGOOSE
mongoose
	.connect(
		`mongodb+srv://multi-vendor:${process.env.DB_PASS}@cluster0.x3ohfcq.mongodb.net/?retryWrites=true&w=majority`
	)
	.then(() => console.log('Multi-Vendor Database Connected Successfully!'))
	.catch((err) => console.log(err));

app.use('/', UserRoute);

app.get('/', (req, res) => {
	res.send('<h1>How are you?</h1>');
});

app.use('*', (req, res) => {
	const { baseUrl } = req;
	res.send(`<h1>${baseUrl} Not Found!</h1>`);
});

app.listen(port, () => {
	console.log(`Multi-Vendor Server Running on Port: ${port}`);
});
