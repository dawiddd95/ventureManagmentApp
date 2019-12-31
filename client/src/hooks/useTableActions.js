import React from 'react';
import {useDispatch} from 'react-redux';


export const useTableActions = (actions) => {
   const [reload, setReload] = React.useState(false);
   const dispatch = useDispatch(); 

   const handleReloadData = () => {
      dispatch(actions.resetSelectedAction([]))
      dispatch(actions.toggleSelectAllAction(false))
      dispatch(actions.currentPageAction(1))
      setReload(true)
      setTimeout(() => setReload(false), 3000)
   }

   const handleSortOrder = (order) => {
      // Tutaj też zmaineić Reservations na Elements
      if(order === 'asc') dispatch(actions.sortReservationsOrderAction('desc'))
      else dispatch(actions.sortReservationsOrderAction('asc'))
   }

   const handleSortBy = (event) => {
      // Tu dac sortElementsByAction
      dispatch(actions.sortReservationsByAction(event.target.value))
   }

   return [reload, handleReloadData, handleSortOrder, handleSortBy]
}