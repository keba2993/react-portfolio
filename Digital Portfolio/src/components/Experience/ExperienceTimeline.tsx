import { Box, Typography } from '@mui/material';
import capturedSunLogo from '../../assets/captured-sun.svg';
import willowtreeLogo from '../../assets/WillowTree-logo.svg';
import nasdaqLogo from '../../assets/nasdaq.svg';
import { useState } from 'react';
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

function ExperienceTimeline() {
	const [active, setActive] = useState(0);
	const { setIsActive } = useStore();

	const handleStepClick = (icon?: React.ReactNode) => {
		setActive((prevActive) => (prevActive === Number(icon) ? 0 : Number(icon)));
	};

	const LogoStepIcon = ({ img }: { img: string }) => {
		return (
			<Box component='div' className='step-logo-container'>
				<Box
					component='img'
					className={`step-logo ${active ? 'step-logo-active' : ''}`}
					alt={img}
					src={img}
					onClick={() => handleStepClick()}
				/>
			</Box>
		);
	};

	return (
		<motion.div layout onTap={() => setIsActive()}>
			<Timeline
				sx={{
					[`& .${timelineOppositeContentClasses.root}`]: {
						flex: 0.2,
					},
					maxWidth: '50rem',
				}}
			>
				<TimelineItem>
					<TimelineOppositeContent
						sx={{ m: 'auto 0' }}
						align='right'
						variant='body2'
						color='text.secondary'
					>
						Jun 2022 - Aug 2022
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineConnector className='timeline-connector' />
						<TimelineDot>
							<LogoStepIcon img={willowtreeLogo} />
						</TimelineDot>
						<TimelineConnector className='timeline-connector' />
					</TimelineSeparator>
					<TimelineContent className='timeline-content'>
						<Typography variant='h6' component='span'>
							WillowTree Apps
						</Typography>
						<Typography>{`Software Engineer \(Dev & Test\) Intern`}</Typography>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent
						sx={{ m: 'auto 0' }}
						variant='body2'
						color='text.secondary'
					>
						Jun 2023 - Aug 2023
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineConnector className='timeline-connector' />
						<TimelineDot color='primary'>
							<LogoStepIcon img={nasdaqLogo} />
						</TimelineDot>
						<TimelineConnector className='timeline-connector' />
					</TimelineSeparator>
					<TimelineContent className='timeline-content'>
						<Typography variant='h6' component='span'>
							Nasdaq Inc.
						</Typography>
						<Typography>Software Engineer Intern</Typography>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent
						sx={{ m: 'auto 0' }}
						align='right'
						variant='body2'
						color='text.secondary'
					>
						Sep 2023 - May 2024
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineConnector className='timeline-connector' />
						<TimelineDot color='primary' variant='outlined'>
							<LogoStepIcon img={capturedSunLogo} />
						</TimelineDot>
						<TimelineConnector
							sx={{ bgcolor: 'secondary.main' }}
							className='timeline-connector'
						/>
					</TimelineSeparator>
					<TimelineContent className='timeline-content'>
						<Typography variant='h6' component='span'>
							Captured Sun
						</Typography>
						<Typography>Capstone Project Manager</Typography>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent
						sx={{ m: 'auto 0' }}
						align='right'
						variant='body2'
						color='text.secondary'
					>
						Nov 2024 - Present
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineConnector
							sx={{ bgcolor: 'secondary.main' }}
							className='timeline-connector'
						/>
						<TimelineDot color='secondary'>
							<LogoStepIcon img={capturedSunLogo} />
						</TimelineDot>
						<TimelineConnector className='timeline-connector' />
					</TimelineSeparator>
					<TimelineContent className='timeline-content'>
						<Typography variant='h6' component='span'>
							CoBank
						</Typography>
						<Typography>Associate Software Engineer, Full Stack</Typography>
					</TimelineContent>
				</TimelineItem>
			</Timeline>
		</motion.div>
	);
}

export default ExperienceTimeline;
