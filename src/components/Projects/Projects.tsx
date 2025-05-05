import {
	Card,
	CardContent,
	Typography,
	CardActions,
	Button,
	Paper,
	Box,
	CardActionArea,
} from '@mui/material';
import { projectsData } from '../../data';
import { StyledContainer, StyledTitle } from '../StyledComp';
import { useEffect } from 'react';

function Projects() {
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
				<Typography variant='h4'>Personal Projects</Typography>
			</StyledTitle>

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
						<CardActionArea href={project.link} target='_blank'>
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
							<CardActions
								sx={{ justifyContent: 'flex-end', paddingRight: '0' }}
							>
								<Button size='small' href={project.link} target='_blank'>
									View Project
								</Button>
							</CardActions>
						</CardActionArea>
					</Card>
				))}
			</StyledContainer>
		</Paper>
	);
}

export default Projects;
