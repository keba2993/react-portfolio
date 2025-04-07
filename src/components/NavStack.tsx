import { Button, Stack } from '@mui/material';

function NavStack({ pages }: { pages: { name: string; icon: JSX.Element }[] }) {
	return (
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
	);
}

export default NavStack;
