import React from 'react';
import * as S from './StyledResetPasswordPage';

import ResetPasswordContainer from '../../containers/ResetPasswordContainer/ResetPasswordContainer';

const ResetPasswordPage = ({location}) => {
   return (  
      <S.Wrapper>
         <ResetPasswordContainer location={location.search} />
      </S.Wrapper>
   );
}
 
export default ResetPasswordPage;
