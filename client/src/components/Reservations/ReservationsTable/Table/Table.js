import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import * as S from './StyledTable';
import TableElement from '../TableElement/TableElement';

const Table = ({
   userReservations,
   pageUserReservations,
   markedReservation,
   markReservation,
   selected,
   handleSelectElement,
   handleSelectAllElements,
}) => {
   return (  
      <S.TableWrapper>
         <S.Table>
            <S.Thead>
               <tr>
                  <S.Th checkbox={true}>
                     <FormControlLabel
                        control={<Checkbox
                           id="remember"
                           checked={selected.length === userReservations.length ? true : false}
                           onChange={() => handleSelectAllElements()}
                        />}
                     />
                  </S.Th>
                  <S.Th>Reservation ID</S.Th>
                  <S.Th>Client</S.Th>
                  <S.Th>Start Reservation</S.Th>
                  <S.Th>End Reservation</S.Th>
                  <S.Th>Status</S.Th>
                  <S.Th>Room</S.Th>
                  <S.Th>Created At Date</S.Th>
                  <S.Th>Reservation Actions</S.Th>
               </tr>
            </S.Thead>
            <tbody>
               {pageUserReservations.map(reservation => <TableElement 
                  key={reservation.id}
                  reservation={reservation}
                  markedReservation={markedReservation}
                  markReservation={markReservation}
                  selected={selected}
                  handleSelectElement={handleSelectElement}
               />)}
            </tbody>
         </S.Table>
      </S.TableWrapper>
   );
}
 
export default Table;