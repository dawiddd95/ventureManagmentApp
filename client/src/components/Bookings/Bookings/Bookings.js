import React from 'react';
import * as S from './StyledBookings';

import LoadingSpinner from '../../Animations/LoadingSpinner/LoadingSpinner';
import SearchFormActionButtons from '../SearchFormActionButtons/SearchFormActionButtons';
import BookingsSearchForm from '../BookingsSearchForm/BookingsSearchForm';
import BookingsTable from '../BookingsTable/BookingsTable';

const Bookings = ({bookings}) => {
   // return (  
   //    <div>
   //       <LoadingSpinner small={false} />
   //    </div>
   // );

   return(
      <S.Wrapper>
         <S.MainContent>
            <S.BreadCrumbs>
               <S.StyledLink>
                  Home
               </S.StyledLink>
               / Bookings
            </S.BreadCrumbs>
            <S.BookingsBox>
               <S.Header>
                  Bookings
               </S.Header>
               <SearchFormActionButtons />
               <BookingsSearchForm />
               <BookingsTable />
            </S.BookingsBox>
         </S.MainContent>
      </S.Wrapper>
   )
}
 
export default Bookings;