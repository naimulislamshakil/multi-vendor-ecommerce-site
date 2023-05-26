const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const UserRoute = require('./Routes/v1/User.route');
const brandRoute = require('./Routes/v1/Brand.route.js');
require('dotenv').config();

// ADD MADILWARE
app.use(cors());
app.use(express.json());

// ADD MONGOOSE
mongoose
	.connect(
		`mongodb://multi-vendor:${process.env.DB_PASS}@ac-7tkmc4w-shard-00-00.snqqfox.mongodb.net:27017,ac-7tkmc4w-shard-00-01.snqqfox.mongodb.net:27017,ac-7tkmc4w-shard-00-02.snqqfox.mongodb.net:27017/?ssl=true&replicaSet=atlas-3y8ve3-shard-0&authSource=admin&retryWrites=true&w=majority`,
		{ useNewUrlParser: true, useUnifiedTopology: true }
	)
	.then(() => console.log('Multi-Vendor Database Connected Successfully!'))
	.catch((err) => console.log(err));

app.use('/', UserRoute);
app.use('/brand', brandRoute);

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
