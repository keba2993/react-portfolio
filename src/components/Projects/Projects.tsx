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
import { styled } from '@mui/material/styles';

function Projects() {
	const ProjectContainer = styled('div')(({ theme }) => ({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		maxWidth: '1280px',
		margin: '1rem',
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
			flexWrap: 'wrap',
			gap: '2rem',
		},
	}));

	const ProjectTitle = styled('h4')(({ theme }) => ({
		margin: '1.5rem auto 0 2rem',
		textAlign: 'left',
		[theme.breakpoints.up('sm')]: {
			textAlign: 'center',
			margin: '1.5rem auto',
		},
	}));

	return (
		<Paper
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				height: '100vh',
			}}
		>
			<ProjectTitle>
				<Typography variant='h4'>Personal Projects</Typography>
			</ProjectTitle>

			<ProjectContainer>
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
						<CardActions sx={{ paddingLeft: '0' }}>
							<Button size='small' href={project.link} target='_blank'>
								View Project
							</Button>
						</CardActions>
					</Card>
				))}
			</ProjectContainer>
		</Paper>
	);
}

export default Projects;
