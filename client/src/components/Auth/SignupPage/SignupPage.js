import React from 'react';

import * as S from './StyledSignupPage';
import SignupContent from '../SignupContent/SignupContent';

const SignupPage = () => {
   return (  
      <S.Wrapper>
         <S.Content>
            <S.Header>
               Venture Managment App
            </S.Header>
            {/* Zmiana na SignupPanel */}
            <SignupContent />
         </S.Content>
      </S.Wrapper>
   );
}
 
export default SignupPage;