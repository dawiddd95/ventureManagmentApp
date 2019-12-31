import React from 'react';

import * as S from './StyledForgotPasswordPage';

import Header from '../../components/Header/Header';
import ForgotPasswordFormContainer from '../../containers/ForgotPasswordFormContainer/ForgotPasswordFormContainer';

const ForgotPasswordPage = () => {
   return (  
      <S.Wrapper>
         <S.Content>
            <Header
               text='Venture Managment App'
            />
            <ForgotPasswordFormContainer />
            <S.StyledLink to='/auth/login'>
               Cancel
            </S.StyledLink>
         </S.Content>
      </S.Wrapper>
   );
}
 
export default ForgotPasswordPage;
