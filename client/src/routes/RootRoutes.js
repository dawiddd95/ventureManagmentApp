import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import AuthRoutes from './AuthRoutes';
import AppContainer from '../containers/AppContainer/AppContainer';
import ProtectAgainstLogout from '../components/ProtectRoutes/ProtectAgainstLogout/ProtectAgainstLogout';
import ProtectAgainstLogin from '../components/ProtectRoutes/ProtectAgainstLogin/ProtectAgainstLogin';
import ErrorPage from '../pages/ErrorPage/ErrorPage';


const RootRoutes = () => {
   return (  
      <Router>
         <Switch>
            <Route exact path='/' render={() => <Redirect to='/auth/login' />} />
            <ProtectAgainstLogout path='/auth' component={AuthRoutes} /> 
            <ProtectAgainstLogin path="/user" component={AppContainer} />
            <Route component={ErrorPage} />
         </Switch>
      </Router>
   );
}
 
export default RootRoutes;