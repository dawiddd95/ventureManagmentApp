import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Login from '../components/Auth/Login/Login'
import Signup from '../components/Auth/Signup/Signup'
import ForgotPassword from '../components/Auth/ForgotPassword/ForgotPassword'
import VerifyEmail from '../components/Auth/VerifyEmail/VerifyEmail'
import ResetPasswordPage from '../components/Auth/ResetPassword/ResetPasswordPage/ResetPasswordPage'
import ErrorPage from '../components/ErrorPage/ErrorPage'


const AuthRoutes = () => {
   return (  
      <Switch>
         <Route exact path='/auth/login' component={Login} />   
         <Route exact path='/auth/signup' component={Signup} /> 
         <Route exact path='/auth/forgot-password' component={ForgotPassword} />
         <Route path='/auth/verify' component={VerifyEmail} />
         <Route path='/auth/reset' component={ResetPasswordPage} />
         <Route component={ErrorPage} />
      </Switch>
   )
}
 
export default AuthRoutes