import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useQuery } from '@apollo/react-hooks';

import thunkActions from '../../app/user/duck/thunks';
import { ME_QUERY } from '../../graphql/user/query';

import AppPage from '../../pages/AppPage/AppPage';


const AppContainer = () => {
   const dispatch = useDispatch();
   const {visible} = useSelector(state => state.menuVisibility);
   const { loading, error, data } = useQuery(ME_QUERY);

   if(data) dispatch(thunkActions.fetchLoggedUserAction(data))

   return <AppPage visible={visible} />
}
 
export default AppContainer;