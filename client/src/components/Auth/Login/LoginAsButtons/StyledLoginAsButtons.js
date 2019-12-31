import styled from 'styled-components';
import colors from '../../../../assets/colors';

export const LoginAsWrapper = styled.div`
   margin: 40px 0 0 40px;
   font-size: 14px;
   font-family: segoe;
   color: rgba(0,0,0,0.65);

   display: flex;
`

export const LoginAsButton = styled.p`
   margin-left: 10px;
   color: ${({selected_style}) => selected_style ? colors.redColor : 'rgba(0,0,0,0.65)'};
   cursor: pointer;
`