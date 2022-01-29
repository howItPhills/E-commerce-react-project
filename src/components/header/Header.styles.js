import { Link } from 'react-router-dom'
import styled from 'styled-components'


export const HeaderContainer = styled.div`
   display: flex;
   width: 100%;
   margin-bottom: 20px;
   align-items: center;
   justify-content: space-between;
`
export const OptionsContainer = styled.div`
   display: flex;
   align-items: center;
`
export const OptionContainer = styled(Link)`
   margin-left: 30px;
   text-transform: uppercase;
   font-size: 20px;
   color: #4a4a4a;
   ${({ as }) => as === 'div' && 'cursor: pointer'}
`