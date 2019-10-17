import React from 'react'
import {Switch, Route} from 'react-router-dom'

import LoginPage from '../components/Auth/Login/LoginPage/LoginPage'
import SignupPage from '../components/Auth/SignUp/SignupPage/SignupPage'
import ForgotPasswordPage from '../components/Auth/ForgotPassword/ForgotPasswordPage/ForgotPasswordPage'
import VerifyEmail from '../components/Auth/VerifyEmail/VerifyEmail'
import ResetPasswordPage from '../components/Auth/ResetPassword/ResetPasswordPage/ResetPasswordPage'
import ErrorPage from '../components/ErrorPage/ErrorPage'


const AuthRoutes = () => {
   return (  
      <Switch>
         <Route exact path='/auth/login' component={LoginPage} />   
         <Route exact path='/auth/signup' component={SignupPage} /> 
         <Route exact path='/auth/forgot-password' component={ForgotPasswordPage} />
         <Route path='/auth/verify' component={VerifyEmail} />
         <Route path='/auth/reset' component={ResetPasswordPage} />
         <Route component={ErrorPage} />
      </Switch>
   )
}
 
export default AuthRoutes