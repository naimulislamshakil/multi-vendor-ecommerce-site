/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import {
	Avatar,
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	Grid,
	TextField,
	Typography,
	useTheme,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Topbar } from '../../Route';
import { tokens } from '../../theme';
import { useFormik } from 'formik';
import { PropagateLoader } from 'react-spinners';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { messageClear, register } from '../../store/Reducer/authReducer';

const index = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { loading, error, message } = useSelector((state) => state.auth);

	useEffect(() => {
		if (error) {
			toast.error(error);
			dispatch(messageClear());
		}

		if (message) {
			toast.success(message);
			dispatch(messageClear());
			navigate('/');
		}
	}, [error, message]);

	const overrideStyle = {
		display: 'flex',
		margin: '0 auto',
		height: '24px',
		justifyContent: 'center',
		alignItems: 'center',
	};

	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues,
			validationSchema: userSchema,
			onSubmit: async (values) => {
				dispatch(register(values));
			},
		});

	return (
		<Box>
			<Topbar />

			{/* Register */}

			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					width: '50%',
					marginLeft: 'auto',
					marginRight: 'auto',
					marginBottom: '20px',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Register
				</Typography>
				<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						color="secondary"
						fullWidth
						value={values.first}
						onBlur={handleBlur}
						onChange={handleChange}
						label="First Name"
						name="first"
						error={!!touched.first && !!errors.first}
						helperText={touched.first && errors.first}
						autoFocus
					/>

					<TextField
						margin="normal"
						required
						color="secondary"
						fullWidth
						value={values.last}
						onBlur={handleBlur}
						onChange={handleChange}
						label="Last Name"
						name="last"
						error={!!touched.last && !!errors.last}
						helperText={touched.last && errors.last}
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
						control={
							<Checkbox value="remember" style={{ color: colors.grey[100] }} />
						}
						label="Remember me"
					/>
					<Button
						disabled={loading ? true : false}
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
						style={{
							color: colors.grey[100],
							background: colors.greenAccent[500],
						}}
					>
						{loading ? (
							<PropagateLoader color="#fff" cssOverride={overrideStyle} />
						) : (
							'Register'
						)}
					</Button>
					<Grid container>
						<Grid item xs>
							<Link
								href="#"
								variant="body2"
								style={{ color: colors.grey[100] }}
							>
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link to="/" variant="body2" style={{ color: colors.grey[100] }}>
								{"Don't have an account? Sign In"}
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Box>
	);
};

const initialValues = {
	email: '',
	password: '',
	first: '',
	last: '',
};

const regularExpression =
	/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

const userSchema = yup.object().shape({
	email: yup.string().email('Invalid Email').required('Required'),
	password: yup
		.string()
		.matches(regularExpression, 'Password Not Valid')
		.required('Required'),
	first: yup.string().required(),
	last: yup.string().required(),
});

export default index;
