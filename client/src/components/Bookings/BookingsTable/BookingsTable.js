import React from 'react';
import * as S from './StyledBookingsTable';

import EnhancedTableBody from '../EnhancedTableBody/EnhancedTableBody';

// wszystkie funkcje raczej tutaj ale niekoniecznie jesli one sa w enhancedtablebody
const BookingsTable = () => {
   return (  
      <S.Wrapper>
         <EnhancedTableBody />
      </S.Wrapper>
   );
}
 
export default BookingsTable;