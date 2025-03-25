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
			main: '#395e7d',
			dark: '#13338d',
			light: '#a4c1df',
		},
		text: {
			primary: '#efefef',
			secondary: '#e2e2e2',
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
