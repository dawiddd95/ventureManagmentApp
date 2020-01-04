import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

import colors from '../../../assets/colors';

export const Tr = styled.tr`
   background-color: white;
   ${props => props.marked && css`
      background-color: #FAFAFA; 
   `}
   ${props => props.active && css`
      background-color: #FFF1F0; 
   `}
`

export const Td = styled.td`
   width: 100px;
   height: 55px;
   font-size: 14px;
   border-bottom: 1px solid #e8e8e8;
   text-align: center;

   label {
      width: 0;
      height: 0;
      margin: 0 40px 0 0;
      padding: 0;
   }
`

export const StyledLink = styled(Link)`
   margin: 0 10px;
   text-decoration: none;
   color: ${colors.redColor};
`

export const DeleteButton = styled.button`
   margin: 0 10px; 
   background-color: transparent;
   border: 0;
   font-size: 14px;
   color: ${colors.redColor};
   cursor: pointer;
`