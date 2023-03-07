import { Box, Button, styled } from '@mui/material'
import HappyGirls from '../../img/HappyGirls.png'
export const Mainscreen = styled(Box)(`
	width: 100%;
	height: 100vh;
	display: flex;

`)
export const Mainscreen__column = styled(Box)(({ theme }) => `
	width: 65%;
	height: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	overflow: visible;
	&._left{
		width: 35%;
		
	}
	&._right{
		background: url(${HappyGirls}) center no-repeat, linear-gradient(65.25deg, rgba(255, 255, 255, 0.49) -1.59%, rgba(255, 255, 255, 0.46) 99.42%);
	}
	button{
		max-width: 200px;
	}
	

`)

export const Mainscreen__slogan = styled(Box)(({ theme }) => `
	font-family: 'Mulish';
	font-style: normal;
	font-weight: 800;
	font-size: 70px;
	line-height: 94px;
	margin: 0;
	

`)
export const MainScreen__SelectedText = styled(Box)(({theme}) => `
	
	margin-left: 0.5vw;
	padding: 0 0.5vw;
	color: ${theme.palette.primary.main};
	border: 3.5px solid #41BA77;
	position: relative;
	display: inline-flex;
	
	
	
	.circle{
		width: 10px;
		height: 10px;
		position: absolute;
		border-radius: 50%;
		background: #41BA77;
		
		
	}
	#circle-0{
		top: -8px;
		left: -8px;
	}
	#circle-1{
		top: -8px;
		right: -8px;
	}
	
	#circle-2{
		bottom: -8px;
		right: -8px;
	}
	#circle-3{
		bottom: -8px;
		left: -8px;
	}
	
`)
export const Mainscreen__description = styled(Box)(({ theme }) => `
	color: ${theme.palette.secondary.light};
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 400;
	font-size: 21px;
	line-height: 34px;
	margin: 4vh 0;
`)
export const Mainscreen__buttonContainer = styled(Box)(({ theme }) => `
	display: flex;
`)
export const Mainscreen__VideoButton = styled(Button)(({ theme }) => `
	color: ${theme.palette.primary.main};
	margin-left: 2vw;
	display: flex;
	justify-content: center;
	align-items:center;
	font-family: 'Mulish';
	font-style: normal;
	font-size: 18px;
	line-height: 23px;
`)