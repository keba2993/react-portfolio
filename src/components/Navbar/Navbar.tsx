import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { Home, Code, Description } from '@mui/icons-material';

import useWindowDimensions from '../../hooks/useWindowDimensions';
import NavDrawer from './NavDrawer';
import NavStack from './NavStack';
import { Link } from 'react-router-dom';

function Navbar() {
	const { width } = useWindowDimensions();

	const pages = [
		{ name: 'Projects', icon: <Code /> },
		{ name: 'About', icon: <Description /> },
	];

	return (
		<AppBar position='sticky'>
			<Toolbar>
				<Link to='/'>
					<IconButton
						size='large'
						edge='start'
						color='primary'
						aria-label='nav-home'
					>
						<Home sx={{ fontSize: '1.05em' }} />
					</IconButton>
				</Link>
				<Typography component='div' sx={{ flexGrow: 1 }}>
					Kevin Barone
				</Typography>
				{width >= 600 ? (
					<NavStack pages={pages} />
				) : (
					<NavDrawer pages={pages} />
				)}
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
