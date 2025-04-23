import { Paper } from '@mui/material';
import Hero from './Hero';
import Experience from './Experience/Experience';
import Skills from './Skills/Skills';

function Home() {
	return (
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
	);
}

export default Home;
