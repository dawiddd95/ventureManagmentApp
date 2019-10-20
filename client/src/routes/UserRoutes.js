import React from 'react';
import {Switch, Route} from 'react-router-dom';

import UserBookingsRoutes from './UserBookingsRoutes';
import ErrorPage from '../components/ErrorPage/ErrorPage';

const UserRoutes = () => {
   return (  
      <Switch>
         <Route path='/user/bookings' component={UserBookingsRoutes} />    
         {/* <Route path='/user/profile' component={Routy profile} /> */}
         {/* <Route path='/user/users' component={Test} />
         <Route path='/user/audit-logs' component={Test} />
         <Route path='/user/clients' component={Test} />
         <Route path='/user/orders' component={Test} />
         <Route path='/user/communicator' component={Test} /> */} 
         <Route component={ErrorPage} />
      </Switch>
   );
}
 
export default UserRoutes;