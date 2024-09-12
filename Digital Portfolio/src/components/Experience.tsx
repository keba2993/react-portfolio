import {
	Timeline,
	TimelineConnector,
	TimelineItem,
	TimelineDot,
	TimelineOppositeContent,
	TimelineSeparator,
	TimelineContent,
} from '@mui/lab';
import { Box, Typography } from '@mui/material';
// import nasdaqLogo from '../assets/nasdaq.svg';
import capturedSunLogo from '../assets/captured-sun.svg';
import { useState } from 'react';

function Experience() {
	const [hover, setHover] = useState([0, 0, 0, 0]);

	const updateHover = (toChange: number) => {
		setHover((prevHover) => {
			const newHover: number[] = prevHover.map((i, index) => {
				if (index === toChange) {
					i = i ? 0 : 1;
				}
				return i;
			});
			return newHover;
		});
	};

	return (
		<Timeline position='alternate'>
			<TimelineItem>
				<TimelineOppositeContent
					sx={{ m: 'auto 0' }}
					align='right'
					variant='body2'
					color='text.secondary'
				>
					Sept 2023
				</TimelineOppositeContent>
				<TimelineSeparator sx={{ mx: '0.25rem' }}>
					<TimelineConnector />
					<TimelineDot>
						<img src={capturedSunLogo} className='experience-dot-img' />
					</TimelineDot>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent
					className='experience-card-wrapper'
					onMouseEnter={() => updateHover(0)}
					onMouseLeave={() => updateHover(0)}
				>
					<Box className='experience-card-main' component='div'>
						<Typography variant='h6' component='span'>
							Capstone Project Manager
						</Typography>
						<Typography>Captured Sun</Typography>
					</Box>
					{hover[0] ? (
						<Box className='experience-card-extra' component='div'>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
								pulvinar bibendum risus, feugiat blandit augue egestas a.
								Curabitur sollicitudin ligula eu enim mollis, sit amet commodo
								eros sollicitudin. Nam at egestas sem, a lobortis est.
								Pellentesque convallis massa lectus, a pellentesque arcu feugiat
								sed. Suspendisse eu blandit orci. Lorem ipsum dolor sit amet,
								consectetur adipiscing elit.
							</Typography>
							<Typography>Sept 2023 - Apr 2024</Typography>
						</Box>
					) : (
						<></>
					)}
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineOppositeContent
					sx={{ m: 'auto 0' }}
					variant='body2'
					color='text.secondary'
				>
					10:00 am
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineConnector />
					<TimelineDot color='primary'>{/* <LaptopMacIcon /> */}</TimelineDot>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent sx={{ py: '12px', px: 2 }}>
					<Typography variant='h6' component='span'>
						Code
					</Typography>
					<Typography>Because it&apos;s awesome!</Typography>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineConnector />
					<TimelineDot color='primary' variant='outlined'>
						{/* <HotelIcon /> */}
					</TimelineDot>
					<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
				</TimelineSeparator>
				<TimelineContent sx={{ py: '12px', px: 2 }}>
					<Typography variant='h6' component='span'>
						Sleep
					</Typography>
					<Typography>Because you need rest</Typography>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
					<TimelineDot color='secondary'>{/* <RepeatIcon /> */}</TimelineDot>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent sx={{ py: '12px', px: 2 }}>
					<Typography variant='h6' component='span'>
						Repeat
					</Typography>
					<Typography>Because this is the life you love!</Typography>
				</TimelineContent>
			</TimelineItem>
		</Timeline>
	);
}

export default Experience;
