import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import * as S from './StyledReservationsTable';

import ReservationsTableElement from '../ReservationsTableElement/ReservationsTableElement';
import NoData from '../../NoData/NoData';

const ReservationsTable = ({
   pageUserReservations,
   checkSelectAll,
   markedReservation,
   selected,
   filter,
   handleMarkReservation,
   handleSelectElement,
   handleSelectAllElements,
   handleDeleteSearchingElements
}) => {

   const length = pageUserReservations.length;
   
   return (  
      <S.TableWrapper no_data={length === 0}>
         <S.Table>
            <S.Thead no_data={length === 0}>
               <tr>
                  <S.Th checkbox={true}>
                     <FormControlLabel
                        control={<Checkbox
                           id="remember"
                           checked={checkSelectAll}
                           onChange={() => handleSelectAllElements()}
                        />}
                     />
                  </S.Th>
                  <S.Th>Employee ID</S.Th>
                  <S.Th>Client</S.Th>
                  <S.Th>Start Reservation</S.Th>
                  <S.Th>End Reservation</S.Th>
                  <S.Th>Status</S.Th>
                  <S.Th>Room</S.Th>
                  <S.Th>Created At Date</S.Th>
                  <S.Th>Updated At Date</S.Th>
                  <S.Th>Reservation Actions</S.Th>
               </tr>
            </S.Thead>
            <tbody>
               {pageUserReservations.map(reservation => <ReservationsTableElement
                  key={reservation.id}
                  reservation={reservation}
                  markedReservation={markedReservation}
                  selected={selected}
                  handleMarkReservation={handleMarkReservation}
                  handleSelectElement={handleSelectElement}
                  handleDeleteSearchingElements={handleDeleteSearchingElements}
               />)}
            </tbody>
         </S.Table>
         {length === 0 && <NoData filter={filter} />}
      </S.TableWrapper>
   );
}
 
export default ReservationsTable;