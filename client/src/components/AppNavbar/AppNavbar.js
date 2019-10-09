import React from 'react';
import * as S from './StyledAppNavbar';

import icons from '../../assets/icons';

const AppNavbar = ({visible, showHideMenu}) => {
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
         <S.Avatar>
            img oraz napis manager
         </S.Avatar>
      </S.Wrapper>
   );
}
 
export default AppNavbar;
