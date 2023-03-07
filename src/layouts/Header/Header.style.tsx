import { Box, Button, styled } from '@mui/material'

export const Header = styled(Box)(({ theme }) => `
	width: 100%;
	padding: 0 calc(8vw + 8px);
	padding-top: 2vh;
	background: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	top: 0;
	left: 0;
	
`)
