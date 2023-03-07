import { Box, Button, styled } from '@mui/material'

export const Menu = styled(Box)(`
	height: 100%;
	margin-left: 10%;
	width: 60%;
	nav{
		height: 100%;
		display: flex;
	}
	
`)
export const Menu__Button = styled(Button)(({ theme }) => `
	color: ${theme.palette.secondary.main};
	text-transform: capitalize;
	height: 100%;
	display: flex;
	jusify-content: center;
	align-items: center;
	font-family: 'Manrope';
	font-weight: 600;
	font-size: 16px;
	line-height: 28px;
	
`)
