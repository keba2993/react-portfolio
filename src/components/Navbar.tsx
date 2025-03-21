import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Stack,
	Button,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	ListItemIcon,
} from '@mui/material';
import { Home, Menu, Code, Description, Email } from '@mui/icons-material';
import { useState } from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';

function Navbar() {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const { width } = useWindowDimensions();

	const toggleDrawer = () => {
		setDrawerOpen((prevOpen: boolean) => !prevOpen);
	};

	const getIcon = (index: number) => {
		switch (index) {
			case 0:
				return <Code />;
			case 1:
				return <Description />;
			case 2:
				return <Email />;
			default:
				return <Home />;
		}
	};

	return (
		<AppBar position='static'>
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
					Kevin Barone
				</Typography>
				{width > 600 ? (
					<Stack direction='row' spacing={1}>
						<Button color='inherit'>Projects</Button>
						<Button color='inherit'>Resume</Button>
						<Button color='inherit'>Contact Me</Button>
					</Stack>
				) : (
					<div>
						<Button onClick={toggleDrawer} color='inherit'>
							<Menu />
						</Button>
						<Drawer open={drawerOpen} onClose={toggleDrawer}>
							<List>
								{['Projects', 'Resume', 'Contact Me'].map((text, index) => (
									<ListItem key={text} disablePadding>
										<ListItemButton>
											<ListItemIcon>{getIcon(index)}</ListItemIcon>
											<ListItemText primary={text} />
										</ListItemButton>
									</ListItem>
								))}
							</List>
						</Drawer>
					</div>
				)}
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
