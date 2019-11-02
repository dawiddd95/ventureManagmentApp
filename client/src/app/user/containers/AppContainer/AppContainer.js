import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Query} from 'react-apollo';

import AppNavbarContainer from '../../../navbar/containers/AppNavbarContainer/AppNavbarContainer';
import AsideNavigation from '../../../../components/AsideMenu/AsideNavigation/AsideNavigation';
import UserRoutes from '../../../../routes/UserRoutes';

import * as S from './StyledAppContainer';
import {ME_QUERY} from '../../../../graphql/user/query';


const AppContainer = () => {
   const dispatch = useDispatch();
   const {visible} = useSelector(state => state.menuVisibility);

   // Poniższy kod zwraca zalogowanego usera w stylu REST API
   // useEffect(() => {
   //    dispatch(thunkActions.fetchLoggedUserAction())
   // }, [])

   return (  
      <Query query={ME_QUERY}>
         {({loading, error, data}) => {
            console.log(data)
            // Tutaj chyba powinien być kod który wrzuci te {data} do reduxowego storea
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