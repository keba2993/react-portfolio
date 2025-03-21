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
					<Card
						className='card'
						sx={{ maxWidth: '50rem', margin: 'auto', height: '100%' }}
					>
						<CardContent>
							<Box display='flex' alignItems='center'>
								<CardMedia
									component='img'
									alt='Company Logo'
									height='80'
									image={experienceData[isActive].imagePath}
									title='Company Logo'
									style={{
										marginRight: '20px',
										width: '80px',
										borderRadius: '20%',
									}}
								/>
								<Grid2 container spacing={1}>
									<Grid2 size={12}>
										<Typography variant='h4'>
											{experienceData[isActive].jobTitle}
										</Typography>
									</Grid2>
									<Grid2 size={6}>
										<Typography variant='h5'>
											{experienceData[isActive].companyName}
										</Typography>
									</Grid2>
									<Grid2
										size={6}
										display='flex'
										alignItems='center'
										justifyContent={'flex-end'}
									>
										<Typography variant='body1'>
											{experienceData[isActive].startDate} -{' '}
											{experienceData[isActive].endDate}
										</Typography>
									</Grid2>
								</Grid2>
							</Box>
							<List>
								{experienceData[isActive].responsibilities.map(
									(item, index) => {
										return (
											<ListItem key={index}>
												<ListItemText primary={item} />
											</ListItem>
										);
									}
								)}
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
