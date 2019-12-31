import React from 'react'
import {useSelector} from 'react-redux'

import actions from '../../app/reservations/duck/actions'

import TableToolbar from '../../components/Table/TableToolbar/TableToolbar'
import { useTableToolbar } from '../../hooks/useTableToolbar'


const ReservationsTableToolbarContainer = () => {
   const {selected} = useSelector(state => state.fetchedUserReservations)
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
 
export default ReservationsTableToolbarContainer
