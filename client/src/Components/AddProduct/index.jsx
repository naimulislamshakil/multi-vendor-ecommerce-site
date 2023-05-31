/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import {
	Box,
	Button,
	CssBaseline,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
	useMediaQuery,
} from '@mui/material';
import { status, units } from '../../Constants/AddProduct';
import categoriesData from '../../Constants/Home/Cetagory';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Tags from './Tags';

const productSchema = yup.object().shape({
	name: yup.string().required('Enter Your Product Name.'),
	price: yup.number().min(0).required('Enter Your Product Price.'),
	unit: yup.string().required('Select You Product Unit.'),
	status: yup.string().required('Select Your Product Status'),
	category: yup.string().required('Select a Prouuct Category.'),
	quantity: yup.string().required('Enter Your Product Quantity.'),
	rating: yup.number().min(1).required('Select Your Product Rating.'),
	discount: yup.number(),
	description: yup.string().required('Enter Your Product Description.'),
	brand: yup.string().required('Select a Product Brand.'),
	tax: yup.number().required('Enter Your Tax.'),
	vat: yup.number().required('Enter Your Vat.'),
});

const index = () => {
	const isMobile = useMediaQuery('(max-width:800px)');
	const [brandNames, setBrandNames] = useState([]);
	const [brand, setBrand] = useState('');
	const [tags, setTags] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/brand/getBrandName', {
			method: 'GET',
			headers: { 'content-type': 'application/json' },
		})
			.then((res) => res.json())
			.then((data) => {
				setBrandNames(data.BrandName);
			})
			.catch((err) => console.log(err));
	}, []);

	const addTags = (event) => {
		if (event.key === 'Enter' && event.target.value !== '') {
			setTags([...tags, event.target.value]);
			event.target.value = '';
		}
	};

	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues: {
				name: '',
				price: '',
				unit: '',
				status: '',
				category: '',
				quantity: '',
				rating: '',
				discount: '',
				description: '',
				tax: '',
				vat: '',
				brand: '',
			},
			validationSchema: productSchema,
			onSubmit: async (values) => {
				console.log({ values });
			},
		});

	const handleDelete = (text) => {
		setTags(tags.filter((tag) => tag !== text));
	};
	return (
		<Box display="flex" justifyContent="center" alignItems="center">
			<CssBaseline />
			<Box width={isMobile ? '90%' : '50%'}>
				<Typography variant="h3" fontWeight="bold" textAlign="center">
					Add Product
				</Typography>

				<Box component="form" onSubmit={handleSubmit}>
					<Box marginTop="10px">
						<TextField
							fullWidth
							type="text"
							name="name"
							value={values.name}
							onBlur={handleBlur}
							onChange={handleChange}
							error={!!touched.name && !!errors.name}
							helperText={touched.name && errors.name}
							variant="outlined"
							label="Product Name *"
						/>
					</Box>

					<Box marginTop="10px">
						<TextField
							fullWidth
							type="text"
							name="price"
							value={values.price}
							onBlur={handleBlur}
							onChange={handleChange}
							error={!!touched.price && !!errors.price}
							helperText={touched.price && errors.price}
							variant="outlined"
							label="Product Price *"
						/>
					</Box>

					<Box marginTop="10px">
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">
								Select Brand *
							</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								label="Select Brand *"
								type="text"
								name="brand"
								onChange={(e) => setBrand(e.target.value)}
							>
								{brandNames.map((option, i) => (
									<MenuItem key={i} value={option}>
										{option}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Box>

					<Box marginTop="10px">
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">
								Select Category *
							</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								label="Select Category *"
								type="text"
								name="category"
								value={values.category}
								onBlur={handleBlur}
								onChange={handleChange}
								error={!!touched.category && !!errors.category}
								helperText={touched.category && errors.category}
							>
								{categoriesData.map((option, i) => (
									<MenuItem key={i} value={option.title}>
										{option.title}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Box>

					<Box marginTop="10px" display="flex" justifyContent="center">
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">Unit *</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								type="text"
								label="Unit *"
								name="unit"
								value={values.unit}
								onBlur={handleBlur}
								onChange={handleChange}
								error={!!touched.unit && !!errors.unit}
								helperText={touched.unit && errors.unit}
								style={{ marginRight: '5px' }}
							>
								{units.map((option, i) => (
									<MenuItem key={i} value={option.name}>
										{option.name}
									</MenuItem>
								))}
							</Select>
						</FormControl>

						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">Status *</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								label="Status *"
								type="text"
								name="status"
								value={values.status}
								onBlur={handleBlur}
								onChange={handleChange}
								error={!!touched.status && !!errors.status}
								helperText={touched.status && errors.status}
								style={{ marginRight: '5px' }}
							>
								{status.map((option, i) => (
									<MenuItem key={i} value={option.name}>
										{option.name}
									</MenuItem>
								))}
							</Select>
						</FormControl>

						<TextField
							fullWidth
							name="quantity"
							value={values.quantity}
							onBlur={handleBlur}
							onChange={handleChange}
							error={!!touched.quantity && !!errors.quantity}
							helperText={touched.quantity && errors.quantity}
							type="text"
							variant="outlined"
							label="Product Quantity *"
						/>
					</Box>

					<Box marginTop="10px">
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">Rating *</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								label="Rating *"
								type="text"
								name="rating"
								value={values.rating}
								onBlur={handleBlur}
								onChange={handleChange}
								error={!!touched.rating && !!errors.rating}
								helperText={touched.rating && errors.rating}
								style={{ marginRight: '5px' }}
							>
								{[1, 2, 3, 4, 5].map((option, i) => (
									<MenuItem key={i} value={option}>
										{option}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Box>

					<Box marginTop="10px">
						<TextField
							fullWidth
							name="discount"
							value={values.discount}
							onBlur={handleBlur}
							onChange={handleChange}
							error={!!touched.discount && !!errors.discount}
							helperText={touched.discount && errors.discount}
							type="text"
							variant="outlined"
							label="Price Discount"
						/>
					</Box>

					<Box marginTop="10px">
						<TextField
							fullWidth
							name="tax"
							value={values.tax}
							onBlur={handleBlur}
							onChange={handleChange}
							error={!!touched.tax && !!errors.tax}
							helperText={touched.tax && errors.tax}
							type="text"
							variant="outlined"
							label="Tax *"
						/>
					</Box>

					<Box marginTop="10px">
						<TextField
							fullWidth
							name="vat"
							value={values.vat}
							onBlur={handleBlur}
							onChange={handleChange}
							error={!!touched.vat && !!errors.vat}
							helperText={touched.vat && errors.vat}
							type="text"
							variant="outlined"
							label="Vat *"
						/>
					</Box>

					<Box marginTop="10px">
						<TextField
							fullWidth
							variant="outlined"
							sx={{ margin: '1rem 0' }}
							margin="none"
							label="Tags"
							onKeyUp={addTags}
							disabled={tags.length === 5}
							helperText={
								tags.length !== 5
									? `You Can Add More Then ${5 - tags.length} ${
											5 - tags.length === 1 ? 'Tag' : 'Tags'
									  }`
									: ''
							}
							InputProps={{
								startAdornment: (
									<Box sx={{ margin: '0 0.2rem 0 0', display: 'flex' }}>
										{tags.map((data, index) => {
											return (
												<Tags
													data={data}
													handleDelete={handleDelete}
													key={index}
												/>
											);
										})}
									</Box>
								),
							}}
						/>
					</Box>

					<Box marginTop="10px">
						<TextField
							fullWidth
							multiline
							name="description"
							value={values.description}
							onBlur={handleBlur}
							onChange={handleChange}
							error={!!touched.description && !!errors.description}
							helperText={touched.description && errors.description}
							type="text"
							maxRows={4}
							variant="outlined"
							label="Brand Description *"
						/>
					</Box>

					<Box
						marginTop="10px"
						display="flex"
						justifyContent="center"
						marginBottom="10px"
					>
						<Button
							type="submit"
							style={{
								color: '#fff',
								background: '#4cceac',
							}}
							variant="contained"
						>
							Add Product
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default index;
