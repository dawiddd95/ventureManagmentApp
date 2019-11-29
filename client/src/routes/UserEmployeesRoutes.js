import React from 'react';
import {Switch, Route} from 'react-router-dom';

import EmployeesContainer from '../app/employees/containers/EmployeesContainer/EmployeesContainer';
import ErrorPage from '../components/ErrorPage/ErrorPage';

const UserEmployeesRoutes = () => {
   return (  
      <Switch>
         <Route exact path='/user/employees' component={EmployeesContainer} />
         <Route component={ErrorPage} />
      </Switch>
   );
}
 
export default UserEmployeesRoutes;