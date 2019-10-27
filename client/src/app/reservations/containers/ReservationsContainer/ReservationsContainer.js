import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as S from './StyledReservationsContainer';

import Reservations from '../../../../components/Reservations/Reservations/Reservations';


const ReservationsContainer = () => {
   const dispatch = useDispatch();
   
   // pobierze wszystkie rezerwacje gdzie userId to id naszego usera
   // const userReservations = useSelector(state => state.fetchUserReservations);

   // Tutaj na useEffect() pobierze wszystkie 
   // useEffect(() => {
   //    // dispatch(thunkActions.fetchBookingsAction())
   //    dispatch(thunkActions.fetchLoggedUserAction())
   // }, [])

   // //przekazujemy te dane do komponentu <Bookings />

   return (  
      <S.Wrapper>
         <Reservations
            bookings='tutaj obiekt bookingów z bazy danych'  
         />
      </S.Wrapper>
   );
}
 
export default ReservationsContainer;