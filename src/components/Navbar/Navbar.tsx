import { AppBar, Toolbar, Button, useScrollTrigger } from '@mui/material';
import { Code, Description } from '@mui/icons-material';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import NavDrawer from './NavDrawer';
import NavStack from './NavStack';
import { Link } from 'react-router-dom';

function Navbar() {
	const { width } = useWindowDimensions();

	const pages = [
		{ name: 'PROJECTS', icon: <Code /> },
		{ name: 'ABOUT', icon: <Description /> },
	];

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 5,
	});

	return (
		<AppBar
			position='sticky'
			elevation={trigger ? 2 : 0}
			sx={trigger ? {} : { boxShadow: 'none', backgroundColor: 'transparent' }}
		>
			<Toolbar>
				<Link to='/' style={{ textDecoration: 'none', flexGrow: 1 }}>
					<Button sx={{ color: '#efefef' }}>Kevin Barone</Button>
				</Link>

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
