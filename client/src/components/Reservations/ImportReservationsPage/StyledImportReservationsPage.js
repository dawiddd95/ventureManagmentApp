import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';
import colors from '../../../assets/colors';

export const Wrapper = styled.div`
   width: 100%;
   min-height: 100vh;
   background-color: #F0F2F5;
   display: block;
`

export const Section = styled.div`
   width: 100%;
   height: 100%;
   font-family: segoe;
   display: flex;
`

export const MainContent = styled.main`
   width: 100%;
   height: 100%;
   margin: 0 23px;
   display: flex;
   flex-direction: column;
`

export const BreadCrumbs = styled.div`
   width: 40%;
   height: auto;
   margin-top: 85px;
   font-size: 14px;
`

export const StyledLink = styled(Link)`
   margin-right: 10px;
   text-decoration: none;
   color: #B8BABC;
`

export const BookingsBox = styled.div`
   width: 100%;
   margin: 20px auto;
   background-color: white;
   border: 1px solid #E9E9E9;
   border-radius: 5px;
`

export const ContentWrapper = styled.div`
   margin: 20px;
`

export const Header = styled.header`
   margin: 30px 0 37px 0;
   font-size: 28px;
   font-family: Nunito;
   color: ${colors.black65};
`

export const FancyButton = styled.button`
   height: 32px;
   margin-top: 30px;
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

export const Img = styled.img`
   width: 12px;
   height: 12px;
   margin-right: 10px;
   ${({box}) => box && css`
      width: 40px;
      height: 40px;
      margin: 0 0 20px 0;
   `}
`