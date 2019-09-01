import React from 'react';

import * as S from './StyledAuthForgotPassword';
import ForgotPasswordFormWrapper from '../ForgotPasswordFormWrapper/ForgotPasswordFormWrapper';

const AuthForgotPassword = () => {
   return (  
      <S.Wrapper>
         <S.Content>
            <S.Header>
               Venture Managment App
            </S.Header>
            <ForgotPasswordFormWrapper />
            <S.StyledLink to='/auth/login'>
               Cancel
            </S.StyledLink>
         </S.Content>
      </S.Wrapper>
   );
}
 
export default AuthForgotPassword;