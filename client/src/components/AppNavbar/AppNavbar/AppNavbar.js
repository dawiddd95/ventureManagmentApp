import React from 'react';
import * as S from './StyledAppNavbar';

import DropdownMenu from '../DropdownMenu/DropdownMenu';

import icons from '../../../assets/icons';

const AppNavbar = ({avatar, visible, handleChangeMenuVisibility}) => {
   const defaultAvatar = 'sciezka';

   return (  
      <S.Wrapper>
         <S.MenuIcon 
            src={visible ? icons.close : icons.menu}
            onClick={() => handleChangeMenuVisibility()} 
            visible={visible}
         />
         <S.Title>
            Venture Managment App
         </S.Title>
         <DropdownMenu />
      </S.Wrapper>
   );
}
 
export default AppNavbar;
