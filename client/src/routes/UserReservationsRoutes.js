import React from 'react';
import {Switch, Route} from 'react-router-dom';

import ReservationsContainer from '../app/reservations/containers/ReservationsContainer/ReservationsContainer';
import AddNewReservation from '../components/Reservations/AddNewReservation/AddNewReservation';
import ImportReservationsPage from '../components/Reservations/ImportReservationsPage/ImportReservationsPage';
import ErrorPage from '../components/ErrorPage/ErrorPage';



const UserReservationsRoutes = () => {
   return (  
      <Switch>
         <Route exact path='/user/reservations' component={ReservationsContainer} />   
         <Route exact path='/user/reservations/new' component={AddNewReservation} />
         <Route exact path='/user/reservations/import' component={ImportReservationsPage} />
         {/* <Route exact path='/user/bookings/:id_bookingu' component={} /> */}
         {/* <Route exact path='/user/bookings/:id_bookingu/edit' component={} /> */}
         <Route component={ErrorPage} />
      </Switch>
   );
}
 
export default UserReservationsRoutes;