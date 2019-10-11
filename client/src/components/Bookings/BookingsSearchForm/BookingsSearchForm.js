import React from 'react';
import * as S from './StyledBookingsSearchForm';

const BookingsSearchForm = () => {
   return ( 
      <S.Wrapper>
         <S.StyledForm>
            <S.InputsWrapper>
               {/* <S.StyledField 
                  name='id' 
                  type='text' 
                  placeholder='ID' 
                  onInput={handleOnInput}
               />
               <S.StyledField 
                  name='id' 
                  type='text' 
                  placeholder='ID' 
                  onInput={handleOnInput}
               /> */}
            </S.InputsWrapper>
         </S.StyledForm>
      </S.Wrapper>
   );
}
 
export default BookingsSearchForm;


{/* <S.Wrapper>
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
      </S.Wrapper> */}