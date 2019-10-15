import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import colors from '../../../assets/colors';

export const NavigationItem = styled(NavLink)`
   width: 100%;
   height: 45px;
   margin: 5px 0;
   font-weight: 700;
   font-size: 14px;
   font-family: segoe;
   text-decoration: none;
   color: ${colors.black65};

   display: flex;
   align-items: center;

   &.active {
      background-color: #FFF1F0;
      box-shadow: inset -10px 0px 0px -7px ${colors.redColor};
      color: ${colors.redColor};
   }

   :hover {
      color: ${colors.redColor};
   }
`

export const Icon = styled.img`
   width 15px;
   height: 15px;
   margin-left: 20px;
`

export const Text = styled.p`
   margin: 0 0 0 10px;
`