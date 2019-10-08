import styled from 'styled-components';
import {Link} from 'react-router-dom';
import colors from '../../../assets/colors';

export const Wrapper = styled.aside`
   width: 200px;
   height: 100%;
   border-right: 1px solid #e8e8e8;
   font-family: segoe;
   color: ${colors.black85};
`

export const Avatar = styled(Link)`
   width: 100%;
   height: 100px;
   font-weight: 800;
   font-size: 14px;
   color: ${colors.black85};
   text-decoration: none;
   background-color: transparent;
   transition: .3s;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   &:hover {
      transition: .3s;
      background-color: #F9F9F9;
   }
`

export const AvatarImg = styled.img`
   width: 30px;
   height: 30px;
   margin-bottom: 5px;
`

export const Logout = styled(Link)`
   width: 90%;
   height: 35px;
   margin: 40px auto;
   background-color: ${colors.redColor};
   border-radius: 5px;
   text-decoration: none;
   font-size: 14px;
   font-family: segoe;
   color: white;
   transition: .3s;

   display: flex;
   justify-content: center;
   align-items: center;

   &:hover {
      background-color: ${colors.hoverRedColor};
      transition: .3s;
   }
`
