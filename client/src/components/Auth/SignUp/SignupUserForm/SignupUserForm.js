import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import * as S from './StyledSignupUserForm';

import LoadingSpinner from '../../../Animations/LoadingSpinner/LoadingSpinner';

const SignupUserForm = ({mutation, loading, handleOnInput, handleOnSubmit}) => {
   return (  
      <Formik
         initialValues={{
            name: '',
            surname: '',
            email: '',
            password: '',
            confirmPassword: '',
            active: false
         }}
         validationSchema={Yup.object().shape({
            name: Yup
               .string()
               .min(3, 'Minimum 3 characters')
               .required('Name is required'),
            surname: Yup
               .string()
               .min(3, 'Minimum 3 characters')
               .required('Surname is required'),
            email: Yup
               .string()
               .email('Email must be a valid email')
               .required('Email is required'),
            password: Yup
               .string()
               .min(8, 'Minimum 8 characters')
               .matches(/^(?=.*[A-Z])/, 'Must contain at least one uppercase character')
               .matches(/^(?=.*[0-9])/, 'Must contain at least one numeric character')
               .matches(/^(?=.*[!@#$%^&*()])/, 'Must contain at least one special character')
               .required('Password is required'),
            confirmPassword: Yup
               .string()
               .required('Password must match')
               .oneOf([Yup.ref('password'), null], 'Passwords must match'),
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
                        name='name' 
                        type='text' 
                        placeholder='Name' 
                     />
                     <S.StyledErrorMessage 
                        name='name' 
                        component='p' 
                     />
                  </S.FieldWrapper>
                  <S.FieldWrapper>
                     <S.StyledField 
                        name='surname' 
                        type='text' 
                        placeholder='Surname' 
                     />
                     <S.StyledErrorMessage 
                        name='surname' 
                        component='p' 
                     />
                  </S.FieldWrapper>
                  <S.FieldWrapper>
                     <S.StyledField 
                        onInput={handleOnInput}
                        name='email' 
                        type='text' 
                        placeholder='Email' 
                     />
                     <S.StyledErrorMessage  
                        name='email' 
                        component='p' 
                     />
                  </S.FieldWrapper>
                  <S.FieldWrapper>
                     <S.StyledField 
                        name='password' 
                        type='password' 
                        placeholder='Password' 
                     />
                     <S.StyledErrorMessage 
                        name='password' 
                        component='p' 
                     />
                  </S.FieldWrapper>
                  <S.FieldWrapper>
                     <S.StyledField 
                        name='confirmPassword' 
                        type='password' 
                        placeholder='Confirm password' 
                     />
                     <S.StyledErrorMessage 
                        name='confirmPassword' 
                        component='p' 
                     />
                  </S.FieldWrapper>        
                  <S.Button type='submit' disabled={loading}>
                     Sign up
                     {loading && <LoadingSpinner small />}
                  </S.Button>
                  <S.LinkWrapper>
                     <S.StyledLink to='/auth/login'>
                        Already have an account? Log in.
                     </S.StyledLink>
                  </S.LinkWrapper>
               </S.StyledForm>
            </S.Wrapper>
         )}
      />
   );
}
 
export default SignupUserForm;