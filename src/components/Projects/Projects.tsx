import {
	Card,
	CardContent,
	Typography,
	CardActions,
	Button,
	Box,
} from '@mui/material';
import { projectsData } from '../../data';
import { styled } from '@mui/material/styles';

function Projects() {
	const ProjectContainer = styled('div')(({ theme }) => ({
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

	const ProjectTitle = styled('h4')(({ theme }) => ({
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
			<ProjectTitle>
				<Typography variant='h4'>Personal Projects</Typography>
			</ProjectTitle>

			<ProjectContainer>
				{projectsData.map((project, index) => (
					<Card key={index} sx={{ margin: '1rem', maxWidth: '35rem' }}>
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
			</ProjectContainer>
		</Box>
	);
}

export default Projects;
