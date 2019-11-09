import React from 'react';
import * as S from './StyledReservations';

import SearchFormActionButtons from '../SearchFormActionButtons/SearchFormActionButtons';
import ReservationsSearchForm from '../ReservationsSearchForm/ReservationsSearchForm';
import ReservationsTableContainer from '../../../app/reservations/containers/ReservationsTableContainer/ReservationsTableContainer';

const Reservations = () => {
   return(
      <S.Wrapper>
         <S.MainContent>
            <S.BreadCrumbs>
               <S.StyledLink to='/user/reservations'>
                  Home
               </S.StyledLink>
               / Reservations
            </S.BreadCrumbs>
            <S.ReservationsBox>
               <S.Header>
                  Reservations
               </S.Header>
               <SearchFormActionButtons />
               <ReservationsSearchForm />  
               <ReservationsTableContainer />
            </S.ReservationsBox>
         </S.MainContent>
      </S.Wrapper>
   )
}
 
export default Reservations;