import React from 'react';
import * as S from './StyledAsideContent';
import AsideNavigation from '../AsideNavigation/AsideNavigation';


const AsideContent = () => {
   const logout = () => {
      localStorage.removeItem('session'); 
   }

   return (  
      <S.Wrapper>
         <AsideNavigation />
         <S.Logout onClick={logout} to='/auth/login'>
            Sign out
         </S.Logout>
      </S.Wrapper>
   );
}
 
export default AsideContent;