import React from 'react';

import * as S from './StyledVerifyEmail';

const VerifyEmail = ({header, text}) => {
   return (
      <S.Wrapper>
         <S.Box>
            <S.Header>
               {header}
            </S.Header>
            <S.Text>
               {text}
            </S.Text>
         </S.Box>
      </S.Wrapper>
   );
}
 
export default VerifyEmail;