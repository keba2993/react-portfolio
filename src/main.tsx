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
		},
		secondary: {
			main: '#6ea4e1',
		},
		text: {
			primary: '#efefef',
			secondary: '#e2e2e2',
		},
		tonalOffset: 0.5,
		background: {
			default: '#1a1a1a',
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
					backgroundColor: 'transparent',
				},
			},
			defaultProps: {
				elevation: 0,
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
