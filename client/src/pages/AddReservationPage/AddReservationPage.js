import React from 'react'

import * as S from './StyledAddReservationPage'

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import AddReservationContainer from '../../containers/AddReservationContainer/AddReservationContainer';


const AddReservationPage = () => {
   return (  
      <S.Wrapper>
         <S.Section>
            <S.MainContent>
               <Breadcrumbs
                  links={[
                     {name: 'Home', to: '/user/reservations'},
                     {name: '/ Reservations', to: '/user/reservations'},
                  ]}
                  navElement='/ New Reservation'
               />
               <S.BookingsBox>
                  <S.Header>
                     New Reservation
                  </S.Header>
                  <AddReservationContainer />
               </S.BookingsBox>
            </S.MainContent>
         </S.Section>
      </S.Wrapper>
   );
}
 
export default AddReservationPage;