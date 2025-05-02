import {
	Typography,
	Card,
	CardContent,
	Box,
	CardActions,
	Button,
} from '@mui/material';
import { aboutData } from '../../data';
import { StyledContainer, StyledTitle } from '../StyledComp';

function About() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<StyledTitle>
				<Typography variant='h4' gutterBottom>
					About
				</Typography>
			</StyledTitle>
			<Typography
				variant='body1'
				marginX={{ xs: '1rem', sm: 'auto' }}
				sx={{ maxWidth: '35rem' }}
			>
				In addition to my technical work and skills, I also enjoy many
				extracurricular activities. There is much more to a person than just
				their technical acumen.
			</Typography>

			<StyledContainer>
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
			</StyledContainer>
		</Box>
	);
}

export default About;
