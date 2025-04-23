import {
	Drawer,
	List,
	Button,
	ListItem,
	ListItemButton,
	ListItemText,
	ListItemIcon,
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import { useStore } from '../../store';
import { Link } from 'react-router-dom';

function NavDrawer({
	pages,
}: {
	pages: { name: string; icon: JSX.Element }[];
}) {
	const { drawerOpen, setDrawerOpen } = useStore();
	return (
		<div>
			<Button onClick={setDrawerOpen} color='inherit'>
				<Menu />
			</Button>
			<Drawer open={drawerOpen} onClose={setDrawerOpen}>
				<List>
					{pages.map((page, index) => (
						<ListItem key={index} disablePadding>
							<Link
								to={`/${page.name.toLowerCase()}`}
								onClick={setDrawerOpen}
								style={{ textDecoration: 'none', color: '#efefef' }}
							>
								<ListItemButton sx={{ minWidth: '8rem' }}>
									<ListItemIcon sx={{ minWidth: '35px' }}>
										{page.icon}
									</ListItemIcon>
									<ListItemText primary={page.name} />
								</ListItemButton>
							</Link>
						</ListItem>
					))}
				</List>
			</Drawer>
		</div>
	);
}

export default NavDrawer;
