import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import * as S from './StyledTableElement';

const TableElement = ({reservation, markedReservation, markReservation, selected, handleSelectElement}) => {
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
            <S.Td>{reservation.id}</S.Td>
            <S.Td>{reservation.client}</S.Td>
            <S.Td>{reservation.reservationStartDate} {reservation.reservationStartTime}</S.Td>
            <S.Td>{reservation.reservationEndDate} {reservation.reservationEndTime}</S.Td>
            <S.Td>{reservation.status}</S.Td>
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
               <S.DeleteButton>
                  Delete
               </S.DeleteButton>
            </S.Td>
         </S.Tr>
      </>
   );
}
 
export default TableElement;