import React from 'react';
import * as S from './StyledManagerLoginPanel';

import LoginManagerFormWrapper from '../LoginManagerFormWrapper/LoginManagerFormWrapper';
import AuthSocialLogin from '../AuthSocialLogin/AuthSocialLogin';

const ManagerLoginPanel = () => {
   return (  
      <S.Content>
         <LoginManagerFormWrapper />
         <AuthSocialLogin />
         <S.StyledLink to='/auth/signup'>
            Create an account
         </S.StyledLink>
      </S.Content>
   );
}
 
export default ManagerLoginPanel;