import { Box, Typography } from '@mui/material';
import {
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineOppositeContent,
	TimelineSeparator,
} from '@mui/lab';
import { motion } from 'motion/react';
import { useStore } from '../../store';
import { experienceData } from '../../data';
import { Cancel } from '@mui/icons-material';

function ExperienceTimeline() {
	const { isActive, setIsActive } = useStore();

	const LogoStepIcon = ({ img, num }: { img: string; num: number }) => {
		return (
			<Box
				component='img'
				alt={img}
				src={img}
				onClick={() => setIsActive(num)}
				sx={{
					width: '50px',
					height: '50px',
					borderRadius: '50%',
				}}
			/>
		);
	};

	return (
		<motion.div layout>
			<Timeline
				sx={{
					maxWidth: '50rem',
				}}
			>
				{isActive == -1 ? (
					experienceData.map((item, index) => {
						return (
							<TimelineItem key={index}>
								<TimelineOppositeContent
									sx={{ m: 'auto 0', minWidth: '5rem' }}
									align='right'
									variant='body1'
									color='text.secondary'
								>
									{item.startDate} - {item.endDate}
								</TimelineOppositeContent>
								<TimelineSeparator>
									<TimelineConnector sx={{ height: '1rem' }} />
									<TimelineDot color='secondary'>
										<LogoStepIcon img={item.imagePath} num={index} />
									</TimelineDot>
									<TimelineConnector sx={{ height: '1rem' }} />
								</TimelineSeparator>
								<TimelineContent>
									<Typography variant='h6' component='span'>
										{item.companyName}
									</Typography>
									<Typography>{item.jobTitle}</Typography>
								</TimelineContent>
							</TimelineItem>
						);
					})
				) : (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2.4 }}
					>
						<TimelineItem>
							<TimelineSeparator>
								<TimelineConnector sx={{ height: '1rem' }} />
								<TimelineDot color='secondary'>
									<Cancel
										onClick={() => setIsActive(-1)}
										style={{ cursor: 'pointer' }}
										fontSize='large'
										color='error'
									/>
								</TimelineDot>
								<TimelineConnector sx={{ height: '1rem' }} />
							</TimelineSeparator>
						</TimelineItem>
					</motion.div>
				)}
			</Timeline>
		</motion.div>
	);
}

export default ExperienceTimeline;
