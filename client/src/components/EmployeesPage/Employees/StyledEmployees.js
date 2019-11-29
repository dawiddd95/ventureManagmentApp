import styled from 'styled-components';
import colors from '../../../assets/colors';


export const Wrapper = styled.div`
   width: 100%;
   height: 100%;
   overflow-x: hidden;
   font-family: segoe;

   display: flex;
`

export const MainContent = styled.main`
   width: 100%;
   height: 100%;
   overflow-x: hidden;
   margin: 0 23px;

   display: flex;
   flex-direction: column;
`

export const Box = styled.div`
   width: 100%;
   height: 100%;
   margin: 20px auto;
   background-color: white;
   border: 1px solid #E9E9E9;
   border-radius: 5px;
`

export const Header = styled.header`
   margin: 30px 0 37px 23px;
   font-size: 28px;
   font-family: Nunito;
   color: ${colors.black65};
`