import * as S from './Header.style'
import { ReactChild, FC } from 'react'
import { Avatar, Box, Button } from '@mui/material'
import Logo from '../../components/Logo/Logo'
import Menu from '../../components/Menu/Menu'
import RoundedButton from '../../components/RoundedButton/RoundedButton'

const { log } = console

interface HeaderProps {
	children?: ReactChild,

}

const Header: FC<HeaderProps> = ({ children }) => {

	return (

		<S.Header component='header' className="Header">
			<Logo>Proxylab</Logo>
			<Menu />
			<RoundedButton>Contact Us</RoundedButton>
		</S.Header>

	)
}
export default Header