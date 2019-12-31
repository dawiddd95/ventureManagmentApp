import React from 'react';

import * as S from './StyledLoginPage';

import Header from '../../components/Header/Header';
import LoginContainer from '../../containers/LoginContainer/LoginContainer';

const LoginPage = () => {
   return (  
      <S.Wrapper>
         <S.Content>
            <Header text='Venture Managment App' />
            <LoginContainer />
         </S.Content>
      </S.Wrapper>
   );
}
 
export default LoginPage;
