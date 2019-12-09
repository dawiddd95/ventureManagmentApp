import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import * as S from './StyledEmployeesTable';

import EmployeesTableElement from '../EmployeesTableElement/EmployeesTableElement';
import NoData from '../../NoData/NoData';


const EmployeesTable = ({
   pageUserEmployees,
   checkSelectAll,
   markedEmployee,
   selected,
   filter,
   handleMarkEmployee,
   handleSelectElement,
   handleSelectAllElements,
   handleDeleteSearchingElements
}) => {

   const length = pageUserEmployees.length;
   
   return (  
      <S.TableWrapper no_data={length === 0}>
         <S.Table>
            <S.Thead no_data={length === 0}>
               <tr>
                  <S.Th checkbox={true}>
                     <FormControlLabel
                        control={<Checkbox
                           id="id"
                           checked={checkSelectAll}
                           onChange={() => handleSelectAllElements()}
                        />}
                     />
                  </S.Th>
                  <S.Th>Employee ID</S.Th>
                  <S.Th>Name</S.Th>
                  <S.Th>Surname</S.Th>
                  <S.Th>Active</S.Th>
                  <S.Th>Phone</S.Th>
                  <S.Th>Email</S.Th>
                  <S.Th>Created At Date</S.Th>
                  <S.Th>Updated At Date</S.Th>
                  <S.Th>Employee Actions</S.Th>
               </tr>
            </S.Thead>
            <tbody>
               {pageUserEmployees.map(employee => <EmployeesTableElement
                  key={employee.id}
                  employee={employee}
                  markedEmployee={markedEmployee}
                  selected={selected}
                  handleMarkEmployee={handleMarkEmployee}
                  handleSelectElement={handleSelectElement}
                  handleDeleteSearchingElements={handleDeleteSearchingElements}
               />)}
            </tbody>
         </S.Table>
         {length === 0 && <NoData filter={filter} />}
      </S.TableWrapper>
   );
}
 
export default EmployeesTable;