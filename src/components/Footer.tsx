import { Typography } from '@mui/material';
import { Paper } from '@mui/material';

function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<Paper square>
			<Typography
				color='text.secondary'
				align='center'
				paddingY='2rem'
				variant='caption'
			>
				{currentYear} &copy; Kevin Barone. All rights reserved.
			</Typography>
		</Paper>
	);
}

export default Footer;
