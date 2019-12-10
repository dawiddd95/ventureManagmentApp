import React from 'react';
import {Switch, Route} from 'react-router-dom';

import EmployeesContainer from '../app/employees/containers/EmployeesContainer/EmployeesContainer';
import AddEditEmployee from '../components/EmployeesPage/AddEditEmployee/AddEditEmployee';
import ErrorPage from '../components/ErrorPage/ErrorPage';


const UserEmployeesRoutes = () => {
   return (  
      <Switch>
         <Route exact path='/user/employees' component={EmployeesContainer} />
         <Route exact path='/user/employees/new' render={
            (props) => <AddEditEmployee {...props} isEdit={false} />
         } />
         {/* <Route exact path='/user/reservations/import' component={ImportReservationsPage} />
         <Route exact path='/user/reservations/:id' render={
            (props) => <ViewReservation {...props} reservation={props.location.state.reservation}/>
         } />
         <Route exact path='/user/reservations/:id/edit' render={
            (props) => <AddEditReservation 
               {...props} 
               isEdit={true} 
               reservation={props.location.state.reservation} 
            />
         } /> */}
         <Route component={ErrorPage} />
      </Switch>
   );
}
 
export default UserEmployeesRoutes;