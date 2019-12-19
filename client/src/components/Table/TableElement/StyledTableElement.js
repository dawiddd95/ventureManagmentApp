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

export const StatusWrapper = styled.div`
   width: 100%;
   margin-left: auto;

   display: flex;
   justify-content: center;
`

export const Status = styled.button`
   height: 22px;
   padding: 0 7px;
   border-radius: 4px;
   color: white;
   font-size: 12px;
   font-family: Arial;
   outline: 0;
   border: 0;

   ${({status_style}) => status_style === 'Cancelled' && css`
      background-color: #FF6D25;
   `}
   ${({status_style}) => status_style === 'Booked' && css`
      background-color: #349DEA;
   `}
   ${({status_style}) => status_style === 'In Progress' && css`
      background-color: #99D57D;
   `}
   ${({status_style}) => status_style === 'Completed' && css`
      background-color: ${colors.disable};
      border: 1px solid ${colors.silverColor};
      color: black;
   `}
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