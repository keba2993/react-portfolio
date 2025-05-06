import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import transition from './transition';
import Footer from './components/Footer';

function App() {
	const location = useLocation();

	return (
		<>
			<Navbar />
			<AnimatePresence mode='wait'>
				<Routes location={location} key={location.pathname}>
					<Route path='/' element={transition(<Home />)} />
					<Route path='/projects' element={transition(<Projects />)} />
					<Route path='/about' element={transition(<About />)} />
				</Routes>
				<Footer />
			</AnimatePresence>
		</>
	);
}

export default App;
