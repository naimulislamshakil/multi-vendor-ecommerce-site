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
import { Country, State, City } from 'country-state-city';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { baseUrl } from '../../Config/ServerUrl';
import { toast } from 'react-toastify';

const phoneRegex = /^[+]{0,1}[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]{8,14}$/;
const helpLineRegex = /^[0-9]{4,14}$/;

const addBrandSchema = yup.object().shape({
	name: yup.string().required('Enter Your Brand Name.'),
	email: yup
		.string()
		.email('Invalid Email')
		.required('Enter Your Brand Email.'),
	website: yup.string().url('Enter Your Brand Website.'),
	phone: yup
		.string()
		.matches(phoneRegex, 'Enter Your Brand Phone Number Like: +8801879212420')
		.required('Enter Your Brand Phone Number'),
	helpline: yup
		.string()
		.matches(helpLineRegex, 'Enter Your Brand Helpline Number Like: 16247')
		.required('Enter Your Brand Helpline Number.'),
	address1: yup.string().required('Enter Your Brand Address'),
	address2: yup.string(),
	country: yup.string().required('Select Your Brand Country.'),
	state: yup.string().required('Select Your Brand State.'),
	city: yup.string(),
	zip: yup.number().required('Enter Your Brand Location Zip Code.'),
	description: yup.string().required('Enter Your Brand Description.'),
});

const index = () => {
	const isMobile = useMediaQuery('(max-width:800px)');
	const [countryCode, setCountryCode] = useState('BD');
	const [states, setStates] = useState([]);
	const [stateCode, setStateCode] = useState('');
	const [citys, setCitys] = useState([]);

	const countries = Country.getAllCountries();

	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues: {
				name: '',
				email: '',
				website: '',
				phone: '',
				helpline: '',
				address1: '',
				address2: '',
				country: '',
				state: '',
				city: '',
				zip: '',
				description: '',
			},
			validationSchema: addBrandSchema,
			onSubmit: async (values, { resetForm }) => {
				const data = {
					name: values.name,
					description: values.description,
					email: values.email,
					website: values.website,
					phoneNumber: values.phone,
					helpLine: values.helpline,
					addresses: {
						country: values.country,
						city: values.city,
						state: values.state,
						address1: values.address1,
						address2: values.address2,
						zipCode: values.zip,
					},
				};

				await fetch(`${baseUrl}/brand/create`, {
					method: 'POST',
					headers: { 'content-type': 'application/json' },
					body: JSON.stringify(data),
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.status === 'Success') {
							toast.success(data.message);
							resetForm();
						}
					})
					.catch((err) => console.log(err));
			},
		});

	useEffect(() => {
		setStates(State.getStatesOfCountry(countryCode));
	}, [countryCode]);

	useEffect(() => {
		setCitys(City.getCitiesOfState(countryCode, stateCode));
	}, [stateCode, countryCode]);

	return (
		<Box display="flex" justifyContent="center" alignItems="center">
			<CssBaseline />
			<Box width={isMobile ? '90%' : '50%'}>
				<Typography variant="h3" fontWeight="bold" textAlign="center">
					Add Brand
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
							label="Brand Name *"
						/>
					</Box>

					<Box marginTop="10px">
						<TextField
							fullWidth
							type="email"
							name="email"
							value={values.email}
							onBlur={handleBlur}
							onChange={handleChange}
							error={!!touched.email && !!errors.email}
							helperText={touched.email && errors.email}
							variant="outlined"
							label="Brand Email *"
						/>
					</Box>
					<Box marginTop="10px">
						<TextField
							fullWidth
							type="text"
							name="website"
							value={values.website}
							onBlur={handleBlur}
							onChange={handleChange}
							error={!!touched.website && !!errors.website}
							helperText={touched.website && errors.website}
							variant="outlined"
							label="Brand Website"
						/>
					</Box>
					<Box marginTop="10px" display="flex" justifyContent="center">
						<TextField
							fullWidth
							type="text"
							name="phone"
							value={values.phone}
							onBlur={handleBlur}
							onChange={handleChange}
							error={!!touched.phone && !!errors.phone}
							helperText={touched.phone && errors.phone}
							variant="outlined"
							label="Brand Phone Number *"
							style={{ marginRight: '5px' }}
						/>
						<TextField
							fullWidth
							type="text"
							name="helpline"
							value={values.helpline}
							onBlur={handleBlur}
							onChange={handleChange}
							error={!!touched.helpline && !!errors.helpline}
							helperText={touched.helpline && errors.helpline}
							variant="outlined"
							label="Brand HelpLine Number *"
						/>
					</Box>

					<Box marginTop="10px">
						<TextField
							fullWidth
							type="text"
							name="address1"
							value={values.address1}
							onBlur={handleBlur}
							onChange={handleChange}
							error={!!touched.address1 && !!errors.address1}
							helperText={touched.address1 && errors.address1}
							variant="outlined"
							label="Address 1 *"
						/>
						<TextField
							fullWidth
							type="text"
							name="address2"
							value={values.address2}
							onBlur={handleBlur}
							onChange={handleChange}
							error={!!touched.address2 && !!errors.address2}
							helperText={touched.address2 && errors.address2}
							variant="outlined"
							label="Address 2"
							style={{ marginTop: '10px' }}
						/>

						<Box marginTop="10px" display="flex" justifyContent="center">
							<FormControl fullWidth>
								<InputLabel id="demo-simple-select-label">Country *</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									type="text"
									label="Country *"
									name="country"
									value={values.country}
									onBlur={handleBlur}
									onChange={handleChange}
									error={!!touched.country && !!errors.country}
									helperText={touched.country && errors.country}
									style={{ marginRight: '5px' }}
								>
									{countries.map((option) => (
										<MenuItem
											key={option.isoCode}
											onClick={() => setCountryCode(option.isoCode)}
											value={option.name}
										>
											{option.name}
										</MenuItem>
									))}
								</Select>
							</FormControl>

							<FormControl fullWidth>
								<InputLabel id="demo-simple-select-label">State *</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									label="State *"
									type="text"
									name="state"
									value={values.state}
									onBlur={handleBlur}
									onChange={handleChange}
									error={!!touched.state && !!errors.state}
									helperText={touched.state && errors.state}
									style={{ marginRight: '5px' }}
								>
									{states.map((option) => (
										<MenuItem
											key={option.value}
											onClick={() => setStateCode(option.isoCode)}
											value={option.name}
										>
											{option.name}
										</MenuItem>
									))}
								</Select>
							</FormControl>

							<FormControl fullWidth>
								<InputLabel id="demo-simple-select-label">City</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									name="city"
									type="text"
									value={values.city}
									onBlur={handleBlur}
									onChange={handleChange}
									error={!!touched.city && !!errors.city}
									helperText={touched.city && errors.city}
									label="City"
									style={{ marginRight: '5px' }}
								>
									{citys.map((option) => (
										<MenuItem key={option.value} value={option.name}>
											{option.name}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</Box>

						<TextField
							fullWidth
							type="text"
							name="zip"
							value={values.zip}
							onBlur={handleBlur}
							onChange={handleChange}
							error={!!touched.zip && !!errors.zip}
							helperText={touched.zip && errors.zip}
							variant="outlined"
							label="Zip Code *"
							style={{ marginTop: '10px' }}
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
							Add Brand
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default index;
