import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import * as S from './StyledTableElement';

import Dialog from '../../../Dialog/Dialog';


const TableElement = ({
   reservation, 
   markedReservation, 
   selected,
   handleMarkReservation, 
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
            active_style={selected.includes(reservation.id) ? true : false}
            marked_style={markedReservation === reservation.id ? true : false}
            onClick={() => handleMarkReservation(reservation.id)}
         >
            <S.Td checkbox={true}>
               <FormControlLabel
                  control={<Checkbox
                     id="element"
                     checked={selected.includes(reservation.id) ? true : false}
                     onChange={() => handleSelectElement(reservation.id)}
                  />}
               />
            </S.Td>
            <S.Td>{parseInt(reservation.id,10)}</S.Td>
            <S.Td>{reservation.client}</S.Td>
            <S.Td>{reservation.reservationStartDate} {reservation.reservationStartTime}</S.Td>
            <S.Td>{reservation.reservationEndDate} {reservation.reservationEndTime}</S.Td>
            <S.Td>
               <S.StatusWrapper >
                  <S.Status status_style={reservation.status}>
                     {reservation.status}
                  </S.Status>
               </S.StatusWrapper>
            </S.Td>
            <S.Td>{reservation.room}</S.Td>           
            <S.Td>{reservation.createdAt}</S.Td>
            <S.Td>{reservation.updatedAt}</S.Td>
            <S.Td>
               <S.StyledLink to={`/user/reservations/${reservation.id}`}>
                  View
               </S.StyledLink>
               <S.StyledLink to={`/user/reservations/${reservation.id}/edit`}>
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