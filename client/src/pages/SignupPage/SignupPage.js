import React from 'react';

import * as S from './StyledSignupPage';

import Header from '../../components/Header/Header';
import SignupFormContainer from '../../containers/SignupFormContainer/SignupFormContainer';

const SignupPage = () => {
   return (  
      <S.Wrapper>
         <S.Content>
            <Header 
               text='Venture Managment App'
            />
            <SignupFormContainer />
         </S.Content>
      </S.Wrapper>
   );
}
 
export default SignupPage;