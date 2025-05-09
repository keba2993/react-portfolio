import {
	Card,
	CardContent,
	Typography,
	CardActions,
	Button,
	Box,
	CardActionArea,
} from '@mui/material';
import { projectsData } from '../data';
import { StyledContainer, StyledTitle } from '../components/StyledComp';
import { useEffect } from 'react';

function Projects() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				minHeight: '100dvh',
			}}
		>
			<StyledTitle>Personal Projects</StyledTitle>

			<StyledContainer>
				{projectsData.map((project, index) => (
					<Card
						key={index}
						square
						sx={{
							padding: '1rem',
							maxWidth: '35rem',
							borderBottom: '1px solid #ccc',
						}}
					>
						<CardActionArea
							href={project.link}
							target='_blank'
							sx={{ ':hover': { backgroundColor: 'none' } }}
						>
							<CardContent>
								<Box
									display={'flex'}
									alignItems={'center'}
									justifyContent={'space-between'}
									sx={{ marginBottom: '0.5rem' }}
								>
									<Typography variant='h5'>{project.title}</Typography>
									<Typography
										variant='caption'
										display='block'
										color='secondary.main'
									>
										{project.date}
									</Typography>
								</Box>

								<Typography variant='body2' color='text.secondary'>
									{project.description}
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions sx={{ justifyContent: 'flex-end', paddingRight: '0' }}>
							<Button size='small' href={project.link} target='_blank'>
								View Project
							</Button>
						</CardActions>
					</Card>
				))}
			</StyledContainer>
		</Box>
	);
}

export default Projects;
