import {
	Card,
	CardContent,
	CardActions,
	Typography,
	List,
	ListItem,
	ListItemText,
	CardMedia,
	Box,
	Grid2,
} from '@mui/material';
import nasdaqLogo from '../assets/nasdaq.svg';

function ExperienceCard() {
	return (
		<Card>
			<CardContent>
				<Box display='flex' alignItems='center'>
					<CardMedia
						component='img'
						alt='Company Logo'
						height='80'
						image={nasdaqLogo}
						title='Company Logo'
						style={{ marginRight: '16px', width: '80px' }}
					/>
					<Grid2 container spacing={1}>
						<Grid2 size={12}>
							<Typography variant='h4'>
								Associate Software Engineer, Full Stack
							</Typography>
						</Grid2>
						<Grid2 size={2}>
							<Typography variant='h5'>CoBank</Typography>
						</Grid2>
						<Grid2 size={4} display='flex' alignItems='center'>
							<Typography variant='body1'>Nov 2024 - Present</Typography>
						</Grid2>
					</Grid2>
				</Box>
				<List>
					<ListItem>
						<ListItemText primary='Developed and maintained web applications using React and Node.js.' />
					</ListItem>
					<ListItem>
						<ListItemText primary='Collaborated with cross-functional teams to define, design, and ship new features.' />
					</ListItem>
					<ListItem>
						<ListItemText primary='Implemented RESTful APIs and integrated third-party services.' />
					</ListItem>
				</List>
			</CardContent>
			<CardActions></CardActions>
		</Card>
	);
}

export default ExperienceCard;
