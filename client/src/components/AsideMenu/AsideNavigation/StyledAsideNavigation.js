import styled from 'styled-components';
import colors from '../../../assets/colors';

export const Wrapper = styled.aside`
   width: 240px;
   min-height: 100vh;
   border-right: 1px solid #e8e8e8;
   background-color: white;
   font-family: segoe;
   color: ${colors.black85};
   display: block;
   z-index: 10;

   @media (min-height: 1200px) {
      height: 100vh;
   }
`

export const Title = styled.header`
   width: 100%;
   height: 45px;
   padding-top: 15px;
   font-weight: 600;

   display: flex;
   justify-content: center;
`

export const Navigation = styled.ul`
   width: 100%;
   height: auto;
   margin-bottom: 100%;

   display: flex;
   flex-direction: column;
`