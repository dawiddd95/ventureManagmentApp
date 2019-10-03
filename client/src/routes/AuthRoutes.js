import React from 'react'
import {Switch, Route} from 'react-router-dom'

import LoginPage from '../components/Auth/LoginPage/LoginPage'
import SignupPage from '../components/Auth/SignupPage/SignupPage'
import ForgotPasswordPage from '../components/Auth/ForgotPasswordPage/ForgotPasswordPage'
import VerifyEmail from '../components/Auth/VerifyEmail/VerifyEmail'
import FetchResetPasswordLink from '../components/Auth/FetchResetPasswordLink/FetchResetPasswordLink'
import ErrorPage from '../components/ErrorPage/ErrorPage'



const AuthRoutes = () => {
   return (  
      <Switch>
         <Route exact path='/auth/login' component={LoginPage} />   
         <Route exact path='/auth/signup' component={SignupPage} /> 
         <Route exact path='/auth/forgot-password' component={ForgotPasswordPage} />
         <Route path='/auth/verify' component={VerifyEmail} />
         <Route path='/auth/reset' component={FetchResetPasswordLink} />
         <Route component={ErrorPage} />
      </Switch>
   )
}
 
export default AuthRoutes