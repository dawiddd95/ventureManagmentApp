import React from 'react';
import * as S from './StyledViewStatus';

const ViewStatus = ({status}) => {
   return (  
      <S.Wrapper status_style={status}>
         {status}
      </S.Wrapper>
   );
}
 
export default ViewStatus;