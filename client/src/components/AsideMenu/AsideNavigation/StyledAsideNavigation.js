import styled from 'styled-components';
import colors from '../../../assets/colors';

// Jesli nie mamy wysokosci na całe miejsce jak byśmy chcieli, to użyjmy zamiast height: 100%; height:auto lub bez height

// zrobic if wysokosc jest jest mniejsza niz 1200 to zrobic height: auto jesli jest wieksza to height: 100vh;
export const Wrapper = styled.aside`
   width: 240px;
   border-right: 1px solid #e8e8e8;
   background-color: white;
   font-family: segoe;
   color: ${colors.black85};
   display: block;
   z-index: 10;
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