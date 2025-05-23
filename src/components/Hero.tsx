import { Typography, IconButton, Container } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import Grid from '@mui/material/Grid2';

function Hero() {
	return (
		<Grid
			container
			spacing={{ xs: 1, sm: 2, md: 2 }}
			direction='row'
			paddingY={{ xs: '1rem', sm: '1.5rem', md: '2rem', lg: '2rem' }}
			paddingX={{ xs: '1rem', sm: '1rem', md: '2rem', lg: '3rem' }}
			maxWidth={'1280px'}
			marginX={'auto'}
		>
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
						justifyContent: 'flex-start',
					}}
					disableGutters
				>
					<IconButton
						aria-label='nav-github'
						color='secondary'
						href='https://github.com/keba2993'
						sx={{ margin: 0 }}
					>
						<GitHub sx={{ fontSize: '1.25em' }} />
					</IconButton>
					<IconButton
						edge='end'
						color='secondary'
						aria-label='nav-linkedin'
						href='https://www.linkedin.com/in/kbarone18/'
						sx={{ margin: 0 }}
					>
						<LinkedIn sx={{ fontSize: '1.25em' }} />
					</IconButton>
					<IconButton
						edge='end'
						color='secondary'
						aria-label='nav-email'
						href='mailto:kevinbarone18@gmail.com'
						sx={{ margin: 0 }}
					>
						<Email sx={{ fontSize: '1.25em' }} />
					</IconButton>
				</Container>
			</Grid>
			<Grid size={{ xs: 12, sm: 12, md: 8, lg: 8 }} sx={{ padding: '1rem' }}>
				<Typography variant='body1'>
					I am a fullstack developer with a passion for building robust web
					applications and empowering software teams to develop impactful
					products. I have experience working with a variety of technologies
					including React, Node.js, TypeScript, and Java. I am always looking
					for new opportunities to learn and grow as a developer by working on
					challenging projects. <br />
					<br />
					Growing up, I first discovered my interest in programming while
					watching my father work as a software engineer. I was finally able to
					take my first Computer Basics course in 6th grade. I quickly fell in
					love with technology and always wanted to find new ways to be creative
					with technological platforms.
					<br />
					<br />
					Through internships, I gained experience in a diverse range of
					development environments, including full-stack web development, mobile
					development, and test engineering. I continue to push myself beyond my
					limits, learning new technologies and frameworks to expand my
					skillset. Taking ownership of my work and being a team leader are
					always priorities of mine as I seek to grow my career in software
					development.
				</Typography>
			</Grid>
		</Grid>
	);
}

export default Hero;
