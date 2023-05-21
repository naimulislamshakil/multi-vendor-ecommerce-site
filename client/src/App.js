import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { FirstNav, Navbar, LoginPage, SingUpPage } from './Route.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<div className="app">
			<CssBaseline />
			<main className="content">
				{/* <FirstNav />
				<Navbar /> */}

				<Routes>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/sing-up" element={<SingUpPage />} />
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
