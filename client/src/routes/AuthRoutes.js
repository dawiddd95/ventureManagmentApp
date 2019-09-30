import React from 'react'
import {Switch, Route} from 'react-router-dom'

import AuthLogin from '../components/Auth/AuthLogin/AuthLogin'
import AuthSignup from '../components/Auth/AuthSignup/AuthSignup'
import AuthForgotPassword from '../components/Auth/AuthForgotPassword/AuthForgotPassword'
import VerifyEmail from '../components/Auth/VerifyEmail/VerifyEmail'
import FetchResetPasswordLink from '../components/Auth/FetchResetPasswordLink/FetchResetPasswordLink'
import ErrorPage from '../components/ErrorPage/ErrorPage'


const AuthRoutes = () => {
   return (  
      <Switch>
         <Route exact path='/auth/login' component={AuthLogin} />   
         <Route exact path='/auth/signup' component={AuthSignup} /> 
         <Route exact path='/auth/forgot-password' component={AuthForgotPassword} />
         <Route path='/auth/verify' component={VerifyEmail} />
         <Route path='/auth/reset' component={FetchResetPasswordLink} />
         <Route component={ErrorPage} />
      </Switch>
   )
}
 
export default AuthRoutes