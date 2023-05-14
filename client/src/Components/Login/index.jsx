import {
	Avatar,
	Box,
	Button,
	Checkbox,
	Container,
	FormControlLabel,
	Grid,
	IconButton,
	InputAdornment,
	TextField,
	Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const index = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [visiable, setVisiable] = useState(false);

	const handleSubmit = () => {
		console.log('gnasbvb');
	};
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
						// value={values.email}
						// onBlur={handleBlur}
						// onChange={handleChange}
						label="Email Address"
						name="email"
						// error={!!touched.email && !!errors.email}
						// helperText={touched.email && errors.email}
						autoComplete="email"
						autoFocus
					/>

					<TextField
						margin="normal"
						required
						color="secondary"
						fullWidth
						name="password"
						// value={values.password}
						// onBlur={handleBlur}
						// onChange={handleChange}
						label="Password"
						type="password"
						id="password"
						// error={!!touched.password && !!errors.password}
						// helperText={touched.password && errors.password}
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
						Sign In
					</Button>
					<Grid container>
						<Grid item xs>
							<Link href="#" variant="body2" style={{ color: '#141414' }}>
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link to="/register" variant="body2" style={{ color: '#141414' }}>
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
