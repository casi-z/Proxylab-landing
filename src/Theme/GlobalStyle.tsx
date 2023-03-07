import { GlobalStyles as MUIGlobalStyles } from '@mui/material'


const GlobalStyle = () => {
	return (
		<MUIGlobalStyles styles={`

			html, body, #root{
				min-width: 100vw;
				min-height: 100vh;
				overflow-x: hidden;
				background: linear-gradient(65.25deg, rgba(255, 255, 255, 0.49) -1.59%, rgba(255, 255, 255, 0.46) 99.42%);
				border: 8px solid rgba(255, 255, 255, 0.7);
				border-radius: 24px;

			}
			#root{
				padding: 0 8vw;
				
			}

			
		`} />
	)
}

export default GlobalStyle