import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { FirstNav, Navbar, LoginPage } from './Route.js';

function App() {
	return (
		<div className="app">
			<CssBaseline />
			<main className="content">
				{/* <FirstNav />
				<Navbar /> */}

				<Routes>
					<Route path="/login" element={<LoginPage />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
