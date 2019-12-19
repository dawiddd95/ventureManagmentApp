import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import actions from '../../duck/actions';
import { tableSortByData } from '../../../../assets/data/selectData';

import TableActions from '../../../../components/Table/TableActions/TableActions';


const TableActionsContainer = () => {
   const [reload, setReload] = React.useState(false);
   const dispatch = useDispatch(); 
   const {sortBy, sortOrder} = useSelector(state => state.fetchedUserReservations)

   const handleReloadReservations = () => {
      dispatch(actions.filterAction(false))
      dispatch(actions.searchUserReservationsAction([]))
      dispatch(actions.resetSelectedAction([]))
      dispatch(actions.toggleSelectAllAction(false))
      dispatch(actions.currentPageAction(1))
      setReload(true)
      setTimeout(() => setReload(false), 3000)
   }

   const handleSortBy = (event) => {
      dispatch(actions.sortReservationsByAction(event.target.value))
   }

   const handleSortOrder = (order) => {
      if(order === 'asc') dispatch(actions.sortReservationsOrderAction('desc'))
      else dispatch(actions.sortReservationsOrderAction('asc'))
   }

   return (  
      <>
         <TableActions 
            selectOptions={tableSortByData}
            textButton='Reload Reservations'
            sortBy={sortBy}
            sortOrder={sortOrder}
            reload={reload}
            handleReloadData={handleReloadReservations}
            handleSortOrder={handleSortOrder}
            handleSortBy={handleSortBy}
         />
      </>
   );
}
 
export default TableActionsContainer;