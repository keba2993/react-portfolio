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
import { experienceData } from '../../data';

function ExperienceCard({ expNum }: { expNum: number }) {
	return (
		<Card
			className='card'
			sx={{ maxWidth: '50rem', margin: '1rem', height: '100%' }}
		>
			<CardContent>
				<Box display='flex' alignItems='center'>
					<CardMedia
						component='img'
						alt='Company Logo'
						height='80'
						image={experienceData[expNum].imagePath}
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
								{experienceData[expNum].jobTitle}
							</Typography>
						</Grid2>
						<Grid2 size={6}>
							<Typography variant='h5'>
								{experienceData[expNum].companyName}
							</Typography>
						</Grid2>
						<Grid2
							size={6}
							display='flex'
							alignItems='center'
							justifyContent={'flex-end'}
						>
							<Typography variant='body1'>
								{experienceData[expNum].startDate} -{' '}
								{experienceData[expNum].endDate}
							</Typography>
						</Grid2>
					</Grid2>
				</Box>
				<List>
					{experienceData[expNum].responsibilities.map((item, index) => {
						return (
							<ListItem key={index}>
								<ListItemText primary={item} />
							</ListItem>
						);
					})}
				</List>
			</CardContent>
			<CardActions></CardActions>
		</Card>
	);
}

export default ExperienceCard;
