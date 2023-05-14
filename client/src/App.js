import { CssBaseline } from '@mui/material';
import Navbar from './Components/Navbar';
import FirstNav from './Components/Navbar/FirstNav';

function App() {
	return (
		<div className="app">
			<CssBaseline />
			<main className="content">
				<FirstNav />

				<Navbar />
			</main>
		</div>
	);
}

export default App;
