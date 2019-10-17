import React from 'react';

import * as S from './StyledForgotPasswordPage';
import ForgotPasswordContent from '../ForgotPasswordContent/ForgotPasswordContent';

const AuthForgotPassword = () => {
   return (  
      <S.Wrapper>
         <S.Content>
            <S.Header>
               Venture Managment App
            </S.Header>
            {/* Zmiana na ForgotPasswordPanel */}
            <ForgotPasswordContent />
            <S.StyledLink to='/auth/login'>
               Cancel
            </S.StyledLink>
         </S.Content>
      </S.Wrapper>
   );
}
 
export default AuthForgotPassword;