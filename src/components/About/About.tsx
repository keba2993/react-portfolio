import {
	Typography,
	Card,
	CardContent,
	Box,
	CardActions,
	Button,
} from '@mui/material';
import { aboutData } from '../../data';
import { styled } from '@mui/material/styles';

function About() {
	const AboutContainer = styled('div')(({ theme }) => ({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		maxWidth: '1280px',
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
			flexWrap: 'wrap',
		},
	}));

	const AboutTitle = styled('h4')(({ theme }) => ({
		margin: '1rem 1rem 0 1rem',
		textAlign: 'left',
		[theme.breakpoints.up('sm')]: {
			textAlign: 'center',
			margin: '1.5rem auto',
		},
	}));

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<AboutTitle>
				<Typography variant='h4' gutterBottom>
					About
				</Typography>
			</AboutTitle>
			<Typography
				variant='body1'
				marginX={{ xs: '1rem', sm: 'auto' }}
				sx={{ maxWidth: '35rem' }}
			>
				In addition to my technical work and skills, I also enjoy many
				extracurricular activities. There is much more to a person than just
				their technical acumen.
			</Typography>

			<AboutContainer>
				{aboutData.map((item, index) => (
					<Card key={index} sx={{ margin: '1rem', maxWidth: '35rem' }}>
						<CardContent>
							<Box
								display={'flex'}
								alignItems={'center'}
								justifyContent={'space-between'}
							>
								<Typography variant='h5'>{item.title}</Typography>
								<Typography
									variant='caption'
									display='block'
									color='secondary.main'
								>
									{item.year}
								</Typography>
							</Box>

							<Typography
								variant='body1'
								color='primary.main'
								sx={{ marginBottom: '0.5rem' }}
							>
								{item.role}
							</Typography>

							<Typography variant='body2' color='text.secondary'>
								{item.description}
							</Typography>
						</CardContent>
						<CardActions>
							<Button size='small' href={item.link} target='_blank'>
								More Info
							</Button>
						</CardActions>
					</Card>
				))}
			</AboutContainer>
		</Box>
	);
}

export default About;
