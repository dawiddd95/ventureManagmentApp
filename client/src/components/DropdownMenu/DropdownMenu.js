import React from 'react';
import { MenuItem } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

import * as S from './StyledDropdownMenu';

import icons from '../../assets/icons';
import avatarDefault from '../../assets/img/avatar-default.jpg';

const DropdownMenu = ({anchorEl, logout, handleClick, handleClose}) => {
   return (  
      <>
         {/* Material UI Dropdown Button */}
         <S.StyledButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <S.Avatar>
               <S.Img 
                  style={{'backgroundImage': `url(${avatarDefault})`}}
               />
               Manager
            </S.Avatar>
         </S.StyledButton>
         {/* Styled component to Material UI expanded menu */}
         <S.StyledMenu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
         >
            {/* elements of expanded menu */}
            <MenuItem>
               <S.StyledLink to='/user/profile'>
                  <S.DropdownIcon src={icons.profile} />
                  Edit Profile
               </S.StyledLink>   
            </MenuItem>
            <Divider />
            <MenuItem onClick={logout} >
               <S.StyledLink to='/auth/login'>
                  <S.DropdownIcon src={icons.logout} />
                  Sign out
               </S.StyledLink>   
            </MenuItem>
         </S.StyledMenu>
      </>
   );
}
 
export default DropdownMenu;