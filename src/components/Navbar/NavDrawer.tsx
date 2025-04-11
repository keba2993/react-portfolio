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
	);
}

export default NavDrawer;
