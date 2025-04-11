import { Typography, IconButton, Container } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import Grid from '@mui/material/Grid2';

function Hero() {
	return (
		<Grid container spacing={{ xs: 1, sm: 2, md: 2, lg: 4 }} direction='row'>
			<Grid
				size={{ xs: 12, sm: 12, md: 4, lg: 4 }}
				sx={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					padding: '1rem 1rem 0 1rem',
				}}
			>
				<Typography variant='h2' color='primary' fontWeight={400}>
					Kevin Barone
				</Typography>
				<Typography variant='h5' fontWeight={400}>
					Fullstack Software Engineer
				</Typography>
				<Container
					sx={{
						display: 'flex',
						alignItems: 'center',
						marginTop: '0.25rem',
					}}
					disableGutters
				>
					<IconButton
						size='large'
						aria-label='nav-github'
						color='secondary'
						href='https://github.com/keba2993'
						sx={{ padding: '0px 0.25em' }}
					>
						<GitHub sx={{ fontSize: 40 }} />
					</IconButton>
					<IconButton
						size='large'
						edge='end'
						color='secondary'
						aria-label='nav-linkedin'
						href='https://www.linkedin.com/in/kbarone18/'
						sx={{ padding: '0 0.25em' }}
					>
						<LinkedIn sx={{ fontSize: 40 }} />
					</IconButton>
				</Container>
			</Grid>
			<Grid size={{ xs: 12, sm: 12, md: 8, lg: 8 }} sx={{ padding: '1rem' }}>
				<Typography variant='body1' align='justify'>
					I am a fullstack developer with a passion for building robust web
					applications and empowering software teams to develop impactful
					products. I have experience working with a variety of technologies
					including React, Node.js, TypeScript, and Java. I am always looking
					for new opportunities to learn and grow as a developer by working on
					challenging projects. <br />
					<br />
					Growing up, I first discoverd my interest in programming while
					watching my father work as a software engineer. I was finally able to
					take my first Computer Basics cours in 6th grade. I quickly fell in
					love with technology and always wanted to find new ways be creative
					with technoligical platforms.
					<br />
					<br />
					Through internships I gained experience in a diverse range of
					development environments, including full-stack web development, mobile
					development, and test engineering. I continue to push myself beyond my
					limits, learning new technologies and frameworks to expand my
					skillset. Taking ownership of my work and being a team leader has
					always been a priority for me as I continue to grow my career in
					software development.
				</Typography>
			</Grid>
		</Grid>
	);
}

export default Hero;
