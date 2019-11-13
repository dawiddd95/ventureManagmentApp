import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import * as S from './StyledTableActions';
import icons from '../../../../assets/icons';

const TableActions = ({sortBy, sortOrder, handleReloadReservations, handleSortOrder, handleSortBy}) => {
   return (  
      <S.ButtonsWrapper>
         <S.Button onClick={handleReloadReservations}>
            <S.Img src={icons.reload} />
            Reload Reservations
         </S.Button>
         <FormControlLabel
            control={
               <Switch 
                  checked={sortOrder === 'desc'}
                  onChange={() => handleSortOrder(sortOrder)} 
               />
            }
            label={<S.StyledLabel active={sortOrder === 'desc'}>Sort Descending</S.StyledLabel>}
         />
         <S.SelectWrapper>
            <S.Label htmlFor='sortBySelect'>SORT BY: </S.Label>
            <S.Select value={sortBy} onChange={handleSortBy} id='sortBySelect'>
               <option value='id'>Reservation ID</option>
               <option value='client'>Client</option>
               <option value='room'>Room</option>
               <option value='status'>Status</option>
               <option value='reservationStartDate'>Start Reservation Date</option>
               <option value='reservationStartTime'>Start Reservation Time</option>
               <option value='reservationEndDate'>End Reservation Date</option>
               <option value='reservationEndTime'>End Reservation Time</option>
               <option value='createdAt'>Created At Date</option>
            </S.Select>
         </S.SelectWrapper>
      </S.ButtonsWrapper>
   );
}
 
export default TableActions;