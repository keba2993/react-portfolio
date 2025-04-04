import {
	Card,
	CardContent,
	Typography,
	List,
	ListItem,
	ListItemText,
	CardMedia,
	Box,
} from '@mui/material';
import { experienceData } from '../../data';

function ExperienceCard({ expNum }: { expNum: number }) {
	// 	const CardImage = styled('img')(({ theme }) => ({
	// 		[theme.breakpoints.down('sm')]: {
	// 			width: '80px',
	// 		},
	// 		[theme.breakpoints.up('sm')]: {
	// 			width: '80px',
	// 			height: '80px',
	// 		},
	// 	}));

	return (
		<Card
			sx={{
				maxWidth: '50rem',
				margin: '0.5rem',
				height: '100%',
				boxShadow: '0 0.25em 0.5em 0.5em rgba(0, 0, 0, 0.2)',
			}}
		>
			<CardContent>
				<Box
					display={'flex'}
					alignItems={'center'}
					justifyContent={'space-between'}
				>
					<CardMedia
						component='img'
						alt={`${experienceData[expNum].companyName} logo`}
						image={experienceData[expNum].imagePath}
						title={`${experienceData[expNum].companyName} logo`}
						style={{
							height: '60px',
							width: '60px',
							margin: '1rem',
							borderRadius: '20%',
						}}
					/>
					<Box>
						<Typography variant='h5'>
							{experienceData[expNum].jobTitle}
						</Typography>
						<Typography variant='h6' color='primary.main'>
							{experienceData[expNum].companyName}
						</Typography>
						<Typography
							variant='body2'
							color='secondary.main'
							sx={{ opacity: 0.8 }}
						>
							{experienceData[expNum].startDate} -{' '}
							{experienceData[expNum].endDate}
						</Typography>
					</Box>
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
		</Card>
	);
}

export default ExperienceCard;
