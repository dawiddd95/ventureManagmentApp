import React from 'react';
import * as S from './StyledLoginAsManager';

import ManagerLoginPanel from '../ManagerLoginPanel/ManagerLoginPanel';
import SocialLogin from '../SocialLogin/SocialLogin';

const LoginAsManager = () => {
   return (  
      <S.Content>
         <ManagerLoginPanel />
         <SocialLogin />
         <S.StyledLink to='/auth/signup'>
            Create an account
         </S.StyledLink>
      </S.Content>
   );
}
 
export default LoginAsManager;