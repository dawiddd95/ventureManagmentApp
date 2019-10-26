import React from 'react';
import * as S from './StyledReservationsTable';

import EnhancedTableBody from '../EnhancedTableBody/EnhancedTableBody';

// wszystkie funkcje raczej tutaj ale niekoniecznie jesli one sa w enhancedtablebody
const ReservationsTable = () => {
   return (  
      <S.Wrapper>
         <EnhancedTableBody />
      </S.Wrapper>
   );
}
 
export default ReservationsTable;