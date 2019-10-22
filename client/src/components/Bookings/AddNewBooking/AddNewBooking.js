import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import * as S from './StyledAddNewBooking';

import AddNewBookingForm from '../AddNewBookingForm/AddNewBookingForm';

const AddNewBooking = () => {
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
                  <S.StyledLink to='/user/bookings'>
                     Home
                  </S.StyledLink>
                  <S.StyledLink to='/user/bookings'>
                  / Bookings
                  </S.StyledLink>
                  / New Booking
               </S.BreadCrumbs>
               <S.BookingsBox>
                  <S.Header>
                     New Booking
                  </S.Header>
                  {success 
                     ?  <Redirect to='/user/bookings'/>
                     :  <AddNewBookingForm 
                           handleOnSubmit={handleOnSubmit}
                        />
                  }
               </S.BookingsBox>
            </S.MainContent>
         </S.Section>
      </S.Wrapper>
   );
}
 
export default AddNewBooking;