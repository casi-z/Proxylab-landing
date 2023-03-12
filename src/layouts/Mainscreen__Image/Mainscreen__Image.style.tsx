import { Avatar, Box, styled, SvgIcon } from '@mui/material'

export const Mainscreen__Image = styled(Box)(({ theme }) => `
	position: relative;
	.Mainscreen__Icon{
		width: 56px;
		height: 56px;
		position: absolute;
	}
	#Mainscreen__Icon-0{
		top: 5%;
		left: 38%;
	}
	#Mainscreen__Icon-1{
		top: 30%;
		left: 20%;
	}
	#Mainscreen__Icon-2{
		top: 27%;
		left: 83%;
	}
	
`)

export const Sign = styled(Box)(({ theme }) => `
	background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.53) 100%);
	box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.05);
	border-radius: 4px;
	position: absolute;
	top: 7%;
	right: 0;
	padding-top: 0.3%;
	padding-bottom: 0.3%;
	padding-left: 0.7%;
	padding-right: 1.3%;
	display: flex;
	align-items: center;

	&._second{
		top: 67%;
		right: -10%;
		padding-top: 1%;
		padding-bottom: 1.8%;
		padding-left: 0.7%;
		padding-right: 1.3%;
	}

	&._third{
		top: 53%;
		right: 80%;
		padding-top: 1%;
		padding-bottom: 1.8%;
		padding-left: 2.3%;
		padding-right: 2.3%;
	}
	
	.Sign__icon{
		padding: 0;
		margin-right: 1vw;
		width: 38px;
		height: 38px;

	}
	
`)
export const Sign__Title = styled(Box)(({ theme }) => `
	color: ${theme.palette.secondary.main};
	font-style: normal;
	font-weight: 800;
	font-size: 18px;
	&._third{
		font-family: 'Mulish';
		font-style: normal;
		font-weight: 600;
		font-size: 14px;
		line-height: 18px;
		white-space: nowrap
	}
`)

export const Sign__Text = styled(Box)(({ theme }) => `
	
	color: ${theme.palette.secondary.light}60;
	min-width: 0;
	width: 100%;
	font-family: 'Mulish';
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
		
	&._second{
		color: ${theme.palette.secondary.light};
		font-weight: 600;
		font-size: 12px;
		line-height: 15px;
		align-items: flex-start;
		opacity: 0.9;

	}
`)
export const Sign__Avatar = styled(Avatar)(({ theme }) => `
	width: 2.4vw;
	height: 2.4vw;
	
`)

