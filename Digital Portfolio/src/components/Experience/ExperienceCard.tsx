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
import { motion, AnimatePresence } from 'motion/react';
import { useStore } from '../../store';
import { experienceData } from '../../data';

function ExperienceCard() {
	const { isActive } = useStore();

	return (
		<AnimatePresence mode='popLayout'>
			{isActive != -1 && (
				<motion.div
					layout
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<Card>
						<CardContent>
							<Box display='flex' alignItems='center'>
								<CardMedia
									component='img'
									alt='Company Logo'
									height='80'
									image={experienceData[isActive].imagePath}
									title='Company Logo'
									style={{ marginRight: '16px', width: '80px' }}
								/>
								<Grid2 container spacing={1}>
									<Grid2 size={12}>
										<Typography variant='h4'>
											{experienceData[isActive].jobTitle}
										</Typography>
									</Grid2>
									<Grid2 size={2}>
										<Typography variant='h5'>
											{experienceData[isActive].companyName}
										</Typography>
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
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default ExperienceCard;
