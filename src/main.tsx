import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#a7cf75',
			dark: '#5e9827',
			light: '#d9eac3',
		},
		secondary: {
			main: '#a4c1df',
			dark: '#5988ce',
			light: '#c5d8ec',
		},
		text: {
			primary: '#efefef',
			secondary: '#e2e2e2',
		},
	},
	typography: {
		fontFamily: 'Helvetica, Arial, sans-serif',
	},
	components: {
		MuiCardContent: {
			styleOverrides: {
				root: {
					padding: '0',
					'&:last-child': {
						paddingBottom: '16px',
					},
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					boxShadow: 'none',
				},
			},
		},
		MuiCardActionArea: {
			styleOverrides: {
				focusHighlight: {
					backgroundColor: 'transparent',
				},
			},
		},
	},
});

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Routes>
					<Route path='/*' element={<App />} />
				</Routes>
			</Router>
		</ThemeProvider>
	</React.StrictMode>
);
