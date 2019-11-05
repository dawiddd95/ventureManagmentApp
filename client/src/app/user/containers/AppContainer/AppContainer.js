import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Query} from 'react-apollo';

import AppNavbarContainer from '../../../navbar/containers/AppNavbarContainer/AppNavbarContainer';
import AsideNavigation from '../../../../components/AsideMenu/AsideNavigation/AsideNavigation';
import UserRoutes from '../../../../routes/UserRoutes';

import * as S from './StyledAppContainer';
import {ME_QUERY} from '../../../../graphql/user/query';
import thunkActions from '../../duck/thunks';


const AppContainer = () => {
   const dispatch = useDispatch();
   const {visible} = useSelector(state => state.menuVisibility);

   return (  
      <Query query={ME_QUERY}>
         {({loading, error, data}) => {
            if(data) dispatch(thunkActions.fetchLoggedUserAction(data))
            // Zrobić że dopóki jest loading to ten wielki loader z jakims napisem najlepiej   
            return (
               <S.Wrapper>
                  <AppNavbarContainer />
                  <S.Section>
                     {visible ? <AsideNavigation /> : null}
                     <UserRoutes />
                  </S.Section>
               </S.Wrapper>
            )
         }}
      </Query>
   );
}
 
export default AppContainer;