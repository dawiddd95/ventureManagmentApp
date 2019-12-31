import React from 'react';
import { useMutation } from '@apollo/react-hooks';

import { CREATE_USER_MUTATION } from '../../graphql/user/mutation';
import { useAuthForm } from '../../hooks/useAuthForm';

import FadeReveal from '../../components/Animations/FadeReveal/FadeReveal';
import SignupSuccess from '../../components/Auth/Signup/SignupSuccess/SignupSuccess';
import SignupForm from '../../components/Auth/Signup/SignupForm/SignupForm';


const SignupFormContainer = () => {
   const [mutation, { loading, error, data }] = useMutation(CREATE_USER_MUTATION);
   const [isSubmit, handleOnSubmit, handleOnInput] = useAuthForm();
   
   if(data && isSubmit) {
      return <SignupSuccess email={data.createUser.email} /> 
   }

   return (
      <>
         {(error && isSubmit) && (
            <FadeReveal
               primaryStyle={true}
               text='Cannot sign up to application :( Please try again later.'
               success={false} 
            />
         )}
         <SignupForm
            mutation={mutation}
            error={(error && isSubmit) && 'Email is already in usage'}
            loading={loading}
            handleOnInput={handleOnInput} 
            handleOnSubmit={handleOnSubmit}
         /> 
      </>
   )
}
 
export default SignupFormContainer;