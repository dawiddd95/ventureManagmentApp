import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { searchReservations } from '../../../../helpers/searchReservations';

import ReservationsSearchForm from '../../../../components/Reservations/ReservationsSearchForm/ReservationsSearchForm';


const ReservationsSearchFormContainer = () => {
   const dispatch = useDispatch();
   const {userReservations} = useSelector(state => state.fetchedUserReservations.reservations);

   const handleSearchReservations = (values) => {
      searchReservations(values, dispatch, userReservations)
   }

   return (  
      <ReservationsSearchForm 
         handleSearchReservations={handleSearchReservations}
      />
   );
}
 
export default ReservationsSearchFormContainer;