import ExperienceCard from './ExperienceCard';
import { experienceData } from '../../data';
import { motion } from 'motion/react';

function ExperienceList() {
	return (
		<>
			{experienceData.map((_, index) => {
				return (
					<motion.div
						whileHover={{ scale: 1.1, rotate: -5 }}
						whileInView={{ opacity: 1, transition: { duration: 1 } }}
						initial={{ opacity: 0 }}
					>
						<ExperienceCard key={index} expNum={index} />
					</motion.div>
				);
			})}
		</>
	);
}

export default ExperienceList;
