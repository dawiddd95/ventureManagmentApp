import React from 'react';
import * as S from './StyledBookings';

import LoadingSpinner from '../../Animations/LoadingSpinner/LoadingSpinner';
import AsideContent from '../../AsideMenu/AsideContent/AsideContent';

const Bookings = ({bookings, visible}) => {
   
   // return (  
   //    <div>
   //       <LoadingSpinner small={false} />
   //    </div>
   // );

   const styleForm = {
      'width': '95%',
      'height': '100px',
      'marginLeft': '10px',
      'border': '1px solid red'
   }

   const styleInput = {
      'width': '100%',
      'height': '40px',
   }

   return(
      <S.Wrapper>
         {visible ? <AsideContent /> : null}
         <div style={{'width': '100%', 'marginTop': '100px'}}>
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
            <form style={styleForm}>
               <input style={styleInput} type="text" placeholder='name'/>
            </form>
         </div>
         
      </S.Wrapper>
   )
}
 
export default Bookings;