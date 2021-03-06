import styled from 'styled-components';
import {Link} from 'react-router-dom';
import colors from '../../assets/colors';

export const Wrapper = styled.div`
   width: 100%;
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

export const Header = styled.header`
   margin: 30px 0 37px 23px;
   font-size: 28px;
   font-family: Nunito;
   color: ${colors.black65};
`