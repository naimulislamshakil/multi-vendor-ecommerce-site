import React from 'react';
import { CssBaseline, ThemeProvider, useTheme } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import { Route, Routes } from 'react-router-dom';
import { LoginPage, HomePage, RegisterPage, AdminLoginPage } from './Route';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	const [theme, colorMode] = useMode();
const themes=useTheme()
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/register" element={<RegisterPage />} />
						<Route path="/admin/login" element={<AdminLoginPage />} />
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
						theme={themes.palette.mode==="dark"?"dark":"light"}
					/>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

export default App;
