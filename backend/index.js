const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

app.use(express.json());
app.use(cors());

mongoose
	.connect(
		`mongodb+srv://multi-vendor:${process.env.DB_PASS}@cluster0.snqqfox.mongodb.net/?retryWrites=true&w=majority`
	)
	.then(() => console.log('Database is connected.'))
	.catch((err) => console.log(err));

app.get('/', (req, res) => {
	res.send('<h1>How are you?</h1>');
});

app.use('*', (req, res) => {
	const { baseUrl } = req;

	res.send(`<h1>${baseUrl} Not Found!</h1>`);
});

app.listen(port, () => {
	console.log(`Server is running: ${port}`);
});
