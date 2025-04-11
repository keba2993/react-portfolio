import Hero from './components/Hero';
import Navbar from './components/Navbar/Navbar';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import { Paper } from '@mui/material';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route
					path='/'
					element={
						<Paper
							style={{
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<Hero />
							<Experience />
							<Skills />
						</Paper>
					}
				/>
				<Route path='/projects' element={<Projects />} />
				<Route path='/resume' element={<Resume />} />
				<Route path='/contact-me' element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
