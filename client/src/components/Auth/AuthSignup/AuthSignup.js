import React from 'react';

import * as S from './StyledAuthSignup';
import SignupUserFormWrapper from '../SignupUserFormWrapper/SignupUserFormWrapper';

const AuthSignup = () => {
   return (  
      <S.Wrapper>
         <S.Content>
            <S.Header>
               Venture Managment App
            </S.Header>
            <SignupUserFormWrapper />
         </S.Content>
      </S.Wrapper>
   );
}
 
export default AuthSignup;