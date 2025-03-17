import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#557246',
		},
		secondary: {
			main: '#ab6ab9',
		},
	},
});

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Navbar />
				<Hero />
				<Experience />
				<Skills />
			</ThemeProvider>
		</>
	);
}

export default App;
