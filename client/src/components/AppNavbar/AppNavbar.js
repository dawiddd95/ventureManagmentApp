import React from 'react';
import * as S from './StyledAppNavbar';

import icons from '../../assets/icons';

import DropdownMenuContainer from '../../containers/DropdownMenuContainer/DropdownMenuContainer';

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
         <DropdownMenuContainer />
      </S.Wrapper>
   );
}
 
export default AppNavbar;
