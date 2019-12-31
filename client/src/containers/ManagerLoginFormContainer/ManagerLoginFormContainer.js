import React from 'react';
import {Redirect} from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';

import { LOGIN_USER_MUTATION } from '../../graphql/user/mutation';
import { useAuthForm } from '../../hooks/useAuthForm';

import ManagerLoginForm from '../../components/Auth/Login/ManagerLoginForm/ManagerLoginForm';

const ManagerLoginFormContainer = () => {
   const [mutation, { loading, error, data }] = useMutation(LOGIN_USER_MUTATION);
   const [isSubmit, setIsSubmit, handleOnInput] = useAuthForm();
   const [checked, setChecked] = React.useState(false);
   
   const handleOnChange = () => {
      setChecked(!checked)
   }

   const handleOnSubmit = values => {
      setIsSubmit(true)
      if(checked) localStorage.setItem('user', values.email)
   }

   if(data) {
      localStorage.setItem('token', data.loginUser.token);  
      sessionStorage.setItem('session', true);
      return <Redirect to='/user/reservations' />
   }


   return (
      <ManagerLoginForm 
         mutation={mutation}
         err={(error && isSubmit) && 'Wrong user or password'}
         loading={loading}
         checked={checked}
         handleOnInput={handleOnInput} 
         handleOnChange={handleOnChange}
         handleOnSubmit={handleOnSubmit}   
      /> 
   )
}
 
export default ManagerLoginFormContainer;