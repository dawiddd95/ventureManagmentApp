import styled from 'styled-components';
import {Link} from 'react-router-dom';
import colors from '../../../assets/colors';


export const ButtonsWrapper = styled.div`
   width: 90%;
   margin-left: 20px;

   display: flex;
`

export const ButtonLink = styled(Link)`
   height: 32px;
   margin-right: 7px;
   padding: 0 15px;
   font-weight: 400;
   font-size: 14px;
   background-color: ${colors.redColor};
   border: 1px solid transparent;
   border-radius: 5px;
   text-shadow: 0 -1px 0 rgba(0,0,0,0.12);
   box-shadow: 0 2px 0 rgba(0,0,0,0.045);
   text-decoration: none;
   color: white;
   transition: .3s;
   cursor: pointer;

   display: flex;
   align-items: center;

   :hover {
      background-color: ${colors.hoverRedColor};
      transition: .3s;
   }
`

export const Img = styled.img`
   width: 12px;
   height: 12px;
   margin-right: 10px;
`

export const FancyButtonLink = styled(ButtonLink)`
   background-color: white;
   border: 1px solid #D9D9D9;
   color: ${colors.black65};
   box-shadow: 0 2px 0 rgba(0,0,0,0.015);
   transition: .3s;

   :hover {
      background-color: white;
      border: 1px solid ${colors.redColor};
      color: ${colors.redColor};
   }
`

export const FancyButton = styled.button`
   height: 32px;
   margin-right: 7px;
   padding: 0 15px;
   font-weight: 400;
   font-size: 14px;
   background-color: white;
   border: 1px solid #D9D9D9;
   border-radius: 5px;
   text-shadow: 0 -1px 0 rgba(0,0,0,0.12);
   box-shadow: 0 2px 0 rgba(0,0,0,0.015);
   color: ${colors.black65};
   transition: .3s;
   cursor: pointer;
   outline: 0;

   display: flex;
   align-items: center;

   :hover {
      background-color: white;
      border: 1px solid ${colors.redColor};
      color: ${colors.redColor};
      transition: .3s;
   }
`