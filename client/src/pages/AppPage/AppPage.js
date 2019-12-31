import React from 'react';

import * as S from './StyledAppPage';

import AppNavbarContainer from '../../containers/AppNavbarContainer/AppNavbarContainer';
import AsideNavigation from '../../components/AsideMenu/AsideNavigation/AsideNavigation';
import UserRoutes from '../../routes/UserRoutes';

const AppPage = ({visible}) => {
   return (  
      <S.Wrapper>
         <AppNavbarContainer />
         <S.Section>
            {visible && <AsideNavigation/>}
            <UserRoutes />
         </S.Section>
      </S.Wrapper>
   );
}
 
export default AppPage;