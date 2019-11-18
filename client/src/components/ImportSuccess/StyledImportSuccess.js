import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Wrapper = styled.div`
   margin-top: 30px;
   padding: 15px 20px;
   background-color: #D4EDDA;
   border: 2px solid #C3E6CB;
   border-radius: 4px;

   display: flex;
`

export const Success = styled.div`
   margin: 5px 0;
   font-size: 14px;
   font-family: segoe; 
   color: #155724;

   display: flex;
   align-items: center;
`

export const Img = styled.img`
   width: 17px;
   height: 17px;
   margin-right: 10px;
`

export const StyledLink = styled(Link)`
   margin-left: 7px;
   font-weight: 600;
   color: #155724;
`