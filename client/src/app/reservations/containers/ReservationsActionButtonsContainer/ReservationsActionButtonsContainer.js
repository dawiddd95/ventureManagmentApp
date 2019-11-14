import React from 'react';
import {useSelector} from 'react-redux';

import ReservationsActionButtons from '../../../../components/Reservations/ReservationsActionButtons/ReservationsActionButtons';

const ReservationsActionButtonsContainer = () => {
   const {userReservations} = useSelector(state => state.fetchedUserReservations.reservations);
   const {searchingReservations, filter} = useSelector(state => state.fetchedUserReservations);

   return (  
      <ReservationsActionButtons reservations={filter ? searchingReservations : userReservations} />
   );
}
 
export default ReservationsActionButtonsContainer;