import styled from 'styled-components';


export const Wrapper = styled.div`
   width: 100%;
   height: 60px;
   background-color: white;
   border-bottom: 1px solid #E9E9E9;
   position: absolute;

   display: flex;
   align-items: center;
`

export const MenuIcon = styled.img`
   width: ${({visible_style}) => visible_style ? '15px' : '20px'};
   height: ${({visible_style}) => visible_style ? '15px' : '20px'};
   margin-left: ${({visible_style}) => visible_style ? '230px' : '25px'}; 
   cursor: pointer;
`

export const Title = styled.h1`
   margin: 0 0 0 25px;
   font-weight: normal;
   font-size: 20px;
   font-family: Nunito;
`

