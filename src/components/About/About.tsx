import {
	Typography,
	Card,
	CardContent,
	Box,
	Paper,
	CardActions,
	CardActionArea,
	Button,
} from '@mui/material';
import { aboutData } from '../../data';
import { StyledContainer, StyledTitle } from '../StyledComp';
import { useEffect } from 'react';

function About() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Paper
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
				marginX={{ xs: '2rem', sm: 'auto' }}
				sx={{ maxWidth: '35rem' }}
			>
				In addition to my technical work and skills, I also enjoy many
				extracurricular activities. There is much more to a person than just
				their technical acumen.
			</Typography>

			<StyledContainer>
				{aboutData.map((item, index) => (
					<Card
						key={index}
						square
						sx={{
							padding: '1rem',
							maxWidth: '35rem',
							borderBottom: '1px solid #ccc',
						}}
					>
						<CardActionArea href={item.link} target='_blank'>
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
							<CardActions
								sx={{ justifyContent: 'flex-end', paddingRight: '0' }}
							>
								<Button size='small' href={item.link} target='_blank'>
									More Info
								</Button>
							</CardActions>
						</CardActionArea>
					</Card>
				))}
			</StyledContainer>
		</Paper>
	);
}

export default About;
