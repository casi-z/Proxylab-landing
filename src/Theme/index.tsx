import React, { FC } from 'react';
import { CssBaseline } from "@mui/material"
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles'
import { useMemo } from "react"
import GlobalStyle from "./GlobalStyle"

interface ThemeProviderProps {
	children: React.ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {

	const theme = useMemo(
		() => createTheme({
			palette: {
				
				primary: {
					main: '#FD695A'
				},
				secondary: {
					main: '#150A29',
					light: '#3D3D3F'
					
				}
			}
		}), []
	)
	return (
		<StyledEngineProvider injectFirst>
			<MUIThemeProvider theme={theme}>
				<CssBaseline />
				<GlobalStyle />
				{children}
			</MUIThemeProvider>
		</StyledEngineProvider>
	);
};

export default ThemeProvider;