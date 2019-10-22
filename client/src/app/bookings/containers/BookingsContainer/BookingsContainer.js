import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as S from './StyledBookingsContainer';

import Bookings from '../../../../components/Bookings/Bookings/Bookings';


const BookingsContainer = () => {
   const dispatch = useDispatch();

   // pobranie ze storea id zalogowanego usera
   const {id} = useSelector(state => state.fetchedLoggedUser.user);
   
   // pobierze wszystkie bookingi gdzie userId to id naszego usera
   const userBookings = useSelector(state => state.fetchUserBookings);

   // Tutaj na useEffect() pobierze wszystkie 
   // useEffect(() => {
   //    // dispatch(thunkActions.fetchBookingsAction())
   //    dispatch(thunkActions.fetchLoggedUserAction())
   // }, [])

   // //przekazujemy te dane do komponentu <Bookings />

   return (  
      <S.Wrapper>
         <Bookings 
            bookings='tutaj obiekt bookingów z bazy danych'  
         />
      </S.Wrapper>
   );
}
 
export default BookingsContainer;