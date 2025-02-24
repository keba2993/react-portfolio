import { CardContent, Card } from '@mui/material';

function Skills() {
	let skillList = [
		'C++',
		'Java',
		'JavaScript',
		'Typescript',
		'Python',
		'React',
		'Node.js',
		'MySQL',
		'HTML',
		'CSS',
		'Redux',
		'Tailwind CSS',
		'MaterialUI',
	];
	return (
		<div
			style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
		>
			{skillList.map((skill) => {
				return (
					<Card key={skill} className='skill-card'>
						<CardContent>{skill}</CardContent>
					</Card>
				);
			})}
		</div>
	);
}

export default Skills;
