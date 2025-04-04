import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#a7cf75',
			dark: '#557246',
			light: '#c1de9e',
		},
		secondary: {
			main: '#a4c1df',
			dark: '##5988ce',
			light: '#c5d8ec',
		},
		text: {
			primary: '#efefef',
			secondary: '#e2e2e2',
		},
	},
	components: {
		MuiCardContent: {
			styleOverrides: {
				root: {
					'&:last-child': {
						paddingBottom: '16px',
					},
				},
			},
		},
	},
});

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
