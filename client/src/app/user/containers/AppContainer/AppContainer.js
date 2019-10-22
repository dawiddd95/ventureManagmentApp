import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import AppNavbarContainer from '../../../navbar/containers/AppNavbarContainer/AppNavbarContainer';
import AsideNavigation from '../../../../components/AsideMenu/AsideNavigation/AsideNavigation';
import UserRoutes from '../../../../routes/UserRoutes';

import * as S from './StyledAppContainer';
import thunkActions from '../../duck/thunks';


const AppContainer = () => {
   const dispatch = useDispatch();
   const {visible} = useSelector(state => state.menuVisibility);

   useEffect(() => {
      dispatch(thunkActions.fetchLoggedUserAction())
   }, [])

   return (  
      <S.Wrapper>
         <AppNavbarContainer />
         <S.Section>
            {visible ? <AsideNavigation /> : null}
            <UserRoutes />
         </S.Section>
      </S.Wrapper>
   );
}
 
export default AppContainer;