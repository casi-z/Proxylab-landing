
import { ReactChild, FC } from 'react'
import { Box, SvgIcon } from '@mui/material'
import styled from '@emotion/styled'

const { log } = console

interface Mainscreen__IconProps {
	children?: ReactChild[] | ReactChild,
	id?: string,

}

const S_Mainscreen__Icon = styled(SvgIcon)(`

	position: absolute;
	top: 0;
	left: 0;
	z-index: 3000;
	width: 56px;
	height: 58px;

`)

const Mainscreen__Icon: FC<Mainscreen__IconProps> = ({ id, children }) => {

	return (
		<S_Mainscreen__Icon id={id} width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
			{children}
		</S_Mainscreen__Icon>
	)
}
export default Mainscreen__Icon