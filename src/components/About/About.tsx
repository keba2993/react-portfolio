import {
	Typography,
	Paper,
	Card,
	CardContent,
	Box,
	CardActions,
	Button,
} from '@mui/material';
import { aboutData } from '../../data';
import { styled } from '@mui/material/styles';

function Resume() {
	const AboutContainer = styled('div')(({ theme }) => ({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
			flexWrap: 'wrap',
			justifyContent: 'space-around',
			alignItems: 'flex-start',
		},
	}));

	return (
		<Paper
			style={{
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Typography
				variant='h4'
				gutterBottom
				style={{ margin: '1rem 1rem 0 1rem' }}
			>
				About
			</Typography>
			<Typography variant='body1' sx={{ margin: '1rem' }}>
				In addition to all my technical work and skills, I also partake in many
				extracurricular activites. There is much more to a person than just
				their technical acumen. Scoll down to learn a bit more about my work
				outside of work!
			</Typography>
			<AboutContainer>
				{aboutData.map((item, index) => (
					<Card key={index} style={{ margin: '1rem', maxWidth: '35rem' }}>
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
		</Paper>
	);
}

export default Resume;
