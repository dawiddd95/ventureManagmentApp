import React from 'react'
import {Switch, Route} from 'react-router-dom'

import LoginPage from '../pages/LoginPage/LoginPage'
import SignupPage from '../pages/SignupPage/SignupPage'
import ForgotPasswordPage from '../pages/ForgotPasswordPage/ForgotPasswordPage'
import VerifyEmailPage from '../pages/VerifyEmailPage/VerifyEmailPage'
import ResetPasswordPage from '../pages/ResetPasswordPage/ResetPasswordPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'


const AuthRoutes = () => {
   return (  
      <Switch>
         <Route exact path='/auth/login' component={LoginPage} />   
         <Route exact path='/auth/signup' component={SignupPage} /> 
         <Route exact path='/auth/forgot-password' component={ForgotPasswordPage} />
         <Route path='/auth/verify' component={VerifyEmailPage} />
         <Route path='/auth/reset' component={ResetPasswordPage} />
         <Route component={ErrorPage} />
      </Switch>
   )
}
 
export default AuthRoutes