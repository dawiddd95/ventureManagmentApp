import React from 'react';
import * as S from './StyledReservations';

import ReservationsActionButtonsContainer from '../../../app/reservations/containers/ReservationsActionButtonsContainer/ReservationsActionButtonsContainer';
import ReservationsSearchFormContainer from '../../../app/reservations/containers/ReservationsSearchFormContainer/ReservationsSearchFormContainer';
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
               <ReservationsActionButtonsContainer />
               <ReservationsSearchFormContainer />  
               <ReservationsTableContainer />
            </S.ReservationsBox>
         </S.MainContent>
      </S.Wrapper>
   )
}
 
export default Reservations;