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
   width: ${props => props.visible ? '18px' : '25px'};
   height: ${props => props.visible ? '18px' : '25px'};
   margin-left: ${props => props.visible ? '180px' : '20px'};
   padding: 10px 30px 10px 20px;
   cursor: pointer;
`

export const Title = styled.h1`
   font-size: 20px;
   font-family: segoe;
`

export const Avatar = styled.div`
   width: 200px;
   height: 100%;
   margin-left: auto;
   border: 1px solid red;
`