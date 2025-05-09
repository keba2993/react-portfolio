import { Typography, Box } from '@mui/material';

function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<Box>
			<Typography
				color='text.secondary'
				align='center'
				paddingY='2rem'
				fontSize={'0.8rem'}
			>
				{currentYear} &copy; Kevin Barone. All rights reserved.
			</Typography>
		</Box>
	);
}

export default Footer;
