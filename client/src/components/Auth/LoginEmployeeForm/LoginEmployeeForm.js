import React from 'react';
import * as S from './StyledLoginEmployeeForm';

import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

const LoginEmployeeForm = ({err, state, handleOnInput}) => {
   return (  
      <S.Wrapper>
         <S.StyledForm>
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
   );
}
 
export default LoginEmployeeForm;