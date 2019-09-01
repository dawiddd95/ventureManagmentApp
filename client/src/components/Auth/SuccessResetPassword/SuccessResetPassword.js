import React from 'react';
import * as S from './StyledSuccessResetPassword';

const SuccessResetPassword = () => {
   return (  
      <S.Wrapper>
         <S.Box>
            <S.Header>
               Password changed
            </S.Header>
            <S.Text>
               You can now sign in with your new password
            </S.Text>
         </S.Box>
      </S.Wrapper>
   );
}
 
export default SuccessResetPassword;