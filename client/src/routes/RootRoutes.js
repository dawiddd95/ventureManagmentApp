import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import AuthRoutes from './AuthRoutes';
import UserRoutes from './UserRoutes';
import ProtectAgainstLogout from '../components/ProtectRoutes/ProtectAgainstLogout/ProtectAgainstLogout';
import ProtectAgainstLogin from '../components/ProtectRoutes/ProtectAgainstLogin/ProtectAgainstLogin';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import App from '../app/users/containers/App/App';

const RootRoutes = () => {
   return (  
      <Router>
         <Switch>
            <Route exact path='/' render={() => <Redirect to='/auth/login' />} />
            <ProtectAgainstLogout path='/auth' component={AuthRoutes} /> 
            <ProtectAgainstLogin path="/user" component={App} />
            <Route component={ErrorPage} />
         </Switch>
      </Router>
   );
}
 
export default RootRoutes;