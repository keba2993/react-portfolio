import ExperienceCard from './ExperienceCard';
import { experienceData } from '../../data';
import { motion } from 'motion/react';

function ExperienceList() {
	return (
		<>
			{experienceData.map((_, index) => {
				return (
					<motion.div
						whileInView={{ opacity: 1, transition: { duration: 1 } }}
						initial={{ opacity: 0 }}
						style={{
							display: 'flex',
							justifyContent: 'center',
							margin: '1rem',
							borderBottom: '1px solid #ccc',
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
