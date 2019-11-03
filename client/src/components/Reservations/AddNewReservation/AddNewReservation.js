import React from 'react';
import {Mutation} from 'react-apollo';
import {Redirect} from 'react-router-dom';
import * as S from './StyledAddNewReservation';

import AddNewReservationForm from '../AddNewReservationForm/AddNewReservationForm';

import {CREATE_RESERVATION_MUTATION} from '../../../graphql/reservation/mutation';

const AddNewReservation = () => {
   // Jesli to konieczne uzyc hooka do odczytania danych o zalogowanym i id przekazac
   // Pobrac stan reduxa do NewReservationContainer stamtad rpzekazac go do componentu pomoce to: AppContainer i ReservationsContainer
   // Zobaczyc jak on to robil z łódkami
   return (  
      <S.Wrapper>
         <S.Section>
            <S.MainContent>
               <S.BreadCrumbs>
                  <S.StyledLink to='/user/reservations'>
                     Home
                  </S.StyledLink>
                  <S.StyledLink to='/user/reservations'>
                  / Reservations
                  </S.StyledLink>
                  / New Reservation
               </S.BreadCrumbs>
               <S.BookingsBox>
                  <S.Header>
                     New Reservation
                  </S.Header>
                  <Mutation mutation={CREATE_RESERVATION_MUTATION}>
                     {(mutation, {loading, error, data}) => {
                        if(data) {
                           return <Redirect to='/user/reservations'/>
                        }
                        return (
                           <>
                              <AddNewReservationForm
                                 mutation={mutation}
                              />
                           </>
                        )
                     }}
                  </Mutation>
               </S.BookingsBox>
            </S.MainContent>
         </S.Section>
      </S.Wrapper>
   );
}
 
export default AddNewReservation;