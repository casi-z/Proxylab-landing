import { ReactChild, FC } from 'react'
import { Button, styled } from '@mui/material'

const { log } = console

interface RoundedButtonProps {
   
	children?: ReactChild,
	props?: any,
   
}

const S_RoundedButton = styled(Button)(({ theme }) =>`
	background: ${theme.palette.primary.main};
	border-radius: 50px;
	color: white;
	text-transform: capitalize;
	min-width: 0;
	font-family: 'Mulish';
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 28px;
	padding-top: 1.5vh;
	padding-bottom: 1.5vh;
`)

const RoundedButton: FC<RoundedButtonProps> = ({props, children}) => {

    return(
		<S_RoundedButton size="large" {...props}>
			{children}
	   </S_RoundedButton>
    )
}
export default RoundedButton