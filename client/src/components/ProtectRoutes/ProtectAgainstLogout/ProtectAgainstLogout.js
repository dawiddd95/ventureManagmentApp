import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectAgainstLogout = ({component: Component}) => {
   const session = localStorage.getItem('session');

   return <Route render={(props) => (
      session ? <Redirect to='/user/reservations' /> : <Component {...props} />
   )} />
}

export default ProtectAgainstLogout;