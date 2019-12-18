import React from 'react';
import {Redirect} from 'react-router-dom';
import {Mutation} from 'react-apollo';

import * as S from './StyledLoginAsManager';
import { LOGIN_USER_MUTATION } from '../../../../graphql/user/mutation';

import Form from './Form/Form';
import SocialLogin from '../SocialLogin/SocialLogin';


const LoginAsManager = () => {
   const [checked, setChecked] = React.useState(false);
   const [submit, setSubmit] = React.useState(false);

   const handleOnInput = () => {
      setSubmit(false)
   }

   const handleOnChange = () => {
      setChecked(!checked)
   }

   const handleOnSubmit = values => {
      setSubmit(true)
      if(checked) localStorage.setItem('user', values.email)
   }

   return (  
      <S.Content>
         <Mutation mutation={LOGIN_USER_MUTATION}>
            {(mutation, {loading, error, data}) => {
               if(data) {
                  localStorage.setItem('token', data.loginUser.token);  
                  sessionStorage.setItem('session', true);
                  return <Redirect to='/user/reservations' />
               }
               
               return (
                  <> 
                     <Form
                        mutation={mutation}
                        err={(error && submit) && 'Wrong user or password'}
                        loading={loading}
                        checked={checked}
                        handleOnInput={handleOnInput} 
                        handleOnChange={handleOnChange}
                        handleOnSubmit={handleOnSubmit}   
                     />
                  </>
               )
            }}
         </Mutation>
         <SocialLogin />
         <S.StyledLink to='/auth/signup'>
            Create an account
         </S.StyledLink>
      </S.Content>
   );
}
 
export default LoginAsManager;