import React, { useEffect } from 'react';
import { CssBaseline, ThemeProvider, useTheme } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import { Route, Routes, useNavigate } from 'react-router-dom';
import {
	LoginPage,
	HomePage,
	RegisterPage,
	Category,
	Sellers,
	PaymentRequest,
	DeactiveSellers,
	SellersRequest,
	ChatSellers,
} from './Route';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { messageClear, persistence } from './store/Reducer/authReducer';
import Orders from './components/Home/Orders';
import Dashboard from './components/Home/dashboard';

const App = () => {
	const [theme, colorMode] = useMode();
	const themes = useTheme();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { error, user, message } = useSelector((state) => state.auth);

	if (user) {
		localStorage.setItem('user', JSON.stringify(user));
	}

	const token = localStorage.getItem('accessToken');
	const userInfo = localStorage.getItem('user');
	useEffect(() => {
		if (token) {
			dispatch(persistence(token));
		}
		if (!token || !userInfo) {
			navigate('/');
			localStorage.removeItem('accessToken');
			localStorage.removeItem('user');
		}
	}, [token, userInfo]);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div>
					<Routes>
						<Route path="/" element={<LoginPage />} />
						<Route path="/register" element={<RegisterPage />} />
						<Route path="/dashboard" element={<HomePage />}>
							<Route index element={<Dashboard />}></Route>
							<Route path="/dashboard/orders" element={<Orders />}></Route>
							<Route path="/dashboard/category" element={<Category />}></Route>
							<Route path="/dashboard/sellers" element={<Sellers />}></Route>
							<Route
								path="/dashboard/payment-request"
								element={<PaymentRequest />}
							></Route>
							<Route
								path="/dashboard/deactive-sellers"
								element={<DeactiveSellers />}
							></Route>
							<Route
								path="/dashboard/sellers-request"
								element={<SellersRequest />}
							></Route>
							<Route
								path="/dashboard/chat-sellers"
								element={<ChatSellers />}
							></Route>
						</Route>
					</Routes>
					<ToastContainer
						position="bottom-center"
						autoClose={6000}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme={themes.palette.mode === 'dark' ? 'dark' : 'light'}
					/>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

export default App;
