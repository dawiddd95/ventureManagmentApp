import React from 'react';

import * as S from './StyledSignupPage';
import SignupPanel from '../SignupPanel/SignupPanel';

const SignupPage = () => {
   return (  
      <S.Wrapper>
         <S.Content>
            <S.Header>
               Venture Managment App
            </S.Header>
            <SignupPanel />
         </S.Content>
      </S.Wrapper>
   );
}
 
export default SignupPage;