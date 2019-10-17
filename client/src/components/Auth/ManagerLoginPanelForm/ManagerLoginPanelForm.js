import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import * as S from './StyledManagerLoginPanelForm';

import LoadingSpinner from '../../Animations/LoadingSpinner/LoadingSpinner';

const ManagerLoginPanelForm = ({state, err, handleOnInput, handleOnChange}) => {
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
               {/* Customowy Label */}
               <S.StyledFormControlLabel
                  control={
                     <Checkbox
                        checked={state.isChecked}
                        onChange={handleOnChange}
                        id="remember"
                     />
                  }
                  // Stylowanie Labela
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
   );
}
 
export default ManagerLoginPanelForm;