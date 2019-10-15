import styled from 'styled-components';
import {Link} from 'react-router-dom';
import colors from '../../assets/colors';

export const Wrapper = styled.div`
   width: 100%;
   height: 60px;
   background-color: white;
   border-bottom: 1px solid #E9E9E9;
   position: absolute;

   display: flex;
   align-items: center;
`

export const MenuIcon = styled.img`
   width: ${props => props.visible ? '14px' : '20px'};
   height: ${props => props.visible ? '14px' : '20px'};
   margin-left: ${props => props.visible ? '190px' : '25px'};
   cursor: pointer;
`

export const Title = styled.h1`
   margin: 0 0 0 25px;
   font-weight: normal;
   font-size: 20px;
   font-family: Nunito;
`

export const Avatar = styled(Link)`
   width: 150px;
   height: 100%;
   margin-left: auto;
   font-family: segoe;
   font-size: 14px;
   text-decoration: none;
   color: ${colors.black65};
   transition: .3s;

   display: flex;
   justify-content: center;
   align-items: center;

   :hover {
      background-color: #F9F9F9;
      transition: .3s;
   }
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