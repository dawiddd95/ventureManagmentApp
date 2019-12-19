import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import * as S from './StyledTableTemplate';

import TableHeaders from '../TableHeaders/TableHeaders';
import TableElement from '../TableElement/TableElement';
import NoData from '../../NoData/NoData';


const TableTemplate = ({
   currentData,
   checkSelectAll,
   markedRow,
   selected,
   filter,
   handleMarkRow,
   handleSelectElement,
   handleSelectAllElements,
   handleDeleteFromSearchingElements
}) => {
   return (  
      <S.TableWrapper no_data_style={currentData.length === 0}>
         <S.Table no_data_style={currentData.length === 0}>
            <S.Thead no_data_style={currentData.length === 0}>
               <TableHeaders 
                  headers={[
                     'Reservation ID',
                     'Client',
                     'Start Reservation',
                     'End Reservation',
                     'Status',
                     'Room',
                     'Created At Date',
                     'Updated At Date',
                     'Reservation Actions',
                  ]}
                  checkboxId='allReservations'
                  checkSelectAll={checkSelectAll}
                  handleSelectAllElements={handleSelectAllElements}
               />  
            </S.Thead>
            <tbody>
               {currentData.map(item => <TableElement
                  key={item.id}
                  tableElement={item}
                  markedRow={markedRow}
                  selected={selected}
                  handleMarkRow={handleMarkRow}
                  handleSelectElement={handleSelectElement}
                  handleDeleteFromSearchingElements={handleDeleteFromSearchingElements}
               />)}
            </tbody>
         </S.Table>
         {currentData.length === 0 && <NoData filter={filter} />}
      </S.TableWrapper>
   );
}
 
export default TableTemplate;