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
import { useStore } from '../store';
import useWindowDimensions from '../hooks/useWindowDimensions';

function Navbar() {
	const { drawerOpen, setDrawerOpen } = useStore();
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
				{width > 600 ? (
					<Stack direction='row' spacing={1}>
						{pages.map((page, index) => (
							<Button
								key={index}
								color='inherit'
								onClick={() =>
									(window.location.href = `/${page.name
										.toLowerCase()
										.replace(/\s+/g, '-')}`)
								}
							>
								{page.name}
							</Button>
						))}
					</Stack>
				) : (
					<div>
						<Button onClick={setDrawerOpen} color='inherit'>
							<Menu />
						</Button>
						<Drawer open={drawerOpen} onClose={setDrawerOpen}>
							<List>
								{pages.map((page, index) => (
									<ListItem key={index} disablePadding>
										<ListItemButton
											onClick={() =>
												(window.location.href = `/${page.name
													.toLowerCase()
													.replace(/\s+/g, '-')}`)
											}
										>
											<ListItemIcon>{page.icon}</ListItemIcon>
											<ListItemText primary={page.name} />
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
