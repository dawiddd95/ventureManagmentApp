import React from 'react';
import {Mutation} from 'react-apollo';
import {Redirect} from 'react-router-dom';
import * as S from './StyledAddEditReservation';

import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import AddEditReservationForm from '../AddEditReservationForm/AddEditReservationForm';

import {CREATE_RESERVATION_MUTATION} from '../../../graphql/reservation/mutation';
import {UPDATE_RESERVATION_MUTATION} from '../../../graphql/reservation/mutation';
import {USER_RESERVATIONS_QUERY} from '../../../graphql/reservation/query';

const AddEditReservation = ({isEdit, reservation}) => {
   return (  
      <S.Wrapper>
         <S.Section>
            <S.MainContent>
               <Breadcrumbs 
                  links={[
                     {name: 'Home', to: '/user/reservations'},
                     {name: '/ Reservations', to: '/user/reservations'},
                     isEdit && 
                        {
                           name: `/ ${reservation.id}`, 
                           to: {
                              pathname: `/user/reservations/${reservation.id}`,
                              state: {reservation: reservation}
                           }
                        }
                     ]}
                  navElement={!isEdit ? '/ New Reservation' : '/ Edit Reservation'}
               />
               <S.BookingsBox>
                  <S.Header>
                     {!isEdit ? 'New Reservation' : 'Edit Reservation'}
                  </S.Header>
                  <Mutation 
                     mutation={!isEdit ? CREATE_RESERVATION_MUTATION : UPDATE_RESERVATION_MUTATION} 
                     refetchQueries={[{query: USER_RESERVATIONS_QUERY}]}
                  >
                     {(mutation, {loading, error, data}) => {
                        if(data) {
                           return <Redirect to='/user/reservations'/>
                        }
                        
                        return (
                           <>
                              <AddEditReservationForm
                                 mutation={mutation}
                                 isEdit={isEdit}
                                 reservation={reservation}
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
 
export default AddEditReservation;