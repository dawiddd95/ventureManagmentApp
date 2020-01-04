import React from 'react';
import {Switch, Route} from 'react-router-dom';

import UserReservationsRoutes from './UserReservationsRoutes';
import UserEmployeesRoutes from './UserEmployeesRoutes';
import ErrorPage from '../pages/ErrorPage/ErrorPage';


const UserRoutes = () => {
   return (  
      <Switch>
         <Route path='/user/reservations' component={UserReservationsRoutes} />    
         <Route path='/user/employees' component={UserEmployeesRoutes} />
         {/* <Route path='/user/profile' component={Routy profile} /> */}
         {/*<Route path='/user/audit-logs' component={Test} />
         <Route path='/user/clients' component={Test} />
         <Route path='/user/orders' component={Test} />
         <Route path='/user/communicator' component={Test} /> */} 
         <Route component={ErrorPage} />
      </Switch>
   );
}
 
export default UserRoutes;