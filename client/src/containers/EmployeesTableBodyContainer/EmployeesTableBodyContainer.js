import React from 'react'
import {useSelector} from 'react-redux'

import actions from '../../app/employees/duck/actions'
import { useSortPageElements } from '../../hooks/useSortPageElements'
import { useTableBody } from '../../hooks/useTableBody'
import { TableHeadersContext } from '../../context'
import { employeesTableHeaders } from '../../assets/data/tableHeaders'

import TableBody from '../../components/Employees/TableBody/TableBody'


const EmployeesTableBodyContainer = () => {
   const {
      employees, 
      sortBy, 
      sortOrder, 
      selected, 
      checkSelectAll, 
      currentPage, 
      pagination
   } = useSelector(state => state.fetchedUserEmployees) 

   const currentData = useSortPageElements(employees, sortBy, sortOrder, currentPage, pagination)

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
         <TableHeadersContext.Provider value={employeesTableHeaders}>
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
 
export default EmployeesTableBodyContainer;