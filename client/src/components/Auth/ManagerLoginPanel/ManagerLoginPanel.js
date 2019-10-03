import React from 'react';
import * as S from './StyledManagerLoginPanel';

import ManagerLoginPanelContent from '../ManagerLoginPanelContent/ManagerLoginPanelContent';
import SocialLogin from '../SocialLogin/SocialLogin';

const ManagerLoginPanel = () => {
   return (  
      <S.Content>
         <ManagerLoginPanelContent />
         <SocialLogin />
         <S.StyledLink to='/auth/signup'>
            Create an account
         </S.StyledLink>
      </S.Content>
   );
}
 
export default ManagerLoginPanel;