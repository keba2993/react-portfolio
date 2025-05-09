import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
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
			</AnimatePresence>
			<Footer />
		</>
	);
}

export default App;
