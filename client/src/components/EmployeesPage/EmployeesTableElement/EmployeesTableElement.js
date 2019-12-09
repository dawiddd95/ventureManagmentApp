import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import * as S from './StyledEmployeesTableElement';

import Dialog from '../../Dialog/Dialog';


const EmployeesTableElement = ({
   employee,
   markedEmployee,
   selected,
   handleMarkEmployee,
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
            marked={markedEmployee === employee.id ? true : false}
            active={selected.includes(employee.id) ? true : false}
            onClick={() => handleMarkEmployee(employee.id)}
         >
            <S.Td checkbox={true}>
               <FormControlLabel
                  control={<Checkbox
                     id="element"
                     checked={selected.includes(employee.id) ? true : false}
                     onChange={() => handleSelectElement(employee.id)}
                  />}
               />
            </S.Td>
            <S.Td>{parseInt(employee.id,10)}</S.Td>
            <S.Td>{employee.name}</S.Td>
            <S.Td>{employee.surname}</S.Td>
            <S.Td>{String(employee.active)}</S.Td>
            <S.Td>{employee.phone}</S.Td>
            <S.Td>{employee.email}</S.Td>
            <S.Td>{employee.createdAt}</S.Td>
            <S.Td>{employee.updatedAt}</S.Td>
            <S.Td>
               <S.StyledLink
                  to={{
                     pathname: `/user/employees/${employee.id}`,
                     state: {employee: employee}
                  }}
               >
                  View
               </S.StyledLink>
               <S.StyledLink 
                  to={{
                     pathname: `/user/employees/${employee.id}/edit`,
                     state: {employee: employee}
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
                  selected={[employee.id]}
                  handleOnCompleted={handleOnCompleted}
                  handleCloseDialog={handleCloseDialog}
               />}
            </S.Td>
         </S.Tr>
      </>
   );
}
 
export default EmployeesTableElement;