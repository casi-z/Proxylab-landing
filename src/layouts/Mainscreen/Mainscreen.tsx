import * as S from './Mainscreen.style'
import { ReactChild, FC } from 'react'
import { Box, Button } from '@mui/material'
import RoundedButton from '../../components/RoundedButton/RoundedButton'
import { AccessAlarm, ThreeDRotation, PlayArrow } from '@mui/icons-material';
import Mainscreen__Image from '../Mainscreen__Image/Mainscreen__Image';


const { log } = console

interface MainscreenProps {

	children?: ReactChild,

}

const Mainscreen: FC<MainscreenProps> = ({ children }) => {

	return (
		<S.Mainscreen component='section' className="Mainscreen red">

			<S.Mainscreen__column className='_left'>
				<S.Mainscreen__slogan >
					Best
					<S.MainScreen__SelectedText className='_red'>
						Marketing
						{Array.from({ length: 4 })

							.map((elem, index) =>
								<S.Mainscreen__SelectedTextCircle
									component='span'
									id={`circle-${index}`} key={index}

								/>
						)
							
						}

					</S.MainScreen__SelectedText>
				</S.Mainscreen__slogan>

				<S.Mainscreen__slogan>Digital Agency</S.Mainscreen__slogan>

				<S.Mainscreen__description>
					Various versions have evolved over the years, sometimes by accident, sometimes on purpose
				</S.Mainscreen__description>

				<S.Mainscreen__buttonContainer>
					<RoundedButton>Get Started</RoundedButton>
					<S.Mainscreen__VideoButton variant="text" startIcon={<PlayArrow />}>
						Watch Video
					</S.Mainscreen__VideoButton>
				</S.Mainscreen__buttonContainer>


			</S.Mainscreen__column>



			<S.Mainscreen__column className='_right'>
				<Mainscreen__Image/>
			</S.Mainscreen__column>

		</S.Mainscreen>
	)
}
export default Mainscreen