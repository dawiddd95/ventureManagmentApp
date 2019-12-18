import React from 'react';
import * as S from './StyledAppNavbar';

import DropdownMenu from '../DropdownMenu/DropdownMenu';

import icons from '../../../assets/icons';

const AppNavbar = ({avatar, visible, handleChangeMenuVisibility}) => {
   const defaultAvatar = 'sciezka';

   return (  
      <S.Wrapper>
         <S.MenuIcon 
            visible_style={visible}
            src={visible ? icons.close : icons.menu}
            onClick={() => handleChangeMenuVisibility()} 
         />
         <S.Title>
            Venture Managment App
         </S.Title>
         <DropdownMenu />
      </S.Wrapper>
   );
}
 
export default AppNavbar;
