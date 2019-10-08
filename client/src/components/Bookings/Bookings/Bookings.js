import React from 'react';
import * as S from './StyledBookings';

import LoadingSpinner from '../../Animations/LoadingSpinner/LoadingSpinner';

const Bookings = ({bookings}) => {
   // return (  
   //    <div>
   //       <LoadingSpinner small={false} />
   //    </div>
   // );

   return(
      // Cały szary kwadrat
      <S.Wrapper>
         {/* // Cały biały kwadrat */}
         <div>
            <h1>Bookings</h1>
            <div>
               Sekcja buttonów potem pomyśleć jak to porozdzielać
            </div>
            <div>
               Formularz szukania
            </div>
            <div>
               tabela i te filtrowanie {bookings}
            </div> 
         </div>
      </S.Wrapper>
   )
}
 
export default Bookings;