import ExperienceCard from './ExperienceCard';
import ExperienceTimeline from './ExperienceTimeline';

function Experience() {
	return (
		<div className='exp-section'>
			<ExperienceTimeline />
			<ExperienceCard />
		</div>
	);
}

export default Experience;
