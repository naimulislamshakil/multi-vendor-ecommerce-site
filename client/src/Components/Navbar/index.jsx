import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auths, pages } from '../../Constants/Navbar';
import { setLogout } from '../../Store/Slice/slice';

const Navbar = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);

	const handelRoute = (route) => {
		navigate(route);
	};

	const logout = () => {
		dispatch(setLogout());
	};

	return (
		<Container maxWidth="sx">
			<AppBar
				position="static"
				style={{
					backgroundColor: 'white',
					color: 'black',
					boxShadow: 'none',
				}}
			>
				<Toolbar disableGutters>
					<Box
						justifyContent="center"
						sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
					>
						{pages.map((page, i) => (
							<Button
								key={i}
								onClick={() => handelRoute(page.route)}
								sx={{ my: 2, color: 'white', display: 'block' }}
								style={{ color: '#666666', fontWeight: 'bold' }}
								className="hoverButton"
							>
								{page.name}
							</Button>
						))}

						{user ? (
							<Button
								sx={{ my: 2, color: 'white', display: 'block' }}
								style={{ color: '#B2BEB5', fontWeight: 'bold' }}
								className="hoverButton"
								onClick={logout}
							>
								LogOut
							</Button>
						) : (
							auths.map((auth, i) => (
								<Button
									key={i}
									onClick={() => handelRoute(auth.route)}
									sx={{ my: 2, color: 'white', display: 'block' }}
									style={{ color: '#B2BEB5', fontWeight: 'bold' }}
									className="hoverButton"
								>
									{auth.name}
								</Button>
							))
						)}
					</Box>
				</Toolbar>
			</AppBar>
		</Container>
	);
};

export default Navbar;
