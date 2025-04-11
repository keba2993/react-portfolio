import {
	Card,
	CardContent,
	Typography,
	CardActions,
	Button,
	Paper,
	Box,
} from '@mui/material';
import { projectsData } from '../../data';

function Projects() {
	return (
		<Paper
			style={{
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Typography variant='h4' style={{ margin: '1rem 1rem 0 1rem' }}>
				Personal Projects
			</Typography>
			{projectsData.map((project, index) => (
				<Card key={index} style={{ margin: '1rem' }}>
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
					<CardActions>
						<Button size='small' href={project.link} target='_blank'>
							View Project
						</Button>
					</CardActions>
				</Card>
			))}
		</Paper>
	);
}

export default Projects;
