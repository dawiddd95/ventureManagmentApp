import React from 'react';
import * as S from './StyledReservationsTable';

import EnhancedTableBodyContainer from '../../../app/reservations/containers/EnhancedTableBodyContainer/EnhancedTableBodyContainer';

const ReservationsTable = () => {
   return (  
      <S.Wrapper>
         <EnhancedTableBodyContainer />
      </S.Wrapper>
   );
}
 
export default ReservationsTable;