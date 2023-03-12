import * as S from './Mainscreen__Image.style'
import { ReactChild, FC } from 'react'
import { Avatar, AvatarGroup, Box, SvgIcon } from '@mui/material'
import HappyGirls from '../../img/HappyGirls.png'
import { ReactComponent as GoogleIcon } from '../../img/svg/GoogleIcon.svg'
import { ReactComponent as LinkedInIcon } from '../../img/svg/LinkedInIcon.svg'
import { ReactComponent as Medal } from '../../img/svg/Medal.svg'


const { log } = console

interface Mainscreen__ImageProps {

	children?: ReactChild,

}

const svgIcons = [
	GoogleIcon,
	LinkedInIcon,
	LinkedInIcon,

]

const Mainscreen__Image: FC<Mainscreen__ImageProps> = ({ children }) => {

	return (
		
		<S.Mainscreen__Image className="Mainscreen__Image">
			
			{svgIcons.map((icon, index) =>
				<SvgIcon id={`Mainscreen__Icon-${index}`} className='Mainscreen__Icon' component={icon} inheritViewBox />

			)}

			<img src={HappyGirls} alt="HappyGirls" />

			<S.Sign>

				<SvgIcon inheritViewBox className='Sign__icon' component={Medal} />

				<S.Sign__Text>

					<S.Sign__Title>150K</S.Sign__Title>
					Projects done

				</S.Sign__Text>

			</S.Sign>

			<S.Sign className='_second'>

				<SvgIcon inheritViewBox className='Sign__icon' component={Medal} />

				<S.Sign__Text className="_second">

					Client’s get
					<div>Always Expectational</div>

				</S.Sign__Text>

			</S.Sign>

			<S.Sign className='_third'>

				<S.Sign__Text className="_third">

					<S.Sign__Title className="_third">Expert Team member</S.Sign__Title>

					<AvatarGroup max={5}>
						<S.Sign__Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
						<S.Sign__Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
						<S.Sign__Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
						<S.Sign__Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
						<S.Sign__Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
					</AvatarGroup>

				</S.Sign__Text>

			</S.Sign>

		</S.Mainscreen__Image>
	)
}
export default Mainscreen__Image