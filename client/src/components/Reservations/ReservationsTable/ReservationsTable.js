import React from 'react';
import * as S from './StyledReservationsTable';

import EnhancedTableBody from '../EnhancedTableBody/EnhancedTableBody';

const ReservationsTable = () => {
   return (  
      <S.Wrapper>
         <EnhancedTableBody />
      </S.Wrapper>
   );
}
 
export default ReservationsTable;