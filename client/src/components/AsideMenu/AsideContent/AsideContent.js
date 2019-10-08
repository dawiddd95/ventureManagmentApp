import React from 'react';
import * as S from './StyledAsideContent';
import icons from '../../../assets/icons';
import AsideNavigation from '../AsideNavigation/AsideNavigation';


const AsideContent = ({user}) => {
   const logout = () => {
      localStorage.removeItem('session'); 
   }

   return (  
      <S.Wrapper>
         <S.Avatar to='/user/profile'>
            <S.AvatarImg src={icons.avatarIcon} />
            {user.name} {user.surname}
         </S.Avatar>
         <AsideNavigation />
         <S.Logout onClick={logout} to='/auth/login'>
            Sign out
         </S.Logout>
      </S.Wrapper>
   );
}
 
export default AsideContent;