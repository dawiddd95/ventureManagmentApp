import styled from 'styled-components';
import {Link} from 'react-router-dom';
import colors from '../../../assets/colors';

export const NavigationItem = styled(Link)`
   width: 100%;
   height: 40px;
   margin: 4px 0;
   text-decoration: none;
   font-weight: 700;
   font-size: 14px;
   color: ${props => props.isActive ? colors.redColor : colors.black65};
   background-color: ${props => props.isActive ? '#FFF1F0' : 'transparent'};
   box-shadow: ${props => props.isActive ? `inset -10px 0px 0px -7px ${colors.redColor}` : 'none'};

   display: flex;
   align-items: center;
   
   &:hover {
      color: ${colors.redColor};
   }
`

export const Icon = styled.img`
   width 15px;
   height: 15px;
   margin-left: 20px;
`

export const Text = styled.p`
   margin-left: 10px;
`