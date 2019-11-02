import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

import * as S from './StyledForgotPasswordPanelForm';

import LoadingSpinner from '../../../Animations/LoadingSpinner/LoadingSpinner';

const ForgotPasswordForm = ({mutation, loading, handleOnInput, handleOnSubmit}) => {
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
         onSubmit={values => {
            mutation({variables: values})
            handleOnSubmit()
         }}
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
                  <S.Button type='submit' 
                     disabled={loading}
                  >
                     Send password reset email
                     {loading && <LoadingSpinner small />}
                  </S.Button>
               </S.StyledForm>
            </S.Wrapper>
         )}
      />
   );
}
 
export default ForgotPasswordForm;