import * as S from './Test.style'
import { ReactChild, FC } from 'react'
import { Box } from '@mui/material'

const { log } = console

interface TestProps {
   
   children?: ReactChild,
   
}

const _Test = styled(Box)(`

    //Write your styles here

`)

const Test: FC<TestProps> = ({ children }) => {

    return(
       <div className="Test">
          
       </div>
    )
}
export default Test