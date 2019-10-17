import styled from 'styled-components';

export const Wrapper = styled.div`
   width: 100%;
   height: 100%;

   display: flex;
   justify-content: center;
`

export const Box = styled.div`
   width: 360px; 
   height: 200px; 
   margin: 10px auto 0 auto; 
   box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12); 

   display: flex; 
   flex-direction: column;
`

export const Header = styled.h1`
   font-weight: normal;
   margin: 40px 0 0 20px;
   font-size: 22px; 
   font-family: 'Calibri';
`

export const Text = styled.p`
   margin-top: 20px;
   padding: 10px 20px;
   font-size: 18px;
   font-family: 'Calibri';
   color: rgba(0,0,0,0.8);
`