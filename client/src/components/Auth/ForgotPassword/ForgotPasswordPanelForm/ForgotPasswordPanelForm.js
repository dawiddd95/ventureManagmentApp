import React from 'react';
import * as S from './StyledForgotPasswordPanelForm';
import {Formik} from 'formik';
import * as Yup from 'yup';

import LoadingSpinner from '../../../Animations/LoadingSpinner/LoadingSpinner';

const ForgotPasswordForm = ({state, handleOnInput, handleOnSubmit}) => {
   return (  
      <Formik
         initialValues={{
            email: '',
         }}
         validationSchema={Yup.object().shape({
            email: Yup
               .string()
               .email()
               .required('Email is required'),
         })}
         onSubmit={values => handleOnSubmit(values)}
         render={props => (
            <S.Wrapper>
               <S.StyledForm onSubmit={props.handleSubmit}>
                  <S.FieldWrapper>
                     <S.StyledField 
                        name='email' 
                        type='text' 
                        placeholder='Email' 
                        onInput={handleOnInput}
                     />
                     <S.StyledErrorMessage 
                        name='email' 
                        component='div' 
                     />
                  </S.FieldWrapper>
                  <S.Button type='submit' disabled={state.isLoading}>
                     Send password reset email
                     {state.isLoading ? <LoadingSpinner small /> : null}
                  </S.Button>
               </S.StyledForm>
            </S.Wrapper>
         )}
      />
   );
}
 
export default ForgotPasswordForm;