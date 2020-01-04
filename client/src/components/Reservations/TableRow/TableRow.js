import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import * as S from './StyledTableRow';

import Dialog from '../../Dialog/Dialog';


const TableRow = ({tableElement, markedRow, selected, handleMarkRow, handleSelectElement}) => {
   const [openDialog, setOpenDialog] = React.useState(false) 

   const handleSetIsOpen = () => {
      setOpenDialog(true)
   }

   const handleCloseDialog = () => {
      setOpenDialog(false)
   }

   return (  
      <>
         <S.Tr 
            active_style={selected.includes(tableElement.id) ? true : false}
            marked_style={markedRow === tableElement.id ? true : false}
            onClick={() => handleMarkRow(tableElement.id)}
         >
            <S.Td checkbox={true}>
               <FormControlLabel
                  control={<Checkbox
                     id="element"
                     checked={selected.includes(tableElement.id) ? true : false}
                     onChange={() => handleSelectElement(tableElement.id)}
                  />}
               />
            </S.Td>
            <S.Td>{parseInt(tableElement.id,10)}</S.Td>
            <S.Td>{tableElement.client}</S.Td>
            <S.Td>{tableElement.reservationStartDate} {tableElement.reservationStartTime}</S.Td>
            <S.Td>{tableElement.reservationEndDate} {tableElement.reservationEndTime}</S.Td>
            <S.Td>
               <S.StatusWrapper >
                  <S.Status status_style={tableElement.status}>
                     {tableElement.status}
                  </S.Status>
               </S.StatusWrapper>
            </S.Td>
            <S.Td>{tableElement.room}</S.Td>           
            <S.Td>{tableElement.createdAt}</S.Td>
            <S.Td>{tableElement.updatedAt}</S.Td>
            <S.Td>
               <S.StyledLink to={`/user/reservations/${tableElement.id}`}>
                  View
               </S.StyledLink>
               <S.StyledLink to={`/user/reservations/${tableElement.id}/edit`}>
                  Edit
               </S.StyledLink>
               <S.DeleteButton onClick={handleSetIsOpen}>
                  Delete
               </S.DeleteButton>
               {openDialog && <Dialog
                  title='Delete selected items?'
                  text='Are you sure you want delete item with id: '
                  selected={[tableElement.id]}
                  handleOnCompleted={handleCloseDialog}
                  handleCloseDialog={handleCloseDialog}
               />}
            </S.Td>
         </S.Tr>
      </>
   );
}
 
export default TableRow;