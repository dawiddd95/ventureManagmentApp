import React from 'react';
import * as S from './StyledForgotPasswordForm';

import LoadingSpinner from '../../Animations/LoadingSpinner/LoadingSpinner';

const ForgotPasswordForm = ({state, handleOnInput}) => {
   return (  
      <S.Wrapper>
         <S.StyledForm>
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
   );
}
 
export default ForgotPasswordForm;