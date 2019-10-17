import styled from 'styled-components';
import colors from '../../../assets/colors';

// Jesli nie mamy wysokosci na całe miejsce jak byśmy chcieli to użyjmy zamiast height: 100%; height:auto lub bez height
export const Wrapper = styled.aside`
   width: 200px;
   border-right: 1px solid #e8e8e8;
   background-color: white;
   font-family: segoe;
   color: ${colors.black85};
   display: block;
   z-index: 10;
`

export const Navigation = styled.ul`
   width: 100%;
   height: auto;
   margin-top: 10px;
   margin-bottom: 100%;

   display: flex;
   flex-direction: column;
`