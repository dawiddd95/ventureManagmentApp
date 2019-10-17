import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';

import colors from '../../../assets/colors';

export const StyledButton = styled(Button)`
   && { 
      width: 150px;
      height: 100%;
      margin-left: auto;
      font-size: 14px;
      font-family: 'segoe';
      color: red;
      border: 0;
      border-radius: 0;
      text-transform: none;
      letter-spacing: 0;
      outline: 0;
      padding: 0;
      :hover {
         background-color: #F9F9F9;
         transition: .3s;
      }
   }
`

export const StyledMenu = styled(Menu)`
   && {
      .MuiPaper-root {
         width: 160px;
         margin: 50px 0 0 auto;
         padding: 0;
      }

      .MuiListItem-gutters {
         padding: 0;
      }

      li:hover {
         background-color: #FFF1F0;
      }
   }
`

export const StyledLink = styled(Link)`
   width: 100%;
   height: 40px;
   padding: 0;
   text-decoration: none;
   font-family: 'segoe';
   font-size: 14px;
   color: ${colors.black65};

   display: flex;
   align-items: center;
`

export const Avatar = styled.div`
   width: 100%;
   height: 100%;
   margin-left: auto;
   font-family: segoe;
   font-size: 14px;
   text-decoration: none;
   color: ${colors.black65};
   cursor: pointer;
   transition: .3s;

   display: flex;
   justify-content: center;
   align-items: center;
`

export const Img = styled.img`
   width: 30px;
   height: 30px;
   margin-right: 10px;
   border-radius: 50%;
   background-size: cover;
   background-position: center;
   object-fit: fit;
   cursor: pointer;
`

export const DropdownIcon = styled.img`
   width: 12px;
   height: 12px;
   margin: 2px 7px 0 15px;
`