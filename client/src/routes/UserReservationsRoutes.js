import React from 'react'
import {Switch, Route} from 'react-router-dom'

import FetchLoggedUserReservations from '../containers/FetchLoggedUserReservations/FetchLoggedUserReservations'
import AddReservationPage from '../pages/AddReservationPage/AddReservationPage'
import ImportReservationsContainer from '../containers/ImportReservationsContainer/ImportReservationsContainer'
import ViewReservationContainer from '../containers/ViewReservationContainer/ViewReservationContainer'
import FetchReservationContainer from '../containers/FetchReservationContainer/FetchReservationContainer'
import ErrorPage from '../pages/ErrorPage/ErrorPage'


const UserReservationsRoutes = () => {
   return (  
      <Switch>
         <Route exact path='/user/reservations' component={FetchLoggedUserReservations} />   
         <Route exact path='/user/reservations/new' component={AddReservationPage} /> 
         <Route exact path='/user/reservations/import' component={ImportReservationsContainer} />
         <Route exact path='/user/reservations/:id' component={ViewReservationContainer} />
         <Route exact path='/user/reservations/:id/edit' component={FetchReservationContainer} />  
         <Route component={ErrorPage} />
      </Switch>
   );
}
 
export default UserReservationsRoutes;