import React from 'react';
import * as S from './StyledAddNewBooking';

import AddNewBookingForm from '../AddNewBookingForm/AddNewBookingForm';

const AddNewBooking = () => {
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
                  {/* <AddNewBookingForm /> */}
                  <AddNewBookingForm />
               </S.BookingsBox>
            </S.MainContent>
         </S.Section>
      </S.Wrapper>
   );
}
 
export default AddNewBooking;