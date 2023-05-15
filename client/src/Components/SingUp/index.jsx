/* eslint-disable react-hooks/rules-of-hooks */
import {
	Avatar,
	Box,
	Button,
	Checkbox,
	Container,
	FormControlLabel,
	Grid,
	TextField,
	Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import * as yup from 'yup';

const index = () => {
	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues,
			validationSchema: userSchema,
			onSubmit: async (values) => {
				console.log(values);
			},
		});

	return (
		<Container component="main" maxWidth="xs">
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
