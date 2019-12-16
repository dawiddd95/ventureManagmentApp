import React from 'react';
import {Switch, Route} from 'react-router-dom';

import ReservationsContainer from '../app/reservations/containers/ReservationsContainer/ReservationsContainer';
import AddReservationContainer from '../app/reservations/containers/AddReservationContainer/AddReservationContainer';
import ImportReservationsPage from '../components/Reservations/ImportReservationsPage/ImportReservationsPage';
import ViewReservationContainer from '../app/reservations/containers/ViewReservationContainer/ViewReservationContainer';
import EditReservationContainer from '../app/reservations/containers/EditReservationContainer/EditReservationContainer';
import ErrorPage from '../components/ErrorPage/ErrorPage';


const UserReservationsRoutes = () => {
   return (  
      <Switch>
         <Route exact path='/user/reservations' component={ReservationsContainer} />   
         <Route exact path='/user/reservations/new' component={AddReservationContainer} />
         <Route exact path='/user/reservations/import' component={ImportReservationsPage} />
         <Route exact path='/user/reservations/:id' component={ViewReservationContainer} />
         <Route exact path='/user/reservations/:id/edit' component={EditReservationContainer} />
         <Route component={ErrorPage} />
      </Switch>
   );
}
 
export default UserReservationsRoutes;