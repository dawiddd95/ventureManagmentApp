import React from 'react';
import {useDispatch} from 'react-redux';
import { useQuery } from '@apollo/react-hooks';

import { USER_EMPLOYEES_QUERY } from '../../graphql/employee/query';
import actions from '../../app/employees/duck/actions';
import thunkActions from '../../app/employees/duck/thunks';

import LoadingPage from '../../pages/LoadingPage/LoadingPage';
import FetchError from '../../components/FetchError/FetchError';
import EmployeesPage from '../../pages/EmployeesPage/EmployeesPage';

const FetchLoggedUserEmployees = () => {
   const dispatch = useDispatch();
   const { loading, error, data } = useQuery(USER_EMPLOYEES_QUERY);

   if(loading) return <LoadingPage />
   if(error) return <FetchError />

   if(data) {
      dispatch(actions.clearEmployeesAction())
      dispatch(thunkActions.fetchLoggedUserEmployees(data.userEmployees))
   }

   return <EmployeesPage />
}
 
export default FetchLoggedUserEmployees;