import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<Experience />
			<Skills />
		</>
	);
}

export default App;
