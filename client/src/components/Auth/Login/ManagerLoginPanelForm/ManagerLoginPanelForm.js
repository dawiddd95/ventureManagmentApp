import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Checkbox from '@material-ui/core/Checkbox';
import * as S from './StyledManagerLoginPanelForm';

import LoadingSpinner from '../../../Animations/LoadingSpinner/LoadingSpinner';

const ManagerLoginPanelForm = ({
   mutation,
   err,
   loading,
   checked,
   handleOnInput,
   handleOnChange,
   handleOnSubmit,
}) => {
   return (  
      <Formik
         initialValues={{
            email: localStorage.getItem('user') || '',
            password: ''
         }}
         validationSchema={Yup.object().shape({
            email: Yup
               .string()
               .email()
               .required('Email is required'),
            password: Yup
               .string()
               .required('Password is required'),
         })}
         onSubmit={values => {
            mutation({variables: values})
            handleOnSubmit(values)
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
                        component='p' 
                     />
                  </S.FieldWrapper>
                  <S.FieldWrapper>
                     <S.StyledField 
                        name='password' 
                        type='password' 
                        placeholder='Password' 
                        onInput={handleOnInput}
                     />
                     <S.StyledErrorMessage 
                        name='password' 
                        component='p' 
                     />
                     <S.Error>
                        {err}
                     </S.Error>
                  </S.FieldWrapper>
                  <S.CheckboxWrapper>
                     {/* Custom Material UI Label */}
                     <S.StyledFormControlLabel
                        control={
                           <Checkbox
                              checked={checked}
                              onChange={handleOnChange}
                              id="remember"
                           />
                        }
                        // Styling Material UI label
                        label={<S.Label htmlFor='remember'>Remember me</S.Label>}
                     />
                     <S.StyledLink to='/auth/forgot-password'>
                        Forgot password
                     </S.StyledLink>
                  </S.CheckboxWrapper>
                  <S.Button type='submit' disabled={loading}>
                     Log in
                     {loading && <LoadingSpinner small />}
                  </S.Button>
               </S.StyledForm>
            </S.Wrapper>
         )} 
      />
   );
}
 
export default ManagerLoginPanelForm;