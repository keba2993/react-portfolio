import { Typography, useTheme } from '@mui/material';
import { CardContent, Card } from '@mui/material';
import { motion } from 'motion/react';

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
		'Git',
		'HTML',
		'CSS',
		'Redux',
		'Playwright',
		'MaterialUI',
	];
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				flexWrap: 'wrap',
				maxWidth: '100%',
			}}
		>
			{skillList.map((skill) => {
				return (
					<motion.div
						whileHover={{ scale: 1.1, rotate: -5 }}
						whileInView={{ opacity: 1, transition: { duration: 0.75 } }}
						initial={{ opacity: 0 }}
					>
						<Card
							key={skill}
							sx={{
								boxShadow: `0.25em 0.25em 0.25em ${theme.palette.primary.main}, -0.25em -0.25em 0.25em ${theme.palette.secondary.main}`,
								borderRadius: '5%',
								margin: '0.5rem',
								minWidth: '8rem',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<CardContent>
								<Typography variant='body1' sx={{ fontSize: '1.2rem' }}>
									{skill}
								</Typography>
							</CardContent>
						</Card>
					</motion.div>
				);
			})}
		</div>
	);
}

export default Skills;
