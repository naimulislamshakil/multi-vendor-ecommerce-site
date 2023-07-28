const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const formidable = require('formidable');
const cookieParser = require('cookie-parser');
const fileUplode = require('express-fileupload');
const cloudinary = require('cloudinary').v2;
const userRoute = require('./Routes/v1/user.route');
const categoryRouter = require('./Routes/v1/category.route');
require('dotenv').config();

app.use(express.json());
app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));
app.use(bodyParser.json());
app.use(cookieParser());

cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
	secure: true,
});

mongoose
	.connect(
		`mongodb+srv://multi-vendor:${process.env.DB_PASS}@cluster0.snqqfox.mongodb.net/?retryWrites=true&w=majority`
	)
	.then(() => console.log('Database is connected.'))
	.catch((err) => console.log(err));

app.get('/', (req, res) => {
	res.send('<h1>How are you?</h1>');
});
app.use('/', userRoute);
app.use('/', categoryRouter);
app.use(
	fileUplode({
		useTempFiles: true,
	})
);

app.post('/file-uplode', async (req, res) => {
	const file = req.files.image;
	await cloudinary.uploader
		.upload(file.tempFilePath, (err, result) => {
			if (err) {
				res.status(404).json({ err: err.message });
			}

			if (result) {
				res.status(200).json({ url: result.url });
			}
		})
		.catch((err) => res.status(404).json({ err: err.message }));
});

app.use('*', (req, res) => {
	const { baseUrl } = req;

	res.send(`<h1>${baseUrl} Not Found!</h1>`);
});

app.listen(port, () => {
	console.log(`Server is running: ${port}`);
});
