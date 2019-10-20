import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import AuthRoutes from './AuthRoutes';
import UserRoutes from './UserRoutes';
import AppContainer from '../app/user/containers/AppContainer/AppContainer';
import ProtectAgainstLogout from '../components/ProtectRoutes/ProtectAgainstLogout/ProtectAgainstLogout';
import ProtectAgainstLogin from '../components/ProtectRoutes/ProtectAgainstLogin/ProtectAgainstLogin';
import ErrorPage from '../components/ErrorPage/ErrorPage';

const RootRoutes = () => {
   return (  
      <Router>
         <Switch>
            <Route exact path='/' render={() => <Redirect to='/auth/login' />} />
            <ProtectAgainstLogout path='/auth' component={AuthRoutes} /> 
            <ProtectAgainstLogin path="/user" component={AppContainer} />
            {/* BACK UP */}
            {/* <ProtectAgainstLogin path="/user" component={UserRoutes} /> */}
            <Route component={ErrorPage} />
         </Switch>
      </Router>
   );
}
 
export default RootRoutes;