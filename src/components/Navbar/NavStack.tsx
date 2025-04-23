import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

function NavStack({ pages }: { pages: { name: string; icon: JSX.Element }[] }) {
	return (
		<Stack direction='row' spacing={1}>
			{pages.map((page, index) => (
				<Link
					key={index}
					to={`/${page.name.toLowerCase()}`}
					style={{ textDecoration: 'none' }}
				>
					<Button color='primary'>{page.name}</Button>
				</Link>
			))}
		</Stack>
	);
}

export default NavStack;
