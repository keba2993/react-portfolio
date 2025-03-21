import { Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import Grid from '@mui/material/Grid2';
// import portraitImg from '../assets/portrait-nasdaq.jpg';

function Hero() {
	return (
		<Grid container spacing={2} className='hero-container'>
			<Grid
				container
				spacing={2}
				size={{ xs: 12, sm: 12, md: 12 }}
				direction='row'
				sx={{ maxHeight: '100%' }}
			>
				<Grid size={4}>
					<Typography variant='h2'>Kevin Barone</Typography>
					<Typography variant='h5'>Fullstack Software Engineer</Typography>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='nav-github'
						href='https://github.com/keba2993'
					>
						<GitHub className='hero-icon' />
					</IconButton>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='nav-linkedin'
						href='https://www.linkedin.com/in/kbarone18/'
					>
						<LinkedIn className='hero-icon' />
					</IconButton>
				</Grid>
				<Grid size={8}>
					<Typography variant='body1' align='justify'>
						I am a fullstack developer with a passion for building robust web
						applications and empowering software teams to develop impactful
						products. I have experience working with a variety of technologies
						including React, Node.js, TypeScript, and Java. I am always looking
						for new opportunities to learn and grow as a developer by working on
						challenging projects. <br />
						<br />
						Growing up, I first discoverd my interest in programming while
						watching my father work as a software engineer. I was finally able
						to take my first Computer Basics cours in 6th grade. I quickly fell
						in love with technology and always wanted to find new ways be
						creative with technoligical platforms.
						<br />
						<br />
						Through internships I gained experience in a diverse range of
						development environments, including full-stack web development,
						mobile development, and test engineering. I continue to push myself
						beyond my limits, learning new technologies and frameworks to expand
						my skillset. Taking ownership of my work and being a team leader has
						always been a priority for me as I continue to grow my career in
						software development.
					</Typography>
				</Grid>
			</Grid>
			{/* <Grid size={{ xs: 12, sm: 12, md: 4 }} sx={{ textAlign: 'center' }}>
				<Box
					component='img'
					className='hero-img'
					alt='Kevin Barone Portrait Image'
					src={portraitImg}
				/>
			</Grid> */}
		</Grid>
	);
}

export default Hero;
