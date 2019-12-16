import styled, {css} from 'styled-components';
import colors from '../../../assets/colors';

export const Wrapper = styled.button`
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