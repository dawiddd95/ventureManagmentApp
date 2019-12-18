import React from 'react';
import {Mutation} from 'react-apollo';
import {Redirect} from 'react-router-dom';
import * as S from './StyledAddEditReservation';

import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import Form from './Form/Form';

import {CREATE_RESERVATION_MUTATION} from '../../../graphql/reservation/mutation';
import {UPDATE_RESERVATION_MUTATION} from '../../../graphql/reservation/mutation';
import {USER_RESERVATIONS_QUERY} from '../../../graphql/reservation/query';


const AddEditReservation = ({isEdit, data}) => {
   const reservation = data !== undefined && data.getUserReservation;
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
                           to:  `/user/reservations/${reservation.id}`
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
                              <Form
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