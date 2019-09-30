import React from 'react';

import * as S from './StyledAuthSignup';
import AuthSignupContent from '../AuthSignupContent/AuthSignupContent';

const AuthSignup = () => {
   return (  
      <S.Wrapper>
         <S.Content>
            <S.Header>
               Venture Managment App
            </S.Header>
            <AuthSignupContent />
         </S.Content>
      </S.Wrapper>
   );
}
 
export default AuthSignup;