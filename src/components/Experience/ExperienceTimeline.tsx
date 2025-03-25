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
import { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
import { motion } from 'motion/react';
import { useStore } from '../../store';
import { experienceData } from '../../data';

function ExperienceTimeline() {
	const { setIsActive } = useStore();

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
					[`& .${timelineOppositeContentClasses.root}`]: {
						flex: 0.2,
					},
					maxWidth: '50rem',
				}}
			>
				{experienceData.map((item, index) => {
					return (
						<TimelineItem key={index}>
							<TimelineOppositeContent
								sx={{ m: 'auto 0', minWidth: '5rem' }}
								align='right'
								variant='body2'
								color='text.secondary'
							>
								{item.startDate} - {item.endDate}
							</TimelineOppositeContent>
							<TimelineSeparator>
								<TimelineConnector />
								<TimelineDot color='secondary'>
									<LogoStepIcon img={item.imagePath} num={index} />
								</TimelineDot>
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent>
								<Typography variant='h6' component='span'>
									{item.companyName}
								</Typography>
								<Typography>{item.jobTitle}</Typography>
							</TimelineContent>
						</TimelineItem>
					);
				})}
			</Timeline>
		</motion.div>
	);
}

export default ExperienceTimeline;
