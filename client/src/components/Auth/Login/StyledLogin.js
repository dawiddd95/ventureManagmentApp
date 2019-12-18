import styled from 'styled-components';

import background from '../../../assets/img/login.jpg';
import colors from '../../../assets/colors';

export const Wrapper = styled.div`
   width: 100%;
   min-height: 100vh;
   height: 100%;
   background-image: url(${background});
   background-size: cover;
   background-position: center;

   display: flex;
   justify-content: flex-end;
`

export const Content = styled.div`
   width: 500px;
   min-height: 100vh;
   height: 100%;
   background-color: white;

   display: flex;
   flex-direction: column;
`

export const Header = styled.h1`
   margin-top: 50px;
   font-weight: 600;
   font-size: 24px;
   font-family: segoe;
   color: rgba(0,0,0,0.85);
   text-align: center;
`

export const LoginAs = styled.div`
   margin: 40px 0 0 40px;
   font-size: 14px;
   font-family: segoe;
   color: rgba(0,0,0,0.65);

   display: flex;
`

export const LoginAsItem = styled.p`
   margin-left: 10px;
   color: ${({selected_style}) => selected_style ? colors.redColor : 'rgba(0,0,0,0.65)'};
   cursor: pointer;
`