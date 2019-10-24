import React from 'react';
import * as S from './StyledForgotPasswordPanelForm';
import {Formik} from 'formik';
import * as Yup from 'yup';

import LoadingSpinner from '../../../Animations/LoadingSpinner/LoadingSpinner';

// const ForgotPasswordPanelForm = () => {
//    return (
//       <div>
         
//       </div>
//    )
// }

// export default ForgotPasswordPanelForm


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
         // Przy on submit już nie jest wykonywana funckja np: 
         // onSubmit={values => handleOnSubmit(values)}
         // Jest już wykonywana mutacja tak jak poniżej
         // Jednakże można dodać wykonanie kolejnej metody np: handleOnSubmit() od zmiany stanu modalu
         onSubmit={values => {
            mutation({
               variables: values,
            })
            handleOnSubmit()
         }}
         render={props => (
            <S.Wrapper>
               {/* onSubmit pozostaje bez zmian */}
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
                     {loading ? <LoadingSpinner small /> : null}
                  </S.Button>
               </S.StyledForm>
            </S.Wrapper>
         )}
      />
   );
}
 
export default ForgotPasswordForm;