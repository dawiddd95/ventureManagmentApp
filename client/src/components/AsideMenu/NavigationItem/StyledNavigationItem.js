import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import colors from '../../../assets/colors';

export const NavigationItem = styled(NavLink)`
   width: 100%;
   height: 47px;
   margin-bottom: 5px;
   font-size: 14px;
   font-family: segoe;
   font-variant: tabular-nums;
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
      background-color: #FFF1F0;
      color: ${colors.redColor};
   }
`

export const Icon = styled.img`
   width 17px;
   height: 17px;
   margin-left: 20px;
`

export const Text = styled.p`
   margin: 0 0 0 15px;
`