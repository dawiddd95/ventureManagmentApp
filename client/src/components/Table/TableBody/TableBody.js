import React from 'react';

import * as S from './StyledTableBody';
import { TableHeadersContext } from '../../../context';

import TableHeaders from '../TableHeaders/TableHeaders';
import TableRow from '../TableRow/TableRow';
import NoData from '../../NoData/NoData';


const TableBody = ({
   currentData,
   checkSelectAll,
   markedRow,
   selected,
   handleMarkRow,
   handleSelectElement,
   handleSelectAllElements,
}) => {
   const headersValue = React.useContext(TableHeadersContext)

   return (  
      <S.TableWrapper no_data_style={currentData.length === 0}>
         <S.Table no_data_style={currentData.length === 0}>
            <S.Thead no_data_style={currentData.length === 0}>
               <TableHeaders 
                  headers={headersValue}
                  checkboxId='allReservations'
                  checkSelectAll={checkSelectAll}
                  handleSelectAllElements={handleSelectAllElements}
               />  
            </S.Thead>
            <tbody>
               {currentData.map(item => <TableRow
                  key={item.id}
                  tableElement={item}
                  markedRow={markedRow}
                  selected={selected}
                  handleMarkRow={handleMarkRow}
                  handleSelectElement={handleSelectElement}
               />)}
            </tbody>
         </S.Table>
         {currentData.length === 0 && <NoData />}
      </S.TableWrapper>
   );
}
 
export default TableBody;