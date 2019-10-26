import React from 'react';
import * as S from './StyledReservations';

import LoadingSpinner from '../../Animations/LoadingSpinner/LoadingSpinner';
import SearchFormActionButtons from '../SearchFormActionButtons/SearchFormActionButtons';
import ReservationsSearchForm from '../ReservationsSearchForm/ReservationsSearchForm';
import ReservationsTable from '../ReservationsTable/ReservationsTable';

const Reservations = ({bookings}) => {
   // return (  
   //    <div>
   //       <LoadingSpinner small={false} />
   //    </div>
   // );

   return(
      <S.Wrapper>
         <S.MainContent>
            <S.BreadCrumbs>
               <S.StyledLink to='/user/reservations'>
                  Home
               </S.StyledLink>
               / Reservations
            </S.BreadCrumbs>
            <S.BookingsBox>
               <S.Header>
                  Reservations
               </S.Header>
               <SearchFormActionButtons />
               <ReservationsSearchForm />
               <ReservationsTable />
            </S.BookingsBox>
         </S.MainContent>
      </S.Wrapper>
   )
}
 
export default Reservations;