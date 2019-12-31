import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { searchReservations } from '../../helpers/searchReservations';

import ReservationsSearchForm from '../../components/Reservations/ReservationsSearchForm/ReservationsSearchForm';


const ReservationsSearchFormContainer = () => {
   const dispatch = useDispatch();
   const {reservations} = useSelector(state => state.fetchedUserReservations);

   const handleSearchReservations = (values) => {
      searchReservations(values, dispatch, reservations)
   }

   return (  
      <ReservationsSearchForm 
         handleSearchReservations={handleSearchReservations}
      />
   );
}
 
export default ReservationsSearchFormContainer;