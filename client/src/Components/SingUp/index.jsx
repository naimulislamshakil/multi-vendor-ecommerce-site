/* eslint-disable react-hooks/rules-of-hooks */
import {
	Avatar,
	Box,
	Button,
	Checkbox,
	Container,
	CssBaseline,
	FormControlLabel,
	Grid,
	TextField,
	Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import * as yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import { baseUrl } from '../../Config/ServerUrl';

const index = () => {
	const [avater, setAvater] = useState();
	const navigate = useNavigate();
	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues,
			validationSchema: userSchema,
			onSubmit: async (values) => {
				const user = {
					...values,
					avatar: avater,
				};

				fetch(`${baseUrl}/auth/singup`, {
					method: 'POST',
					headers: { 'content-type': 'application/json' },
					body: JSON.stringify(user),
				})
					.then((res) => res.json())
					.then((data) => {
						console.log(data.status);
						if (data.status === 'Success') {
							toast.success(data.message);
						}

						if (data.status === 'Failed') {
							toast.error(data.message);
						}
					});
			},
		});

	const uplodeImage = (e) => {
		const imageBB = 'aca65d68a0810361f2d2ced87f951d28';
		const image = e.target.files[0];
		let formData = new FormData();
		formData.append('image', image);
		const url = `https://api.imgbb.com/1/upload?key=${imageBB}`;

		fetch(url, {
			method: 'POST',
			body: formData,
		})
			.then((res) => res.json())
			.then((data) => setAvater(data.data.url));
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign Up
				</Typography>
				<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						color="secondary"
						fullWidth
						id="text"
						value={values.firstName}
						onBlur={handleBlur}
						onChange={handleChange}
						label="First Name"
						name="firstName"
						error={!!touched.firstName && !!errors.firstName}
						helperText={touched.firstName && errors.firstName}
						autoComplete="text"
						autoFocus
					/>

					<TextField
						margin="normal"
						required
						color="secondary"
						fullWidth
						id="text"
						value={values.lastName}
						onBlur={handleBlur}
						onChange={handleChange}
						label="Last Name"
						name="lastName"
						error={!!touched.lastName && !!errors.lastName}
						helperText={touched.lastName && errors.lastName}
						autoComplete="text"
						autoFocus
					/>

					<TextField
						margin="normal"
						required
						color="secondary"
						fullWidth
						id="email"
						value={values.email}
						onBlur={handleBlur}
						onChange={handleChange}
						label="Email Address"
						name="email"
						error={!!touched.email && !!errors.email}
						helperText={touched.email && errors.email}
						autoComplete="email"
						autoFocus
					/>
					<TextField
						margin="normal"
						required
						color="secondary"
						fullWidth
						name="password"
						value={values.password}
						onBlur={handleBlur}
						onChange={handleChange}
						label="Password"
						type="password"
						id="password"
						error={!!touched.password && !!errors.password}
						helperText={touched.password && errors.password}
						autoComplete="current-password"
					/>

					<Box display="flex" height="auto" alignItems="center">
						{avater ? (
							<Avatar
								alt="avater"
								src={avater}
								sx={{ width: 56, height: 56, border: '1px solid black' }}
							/>
						) : (
							<AccountCircleIcon style={{ width: 56, height: 56 }} />
						)}

						<input
							accept="image"
							type="file"
							id="select-image"
							style={{ display: 'none' }}
							onChange={uplodeImage}
						/>
						<label htmlFor="select-image">
							<Button
								style={{ marginLeft: '10px', backgroundColor: '#4cceac' }}
								variant="contained"
								component="span"
							>
								Upload Image
							</Button>
						</label>
					</Box>

					<FormControlLabel
						control={<Checkbox value="remember" style={{ color: '#141414' }} />}
						label="Remember me"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
						style={{
							color: '#fff',
							background: '#4cceac',
						}}
					>
						Sign Up
					</Button>
					<Grid container>
						<Grid item textAlign="center">
							<Link
								to="/login"
								variant="body2"
								style={{ color: '#141414', textAlign: 'center' }}
							>
								{'Alrady have an account? Sign In'}
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
};

const initialValues = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
};

const regularExpression =
	/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

const userSchema = yup.object().shape({
	firstName: yup.string().required('Required'),
	lastName: yup.string().required('Required'),
	email: yup.string().email('Invalid Email').required('Required'),
	password: yup
		.string()
		.matches(regularExpression, 'Password Not Valid')
		.required('Required'),
});

export default index;
