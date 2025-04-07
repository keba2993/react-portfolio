import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { Home, Code, Description, Email } from '@mui/icons-material';

import useWindowDimensions from '../hooks/useWindowDimensions';
import NavDrawer from './NavDrawer';
import NavStack from './NavStack';

function Navbar() {
	const { width } = useWindowDimensions();

	const pages = [
		{ name: 'Projects', icon: <Code /> },
		{ name: 'Resume', icon: <Description /> },
		{ name: 'Contact Me', icon: <Email /> },
	];

	return (
		<AppBar position='static'>
			<Toolbar>
				<IconButton
					size='large'
					edge='start'
					color='primary'
					aria-label='nav-home'
					onClick={() => {
						window.location.href = '/';
					}}
				>
					<Home />
				</IconButton>
				<Typography component='div' sx={{ flexGrow: 1 }}>
					Kevin Barone
				</Typography>
				{width > 600 ? <NavStack pages={pages} /> : <NavDrawer pages={pages} />}
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
