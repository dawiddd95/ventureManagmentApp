import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Checkbox from '@material-ui/core/Checkbox';
import * as S from './StyledManagerLoginPanelForm';

import LoadingSpinner from '../../../Animations/LoadingSpinner/LoadingSpinner';

const ManagerLoginPanelForm = ({err, state, handleOnInput, handleOnChange, handleOnSubmit}) => {
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
         onSubmit={(values, isChecked) => handleOnSubmit(values, isChecked)}     
         render={props => (
            <S.Wrapper>
               {/* handleSubmit is Formik function to send form. only onSubmit have props. syntax */}
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
                              checked={state.isChecked}
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
                  <S.Button type='submit' disabled={state.isLoading}>
                     Log in
                     {state.isLoading ? <LoadingSpinner small /> : null}
                  </S.Button>
               </S.StyledForm>
            </S.Wrapper>
         )} 
      />
   );
}
 
export default ManagerLoginPanelForm;