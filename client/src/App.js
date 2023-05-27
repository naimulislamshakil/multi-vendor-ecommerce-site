import { CssBaseline } from '@mui/material';
import { Routes, Route, useNavigate } from 'react-router-dom';
import {
	FirstNav,
	Navbar,
	LoginPage,
	SingUpPage,
	HomePage,
	CategoryProductPage,
	AddBrandPage,
} from './Route.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { baseUrl } from './Config/ServerUrl.js';
import { setUser } from './Store/Slice/slice.js';
import { useMediaQuery } from '@mui/material';

function App() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const isMobile = useMediaQuery('(max-width:800px)');
	const token = useSelector((state) => state.token);
	const user = useSelector((state) => state.user);

	useEffect(() => {
		fetch(`${baseUrl}/auth/getUser`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Basic ${token}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.status === 'Failed') {
					// navigate('/login');
				} else {
					dispatch(
						setUser({
							user: data.user,
						})
					);
				}
			});
	}, [dispatch, navigate, token]);

	return (
		<div className="app">
			<CssBaseline />
			<main className="content">
				<FirstNav />
				{!isMobile && <Navbar />}

				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/sing-up" element={<SingUpPage />} />
					<Route path="/category/:name" element={<CategoryProductPage />} />
					<Route path="/add-brand" element={<AddBrandPage />} />
				</Routes>
			</main>
			<ToastContainer
				position="bottom-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
		</div>
	);
}

export default App;
