import React from 'react';
import * as S from './StyledAddNewBooking';

import AsideNavigation from '../../AsideMenu/AsideNavigation/AsideNavigation';
import AddNewBookingForm from '../AddNewBookingForm/AddNewBookingForm';

const AddNewBooking = ({visible}) => {
   return (  
      <S.Wrapper>
         {visible ? <AsideNavigation /> : null}
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
               <AddNewBookingForm />
            </S.BookingsBox>
         </S.MainContent>
      </S.Wrapper>
   );
}
 
export default AddNewBooking;