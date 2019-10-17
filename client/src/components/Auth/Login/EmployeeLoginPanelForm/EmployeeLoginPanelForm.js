import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import * as S from './StyledEmployeeLoginPanelForm';

import LoadingSpinner from '../../../Animations/LoadingSpinner/LoadingSpinner';

const EmployeeLoginPanelForm = ({err, state, handleOnInput, handleOnSubmit}) => {
   return (  
      <Formik
         initialValues={{
            id: '',
            password: ''
         }}
         validationSchema={Yup.object().shape({
            id: Yup
               .string()
               .required('ID is required'),
            password: Yup
               .string()
               .required('Password is required'),
         })}
         onSubmit={values => handleOnSubmit(values)}     
         render={props => (
            <S.Wrapper>
               <S.StyledForm onSubmit={props.handleSubmit}>
                  <S.FieldWrapper>
                     <S.StyledField 
                        name='id' 
                        type='text' 
                        placeholder='ID' 
                        onInput={handleOnInput}
                     />
                     <S.StyledErrorMessage 
                        name='id' 
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
 
export default EmployeeLoginPanelForm;