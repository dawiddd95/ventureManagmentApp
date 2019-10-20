import React from 'react';
import {useSelector} from 'react-redux';

import AppNavbarContainer from '../../../navbar/containers/AppNavbarContainer/AppNavbarContainer';
import AsideNavigation from '../../../../components/AsideMenu/AsideNavigation/AsideNavigation';
import UserRoutes from '../../../../routes/UserRoutes';

import * as S from './StyledAppContainer';


const AppContainer = () => {
   const menuVisibility = useSelector(state => state.menuVisibility);

   return (  
      <S.Wrapper>
         <AppNavbarContainer />
         <S.Section>
            {menuVisibility.visible ? <AsideNavigation /> : null}
            <UserRoutes />
         </S.Section>
      </S.Wrapper>
   );
}
 
export default AppContainer;