import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import * as S from './StyledAddNewReservation';

import AddNewReservationForm from '../AddNewReservationForm/AddNewReservationForm';

const AddNewReservation = () => {
   const [success, setSuccess] = React.useState(false);

   const handleOnSubmit = values => {
      axios.post('/api/user/bookings/new', values)
      .then(res => {
         const {success} = res.data;
         setSuccess(success);
      })
      .catch(err => {
         console.log(err)
      })
   }

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
                  {success 
                     ?  <Redirect to='/user/reservations'/>
                     :  <AddNewReservationForm 
                           handleOnSubmit={handleOnSubmit}
                        />
                  }
               </S.BookingsBox>
            </S.MainContent>
         </S.Section>
      </S.Wrapper>
   );
}
 
export default AddNewReservation;