import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import actions from '../../duck/actions';

import ReservationsSearchForm from '../../../../components/Reservations/ReservationsSearchForm/ReservationsSearchForm';

const ReservationsSearchFormContainer = () => {
   const dispatch = useDispatch();
   const {userReservations} = useSelector(state => state.fetchedUserReservations.reservations);
   const {filter} = useSelector(state => state.fetchedUserReservations);

   // TERAZ TU NAPISAC LOGIKĘ FILTROWANIA
   // I dostosowac sellectAll i usuwanie
   const handleSearchReservations = (values) => {
      dispatch(actions.filterAction(true))

      let filterResult = [];
      let filteringArray =  userReservations

      if(values.id !== '') {
         filterResult = filteringArray.filter(element => {
            return element.id === values.id
         })
         filteringArray = filterResult;
      }

      if(values.client !== '') {
         filterResult = filteringArray.filter(element => {
            return element.client.toLowerCase().includes(values.client.toLowerCase())
         })
         filteringArray = filterResult;
      }

      if(values.room !== '') {
         filterResult = filteringArray.filter(element => {
            return element.room.includes(values.room)
         })
         filteringArray = filterResult;
      }

      if(values.status !== '') {
         filterResult = filteringArray.filter(element => {
            return element.status.includes(values.status)
         })
         filteringArray = filterResult;
      }

      if(values.reservationStartDate !== '') {
         filterResult = filteringArray.filter(element => {
            return element.reservationStartDate >= values.reservationStartDate
         })
         filteringArray = filterResult;
      }

      if(values.reservationEndDate !== '') {
         filterResult = filteringArray.filter(element => {
            return element.reservationStartDate <= values.reservationEndDate
         })
         filteringArray = filterResult;
      }
      
      if(values.reservationStartTime !== '') {
         filterResult = filteringArray.filter(element => {
            return element.reservationStartTime >= values.reservationStartTime
         })
         filteringArray = filterResult;
      }

      if(values.reservationEndTime !== '') {
         filterResult = filteringArray.filter(element => {
            return element.reservationStartTime <= values.reservationEndTime
         })
         filteringArray = filterResult;
      }

      if(values.createdAtStart !== '') {
         filterResult = filteringArray.filter(element => {
            return element.createdAt >= values.createdAtStart
         })
         filteringArray = filterResult;
      }

      if(values.createdAtEnd !== '') {
         filterResult = filteringArray.filter(element => {
            return element.createdAt <= values.createdAtEnd
         })
         filteringArray = filterResult;
      }

      dispatch(actions.searchUserReservationsAction(filterResult))
   }

   return (  
      <ReservationsSearchForm 
         handleSearchReservations={handleSearchReservations}
      />
   );
}
 
export default ReservationsSearchFormContainer;