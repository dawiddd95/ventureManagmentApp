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
      const {
         id,
         client,
         room,
         status,
         reservationStartDate,
         reservationEndDate,
         reservationStartTime,
         reservationEndTime,
         createdAtStart,
         createdAtEnd
      } = values

      dispatch(actions.filterAction(true))

      let filterResult = []
      let filteringArray =  userReservations

      if(id !== '') {
         filterResult = filteringArray.filter(element => {
            return element.id === id
         })
         filteringArray = filterResult;
      }

      if(client !== '') {
         filterResult = filteringArray.filter(element => {
            return element.client.toLowerCase().includes(client.toLowerCase())
         })
         filteringArray = filterResult;
      }

      if(room !== '') {
         filterResult = filteringArray.filter(element => {
            return element.room.includes(room)
         })
         filteringArray = filterResult;
      }

      if(status !== '') {
         filterResult = filteringArray.filter(element => {
            return element.status.includes(status)
         })
         filteringArray = filterResult;
      }

      if(reservationStartDate !== '') {
         filterResult = filteringArray.filter(element => {
            if((reservationStartDate > reservationEndDate) && (reservationEndDate !== '')) {
               return element.reservationStartDate <= reservationStartDate
            } else {
               return element.reservationStartDate >= reservationStartDate
            }     
         })
         filteringArray = filterResult;
      }

      if(reservationEndDate !== '') {
         filterResult = filteringArray.filter(element => {
            if((reservationEndDate < reservationStartDate) && (reservationStartDate !== '')) {
               return element.reservationStartDate >= reservationEndDate
            } else {    
               return element.reservationStartDate <= reservationEndDate
            }
         })
         filteringArray = filterResult;
      }
      
      if(reservationStartTime !== '') {
         filterResult = filteringArray.filter(element => {
            if((reservationStartTime > reservationEndTime) && (reservationEndTime !== '')) {
               return element.reservationStartTime <= reservationStartTime
            } else {
               return element.reservationStartTime >= reservationStartTime
            }
         })
         filteringArray = filterResult;
      }

      if(reservationEndTime !== '') {
         filterResult = filteringArray.filter(element => {
            if((reservationEndTime < reservationStartTime) && (reservationStartTime !== '')) {
               return element.reservationStartTime >= reservationEndTime
            } else {
               return element.reservationStartTime <= reservationEndTime
            }
         })
         filteringArray = filterResult;
      }

      if(createdAtStart !== '') {
         filterResult = filteringArray.filter(element => {
            return element.createdAt >= createdAtStart
         })
         filteringArray = filterResult;
      }

      if(createdAtEnd !== '') {
         filterResult = filteringArray.filter(element => {
            return element.createdAt <= createdAtEnd
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