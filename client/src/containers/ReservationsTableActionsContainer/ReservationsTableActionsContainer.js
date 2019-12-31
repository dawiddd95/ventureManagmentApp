import React from 'react'
import {useSelector} from 'react-redux'

import actions from '../../app/reservations/duck/actions'
import { tableSortByData } from '../../assets/data/selectData'
import { useTableActions } from '../../hooks/useTableActions'

import TableActions from '../../components/Table/TableActions/TableActions'


const ReservationsTableActionsContainer = () => {
   const {sortBy, sortOrder} = useSelector(state => state.fetchedUserReservations)
   const [reload, handleReloadData, handleSortOrder, handleSortBy] = useTableActions(actions)

   
   return (  
      <>
         <TableActions
            selectOptions={tableSortByData}
            textButton='Reload Reservations'
            sortBy={sortBy}
            sortOrder={sortOrder}
            reload={reload}
            handleReloadData={handleReloadData}
            handleSortOrder={handleSortOrder}
            handleSortBy={handleSortBy}
         />
      </>
   );
}
 
export default ReservationsTableActionsContainer;