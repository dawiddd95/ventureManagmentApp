import React from 'react';
import * as S from './StyledAppNavbar';

import icons from '../../assets/icons';
import avatarDefault from '../../assets/img/avatar-default.jpg';

const AppNavbar = ({avatar, visible, showHideMenu}) => {
   const defaultAvatar = 'sciezka';

   return (  
      <S.Wrapper>
         <S.MenuIcon 
            src={visible ? icons.close : icons.menu}
            onClick={() => showHideMenu()} 
            visible={visible}
         />
         <S.Title>
            Venture Managment App
         </S.Title>
         <S.Avatar to='/user/profile'>
            <S.Img 
               style={{'backgroundImage': `url(${avatarDefault})`}}
            />
            Manager
         </S.Avatar>
      </S.Wrapper>
   );
}
 
export default AppNavbar;
