import { styled } from '@mui/material/styles';

export function StyledContainer({ children }: { children: React.ReactNode }) {
	const StyledDiv = styled('div')(({ theme }) => ({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		maxWidth: '1280px',
		margin: '1rem',
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
			flexWrap: 'wrap',
			gap: '2rem',
		},
	}));

	return <StyledDiv>{children}</StyledDiv>;
}

export function StyledTitle({ children }: { children: React.ReactNode }) {
	const StyledHeader = styled('h4')(({ theme }) => ({
		margin: '1.5rem auto 0 2rem',
		textAlign: 'left',
		[theme.breakpoints.up('sm')]: {
			textAlign: 'center',
			margin: '1.5rem auto',
		},
	}));

	return <StyledHeader>{children}</StyledHeader>;
}
