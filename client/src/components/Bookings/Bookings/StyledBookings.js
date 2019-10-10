import styled from 'styled-components';
import {Link} from 'react-router-dom';
import colors from '../../../assets/colors';


export const Wrapper = styled.div`
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
   width: 200px;
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
   height: 100%;
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
   background-color: ${props => props.allowed ? colors.redColor : '#DEDEDE'};
   border: ${props => props.allowed ? '1px solid transparent' : '1px solid #c4c4c4'}
   border-radius: 5px;
   text-shadow: 0 -1px 0 rgba(0,0,0,0.12);
   box-shadow: 0 2px 0 rgba(0,0,0,0.045);
   text-decoration: none;
   color: white;
   transition: .3s;
   cursor: ${props => props.allowed ? 'pointer' : 'not-allowed'};

   display: flex;
   align-items: center;

   :hover {
      background-color: ${props => props.allowed ? colors.hoverRedColor : '#D9D9D9'};
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