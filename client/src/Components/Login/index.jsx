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
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { baseUrl } from '../../Config/ServerUrl';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../Store/Slice/slice';

const regularExpression =
	/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

const userSchema = yup.object().shape({
	email: yup.string().email('Invalid Email').required('Required'),
	password: yup
		.string()
		.matches(regularExpression, 'Password Not Valid')
		.required('Required'),
});

const index = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues: {
				email: '',
				password: '',
			},
			validationSchema: userSchema,
			onSubmit: async (values) => {
				await fetch(`${baseUrl}/auth/login`, {
					method: 'POST',
					headers: { 'content-type': 'application/json' },
					body: JSON.stringify(values),
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.status === 'Failed') {
							toast.error(data.message);
						}

						if (data.status === 'Success') {
							toast.success(data.message);
							dispatch(
								setLogin({
									token: data.token,
								})
							);
							setTimeout(() => {
								navigate('/');
							}, 2000);
						}
					});
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
					Sign in
				</Typography>
				<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
						autoFocus
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
						Sign In
					</Button>
					<Grid container>
						<Grid item xs>
							<Link href="#" variant="body2" style={{ color: '#141414' }}>
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link to="/sing-up" variant="body2" style={{ color: '#141414' }}>
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
};

export default index;
