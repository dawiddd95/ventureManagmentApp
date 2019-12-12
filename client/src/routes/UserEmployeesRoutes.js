import React from 'react';
import {Switch, Route} from 'react-router-dom';

import EmployeesContainer from '../app/employees/containers/EmployeesContainer/EmployeesContainer';
import AddEditEmployee from '../components/EmployeesPage/AddEditEmployee/AddEditEmployee';
import ViewEmployee from '../components/EmployeesPage/ViewEmployee/ViewEmployee';
import ErrorPage from '../components/ErrorPage/ErrorPage';



const UserEmployeesRoutes = () => {
   return (  
      <Switch>
         <Route exact path='/user/employees' component={EmployeesContainer} />
         <Route exact path='/user/employees/new' render={
            (props) => <AddEditEmployee {...props} isEdit={false} />
         } />
         {/* <Route exact path='/user/reservations/import' component={ImportReservationsPage} /> */}
         <Route exact path='/user/employees/:id' render={
            (props) => <ViewEmployee {...props} employee={props.location.state.employee}/>
         } />
         <Route exact path='/user/employees/:id/edit' render={
            (props) => <AddEditEmployee
               {...props} 
               isEdit={true} 
               employee={props.location.state.employee} 
            />
         } />
         <Route component={ErrorPage} />
      </Switch>
   );
}
 
export default UserEmployeesRoutes;