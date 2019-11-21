import React from 'react';
import * as S from './StyledViewData';

const ViewData = ({reservation}) => {
   return (  
      <S.Wrapper>
         <S.Item>
            <S.Label>ID: </S.Label>
            <S.Value>{reservation.id}</S.Value>
         </S.Item>
         <S.Item>
            <S.Label>Client: </S.Label>
            <S.Value>{reservation.client}</S.Value>
         </S.Item>
         <S.Item>
            <S.Label>Reservation Start:</S.Label>
            <S.Value>
               {reservation.reservationStartDate} {reservation.reservationStartTime}
            </S.Value>
         </S.Item>
         <S.Item>
            <S.Label>Reservation End:</S.Label>
            <S.Value>
               {reservation.reservationStartDate} {reservation.reservationStartTime}
            </S.Value>
         </S.Item>
         <S.Item>
            <S.Label>Status:</S.Label>
            <S.Value>
               {reservation.status 
                  ? reservation.status 
                  : <S.NoData>No Data</S.NoData>
               }
            </S.Value>
         </S.Item>      
         <S.Item>
            <S.Label>Room:</S.Label>
            <S.Value>
               {reservation.room 
                  ? reservation.room 
                  : <S.NoData>No Data</S.NoData>
               }
            </S.Value>
         </S.Item>
         <S.Item>
            <S.Label>Notes:</S.Label>
            <S.Value>
               {reservation.notes 
                  ? reservation.notes 
                  : <S.NoData>No Data</S.NoData>
               }
            </S.Value>
         </S.Item>
         <S.Item>
            <S.Label>Employee Notes:</S.Label>
            <S.Value>
               {reservation.employeeNotes 
                  ? reservation.employeeNotes 
                  : <S.NoData>No Data</S.NoData>
               }
            </S.Value>
         </S.Item>
         <S.Item>
            <S.Label>Cancellation Notes:</S.Label>
            <S.Value>
               {reservation.cancellationNotes 
                  ? reservation.cancellationNotes 
                  : <S.NoData>No Data</S.NoData>
               }
            </S.Value>
         </S.Item>
         <S.Item>
            <S.Label>Created At:</S.Label>
            <S.Value>{reservation.createdAt}</S.Value>
         </S.Item>
         <S.Item>
            <S.Label>Updated At:</S.Label>
            <S.Value>{reservation.updatedAt}</S.Value>
         </S.Item>
      </S.Wrapper>
   );
}
 
export default ViewData;