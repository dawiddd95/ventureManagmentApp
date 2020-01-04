import React from 'react'
import {useSelector} from 'react-redux'

import actions from '../../app/employees/duck/actions'

import TableToolbar from '../../components/Table/TableToolbar/TableToolbar'
import { useTableToolbar } from '../../hooks/useTableToolbar'


const EmployeesTableToolbarContainer = () => {
   const {selected} = useSelector(state => state.fetchedUserEmployees)
   const [openDialog, handleSetIsOpen, handleOnCompleted, handleCloseDialog] = useTableToolbar(actions)

   return (  
      <>
         <TableToolbar 
            selected={selected} 
            openDialog={openDialog}
            handleSetIsOpen={handleSetIsOpen}
            handleOnCompleted={handleOnCompleted}
            handleCloseDialog={handleCloseDialog}
         />
      </>
   );
}
 
export default EmployeesTableToolbarContainer;