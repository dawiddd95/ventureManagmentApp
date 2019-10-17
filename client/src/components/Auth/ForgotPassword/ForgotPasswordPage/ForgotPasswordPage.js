import React from 'react';

import * as S from './StyledForgotPasswordPage';
import ForgotPasswordPanel from '../ForgotPasswordPanel/ForgotPasswordPanel';

const AuthForgotPassword = () => {
   return (  
      <S.Wrapper>
         <S.Content>
            <S.Header>
               Venture Managment App
            </S.Header>
            <ForgotPasswordPanel />
            <S.StyledLink to='/auth/login'>
               Cancel
            </S.StyledLink>
         </S.Content>
      </S.Wrapper>
   );
}
 
export default AuthForgotPassword;