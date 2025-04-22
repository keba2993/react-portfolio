import ExperienceCard from './ExperienceCard';
import ExperienceTimeline from './ExperienceTimeline';
import ExperienceList from './ExperienceList';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { motion, AnimatePresence } from 'motion/react';
import { useStore } from '../../store';
import { Box } from '@mui/material';

function Experience() {
	const { width } = useWindowDimensions();
	const { isActive } = useStore();

	return (
		<>
			{width > 600 ? (
				<Box
					display='flex'
					alignItems='center'
					justifyContent='center'
					sx={{ height: '38rem' }}
				>
					<ExperienceTimeline />
					<AnimatePresence mode='popLayout'>
						{isActive != -1 && (
							<motion.div
								layout
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							>
								<ExperienceCard expNum={isActive} />
							</motion.div>
						)}
					</AnimatePresence>
				</Box>
			) : (
				<ExperienceList />
			)}
		</>
	);
}

export default Experience;
