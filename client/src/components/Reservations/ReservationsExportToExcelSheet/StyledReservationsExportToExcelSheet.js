import styled from 'styled-components';
import colors from '../../../assets/colors';

// stworzyc warunki by rozroznialo download template i import to excel
export const FancyButton = styled.button`
   height: 34px;
   margin: ${({template}) => template ? '30px 0 0 0' : '0'};
   padding: 0 15px;
   font-weight: 400;
   font-size: 14px;
   font-family: segoe;
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

export const Img = styled.img`
   width: 12px;
   height: 12px;
   margin-right: 10px;
`