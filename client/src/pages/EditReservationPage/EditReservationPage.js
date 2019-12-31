import React from 'react'

import * as S from './StyledEditReservationPage'

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import EditReservationContainer from '../../containers/EditReservationContainer/EditReservationContainer';


const EditReservationPage = ({reservation}) => {
   return (  
      <S.Wrapper>
         <S.Section>
            <S.MainContent>
               <Breadcrumbs 
                  links={[
                     {name: 'Home', to: '/user/reservations'},
                     {name: '/ Reservations', to: '/user/reservations'},
                     {name: `/ ${reservation.id}`, to:  `/user/reservations/${reservation.id}`}
                  ]}
                  navElement={'/ Edit Reservation'}
               />
               <S.BookingsBox>
                  <S.Header>
                     Edit Reservation
                  </S.Header>
                  <EditReservationContainer reservation={reservation} />
               </S.BookingsBox>
            </S.MainContent>
         </S.Section>
      </S.Wrapper>
   );
}
 
export default EditReservationPage;