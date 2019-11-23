import React from 'react';
import {Switch, Route} from 'react-router-dom';

import ReservationsContainer from '../app/reservations/containers/ReservationsContainer/ReservationsContainer';
import AddEditReservation from '../components/Reservations/AddEditReservation/AddEditReservation';
import ImportReservationsPage from '../components/Reservations/ImportReservationsPage/ImportReservationsPage';
import ViewReservation from '../components/Reservations/ViewReservation/ViewReservation';
import ErrorPage from '../components/ErrorPage/ErrorPage';


const UserReservationsRoutes = () => {
   return (  
      <Switch>
         <Route exact path='/user/reservations' component={ReservationsContainer} />   
         <Route exact path='/user/reservations/new' render={
            (props) => <AddEditReservation {...props} isEdit={false} />
         } />
         <Route exact path='/user/reservations/import' component={ImportReservationsPage} />
         <Route exact path='/user/reservations/:id' render={
            (props) => <ViewReservation {...props} reservation={props.location.state.reservation}/>
         } />
         <Route exact path='/user/reservations/:id/edit' render={
            (props) => <AddEditReservation 
               {...props} 
               isEdit={true} 
               reservation={props.location.state.reservation} 
            />
         } />
         <Route component={ErrorPage} />
      </Switch>
   );
}
 
export default UserReservationsRoutes;