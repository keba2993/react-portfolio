import { useTheme } from '@mui/material';
import { CardContent, Card } from '@mui/material';

function Skills() {
	const theme = useTheme();

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
					<Card
						key={skill}
						className='card'
						sx={{
							boxShadow: `0.5em 0.5em 0.5em ${theme.palette.primary.main}, -0.5em -0.5em 0.4em ${theme.palette.secondary.main}`,
							borderRadius: '5%',
						}}
					>
						<CardContent>{skill}</CardContent>
					</Card>
				);
			})}
		</div>
	);
}

export default Skills;
