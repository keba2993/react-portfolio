import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import { Paper } from '@mui/material';

function App() {
	return (
		<Paper>
			<Navbar />
			<Hero />
			<Experience />
			<Skills />
		</Paper>
	);
}

export default App;
