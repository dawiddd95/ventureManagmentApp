import React from 'react';
import { useMutation } from '@apollo/react-hooks';

import { FORGOT_USER_PASSWORD_MUTATION } from '../../graphql/user/mutation';
import { useAuthForm } from '../../hooks/useAuthForm';

import FadeReveal from '../../components/Animations/FadeReveal/FadeReveal';
import ForgotPasswordForm from '../../components/Auth/ForgotPasswordForm/ForgotPasswordForm';


const ForgotPasswordFormContainer = () => {
   const [mutation, { loading, error }] = useMutation(FORGOT_USER_PASSWORD_MUTATION);
   const [isSubmit, handleOnSubmit, handleOnInput] = useAuthForm();

   return (
      <>
         {isSubmit && (
            <FadeReveal
               primaryStyle={true}
               text={error 
                  ? `Sorry, we don't recognize your credentials`
                  : 'Password reset email sent successfully'
               }
               success={error ? false : true}
            />
         )}
         <ForgotPasswordForm
            mutation={mutation}
            loading={loading}
            handleOnInput={handleOnInput} 
            handleOnSubmit={handleOnSubmit}
         /> 
      </>
   )
}
 
export default ForgotPasswordFormContainer;