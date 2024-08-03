import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Stack,
	Button,
} from '@mui/material';
import { Home } from '@mui/icons-material';

function Navbar() {
	return (
		<AppBar position='static' sx={{ backgroundColor: '#242424' }}>
			<Toolbar>
				<IconButton
					size='large'
					edge='start'
					color='inherit'
					aria-label='nav-home'
				>
					<Home />
				</IconButton>
				<Typography component='div' sx={{ flexGrow: 1 }}>
					Kevin Barone's Portfolio
				</Typography>
				<Stack direction='row' spacing={1}>
					<Button color='inherit'>About</Button>
					<Button color='inherit'>Projects</Button>
					<Button color='inherit'>Resume</Button>
					<Button color='inherit'>Contact Me</Button>
				</Stack>
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
