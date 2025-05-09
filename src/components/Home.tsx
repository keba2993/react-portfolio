import { Box } from '@mui/material';
import Hero from './Hero';
import Experience from './Experience/Experience';
import Skills from './Skills/Skills';
import { useEffect } from 'react';

function Home() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Box
			style={{
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Hero />
			<Experience />
			<Skills />
		</Box>
	);
}

export default Home;
