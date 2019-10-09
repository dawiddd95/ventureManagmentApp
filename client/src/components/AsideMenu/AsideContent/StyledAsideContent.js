import styled from 'styled-components';
import {Link} from 'react-router-dom';
import colors from '../../../assets/colors';

export const Wrapper = styled.aside`
   width: 200px;
   height: 100%;
   border-right: 1px solid #e8e8e8;
   background-color: white;
   font-family: segoe;
   color: ${colors.black85};
   position: relative;
`

export const Logout = styled(Link)`
   width: 90%;
   height: 35px;
   margin: 40px auto;
   background-color: ${colors.redColor};
   border-radius: 5px;
   text-decoration: none;
   font-size: 14px;
   font-family: segoe;
   color: white;
   transition: .3s;

   display: flex;
   justify-content: center;
   align-items: center;

   &:hover {
      background-color: ${colors.hoverRedColor};
      transition: .3s;
   }
`
