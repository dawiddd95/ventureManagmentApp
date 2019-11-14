import React from 'react';
import ReactExport from "react-export-excel";
import * as S from './StyledReservationsActionButtons';

import icons from '../../../assets/icons';


const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const ReservationsActionButtons = ({reservations}) => {
   return (  
      <S.ButtonsWrapper>
         <S.ButtonLink to='/user/reservations/new'>
            <S.Img src={icons.add} />
            New
         </S.ButtonLink>
         <S.ButtonLink to='/user/reservations/new'>
            <S.Img src={icons.upload} />
            Import
         </S.ButtonLink>
         <S.FancyButtonLink to='/test'>
            <S.Img src={icons.audit} />
            Audit Logs
         </S.FancyButtonLink>
         <ExcelFile 
            element={
               <S.FancyButton>
                  <S.Img src={icons.exportToExcel} />
                  Export to Excel
               </S.FancyButton>
            }
            filename='Reservations' 
            fileExtension='xlsx'
         >
            <ExcelSheet data={reservations} name="reservations">
               <ExcelColumn label='Reservation ID' value='id'/>
               <ExcelColumn label='Client' value='client' />
               <ExcelColumn label='Reservation Start Date' value='reservationStartDate' />
               <ExcelColumn label='Reservation Start Time' value='reservationStartTime' />
               <ExcelColumn label='Reservation End Date' value='reservationEndDate' />
               <ExcelColumn label='Reservation End Time' value='reservationEndTime' />
               <ExcelColumn label='Status' value='status' />
               <ExcelColumn label='Room' value='room' />
               <ExcelColumn label='Created At' value='createdAt' />
               <ExcelColumn label='Updated At' value='updatedAt' />
               <ExcelColumn label='Notes' value='notes' />
               <ExcelColumn label='Employe Notes' value='employeeNotes' />
               <ExcelColumn label='Cancellation Notes' value='cancellationNotes' />
            </ExcelSheet>
         </ExcelFile>
      </S.ButtonsWrapper>
   );
}
 
export default ReservationsActionButtons;