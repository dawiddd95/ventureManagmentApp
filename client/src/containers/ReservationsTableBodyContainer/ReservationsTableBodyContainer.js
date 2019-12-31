import React from 'react'
import {useSelector} from 'react-redux'

import actions from '../../app/reservations/duck/actions'
import { useSortPageElements } from '../../hooks/useSortPageElements'
import { useTableBody } from '../../hooks/useTableBody'
import { TableHeadersContext } from '../../context'
import { reservationsTableHeaders } from '../../assets/data/tableHeaders'

import TableBody from '../../components/Table/TableBody/TableBody'


const ReservationsTableBodyContainer = () => {
   const {
      reservations, 
      sortBy, 
      sortOrder, 
      selected, 
      checkSelectAll, 
      currentPage, 
      pagination
   } = useSelector(state => state.fetchedUserReservations) 

   const currentData = useSortPageElements(reservations, sortBy, sortOrder, currentPage, pagination)

   const [
      selectedElements,
      isSelectedAllElements,
      markedRow, 
      handleMarkRow, 
      handleSelectElement, 
      handleSelectAllElements,
   ] = useTableBody(actions, currentData, selected, checkSelectAll)

   return ( 
      <>
         <TableHeadersContext.Provider value={reservationsTableHeaders}>
            <TableBody
               currentData={currentData} 
               checkSelectAll={isSelectedAllElements} 
               markedRow={markedRow} 
               selected={selectedElements} 
               handleMarkRow={handleMarkRow} 
               handleSelectElement={handleSelectElement} 
               handleSelectAllElements={handleSelectAllElements} 
            />
         </TableHeadersContext.Provider>
      </>
   );
}
 
export default ReservationsTableBodyContainer;