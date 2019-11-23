import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import * as S from './StyledTableElement';

import Dialog from '../../../Dialog/Dialog';


const TableElement = ({
   reservation, 
   markedReservation, 
   markReservation, 
   selected, 
   handleSelectElement,
   handleDeleteSearchingElements
}) => {
   const [openDialog, setOpenDialog] = React.useState(false) 

   const handleSetIsOpen = () => {
      setOpenDialog(true)
   }

   const handleOnCompleted = (selectedIds) => {
      setOpenDialog(false)
      handleDeleteSearchingElements(selectedIds)
   }

   const handleCloseDialog = () => {
      setOpenDialog(false)
   }

   return (  
      <>
         <S.Tr 
            marked={markedReservation === reservation.id ? true : false}
            active={selected.includes(reservation.id) ? true : false}
            onClick={() => markReservation(reservation.id)}
         >
            <S.Td checkbox={true}>
               <FormControlLabel
                  control={<Checkbox
                     id="remember"
                     checked={selected.includes(reservation.id) ? true : false}
                     onChange={() => handleSelectElement(reservation.id)}
                  />}
               />
            </S.Td>
            <S.Td>{parseInt(reservation.id,10)}</S.Td>
            <S.Td>{reservation.client}</S.Td>
            <S.Td>{reservation.reservationStartDate} {reservation.reservationStartTime}</S.Td>
            <S.Td>{reservation.reservationEndDate} {reservation.reservationEndTime}</S.Td>
            <S.Td>{reservation.status}</S.Td>
            <S.Td>{reservation.room}</S.Td>           
            <S.Td>{reservation.createdAt}</S.Td>
            <S.Td>{reservation.updatedAt}</S.Td>
            <S.Td>
               <S.StyledLink
                  to={{
                     pathname: `/user/reservations/${reservation.id}`,
                     state: {reservation: reservation}
                  }}
               >
                  View
               </S.StyledLink>
               <S.StyledLink 
                  to={{
                     pathname: `/user/reservations/${reservation.id}/edit`,
                     state: {reservation: reservation}
                  }}
               >
                  Edit
               </S.StyledLink>
               <S.DeleteButton onClick={handleSetIsOpen}>
                  Delete
               </S.DeleteButton>
               {openDialog && <Dialog
                  title='Delete selected items?'
                  text='Are you sure you want delete item with id: '
                  selected={[reservation.id]}
                  handleOnCompleted={handleOnCompleted}
                  handleCloseDialog={handleCloseDialog}
               />}
            </S.Td>
         </S.Tr>
      </>
   );
}
 
export default TableElement;