import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

import colors from '../../../assets/colors';

export const Tr = styled.tr`
   background-color: white;
   ${({marked_style}) => marked_style && css`
      background-color: #FAFAFA; 
   `}
   ${({active_style}) => active_style && css`
      background-color: #FFF1F0; 
   `}
`

export const Td = styled.td`
   width: auto;
   height: 55px;
   padding: 0 20px;
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

export const ActiveWrapper = styled.div`
   width: 100%;

   display: flex;
   justify-content: center;
`

export const Active = styled.button`
   width: 20px
   height: 20px;
   border: 0;
   border-radius: 50%;
   background-color: ${({active_style}) => active_style ? '#A0D911' : colors.hoverRedColor};
   color: white;
   font-size: 12px;
   font-family: Arial;
   outline: 0;

   display: flex;
   justify-content: center;
   align-items: center;
`

export const Dot = styled.div`
   width: 6px;
   height: 6px;
   background-color: white;
   border-radius: 50%;
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