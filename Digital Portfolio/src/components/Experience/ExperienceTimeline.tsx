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
			<Box component='div' className='step-logo-container'>
				<Box
					component='img'
					className={`step-logo`}
					alt={img}
					src={img}
					onClick={() => setIsActive(num)}
				/>
			</Box>
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
								sx={{ m: 'auto 0' }}
								align='right'
								variant='body2'
								color='text.secondary'
							>
								{item.startDate} - {item.endDate}
							</TimelineOppositeContent>
							<TimelineSeparator>
								<TimelineConnector className='timeline-connector' />
								<TimelineDot color='secondary'>
									<LogoStepIcon img={item.imagePath} num={index} />
								</TimelineDot>
								<TimelineConnector className='timeline-connector' />
							</TimelineSeparator>
							<TimelineContent className='timeline-content'>
								<Typography variant='h6' component='span'>
									{item.companyName} {index}
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
