import ExperienceCard from './ExperienceCard';
import { experienceData } from '../../data';
import { motion } from 'motion/react';

function ExperienceList() {
	return (
		<>
			{experienceData.map((_, index) => {
				return (
					<motion.div
						whileHover={{ scale: 1.1 }}
						whileInView={{ opacity: 1, transition: { duration: 1 } }}
						initial={{ opacity: 0 }}
						style={{
							display: 'flex',
							justifyContent: 'center',
							marginBottom: '1rem',
							marginTop: '1rem',
						}}
					>
						<ExperienceCard key={index} expNum={index} />
					</motion.div>
				);
			})}
		</>
	);
}

export default ExperienceList;
