import React from 'react';
import ReactExport from 'react-export-excel';
import * as S from './StyledReservationsExportToExcelSheet';

import icons from '../../../assets/icons';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;


const ReservationsExportToExcelSheet = ({reservations, name, text}) => {
   return (  
      <ExcelFile 
         element={
            <S.FancyButton template={name !== 'Reservations'}>
               <S.Img src={icons.exportToExcel} />
               {text}
            </S.FancyButton>
         }
         filename={name} 
         fileExtension='xlsx'
      >
         <ExcelSheet data={reservations} name={name}>
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
   );
}
 
export default ReservationsExportToExcelSheet;
