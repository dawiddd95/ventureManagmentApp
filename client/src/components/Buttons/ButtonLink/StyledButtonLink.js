import styled from 'styled-components';
import {Link} from 'react-router-dom';
import colors from '../../../assets/colors';

export const ButtonLink = styled(Link)`
   height: 32px;
   margin-right: 7px;
   padding: 0 15px;
   font-weight: 400;
   font-size: 14px;
   background-color: ${({fancy_style}) => fancy_style ? 'white' : colors.redColor};
   border: ${({fancy_style}) => fancy_style ? '1px solid #D9D9D9' : '1px solid transparent'};
   border-radius: 5px;
   text-shadow: 0 -1px 0 rgba(0,0,0,0.12);
   box-shadow: ${({fancy_style}) => fancy_style ? '0 2px 0 rgba(0,0,0,0.015)' : '0 2px 0 rgba(0,0,0,0.045)'};
   text-decoration: none;
   color: ${({fancy_style}) => fancy_style ? colors.black65 : 'white'};
   transition: .3s;
   cursor: pointer;

   display: flex;
   align-items: center;

   :hover {
      background-color: ${({fancy_style}) => fancy_style ? 'white' : colors.hoverRedColor};
      color: ${({fancy_style}) => fancy_style ? colors.redColor : 'white'};
      border: ${({fancy_style}) => fancy_style ? `1px solid ${colors.redColor}` : '1px solid transparent'};
      transition: .3s;
   }
`

export const Img = styled.img`
   width: 12px;
   height: 12px;
   margin-right: 10px;
`