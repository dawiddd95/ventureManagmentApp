import React from 'react';
import {Switch, Route} from 'react-router-dom';

import BookingsContainer from '../app/users/containers/BookingsContainer/BookingsContainer';
import NewBooking from '../components/Bookings/NewBooking/NewBooking';
import ErrorPage from '../components/ErrorPage/ErrorPage';


const UserBookingsRoutes = () => {
   return (  
      <Switch>
         <Route exact path='/user/bookings' component={BookingsContainer} />   
         <Route exact path='/user/bookings/new' component={NewBooking} /> 
         {/* <Route exact path='/user/bookings/:id_bookingu' component={} /> */}
         {/* <Route exact path='/user/bookings/:id_bookingu/edit' component={} /> */}
         <Route component={ErrorPage} />
      </Switch>
   );
}
 
export default UserBookingsRoutes;