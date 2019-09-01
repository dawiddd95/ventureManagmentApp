import React from 'react';
import {Switch, Route} from 'react-router-dom';

import FetchUserBookings from '../app/users/containers/FetchUserBookings/FetchUserBookings';
import ErrorPage from '../components/ErrorPage/ErrorPage';

const UserBookingsRoutes = () => {
   return (  
      <Switch>
         <Route exact path='/user/bookings' component={FetchUserBookings} />    
         {/* <Route exact path='/user/bookings/:id_bookingu' component={} /> */}
         {/* <Route exact path='/user/bookings/:id_bookingu/edit' component={} /> */}
         <Route component={ErrorPage} />
      </Switch>
   );
}
 
export default UserBookingsRoutes;