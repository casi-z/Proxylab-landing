import * as S from './Menu.style'
import { ReactChild, FC } from 'react'
import { Box, Button } from '@mui/material'

const { log } = console

interface MenuProps {

	children?: ReactChild,

}
const menuItems = [
	{ name: 'Features', href: '#' },
	{ name: 'Pricing & Plans', href: '#' },
	{ name: 'Support', href: '#' },
	{ name: 'About Us', href: '#' },
]
const Menu: FC<MenuProps> = ({ children }) => {

	return (
		<S.Menu className="Menu">
			<nav>
				{menuItems.map((item, index) => 
					
					<S.Menu__Button
						variant="text"
						key={index}
						href={item.href || '#'}>
						{item.name}
					</S.Menu__Button>

				)}
			</nav>
		</S.Menu>
	)
}
export default Menu