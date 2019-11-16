import React from 'react';
import XLSX from 'xlsx';
import * as S from './StyledImportReservationsPage';

import ReservationsExportToExcelSheet from '../ReservationsExportToExcelSheet/ReservationsExportToExcelSheet';

import icons from '../../../assets/icons';


// 2. walidacja
// 3. dodanie do bazy danych
const ImportReservationsPage = () => {
   const reservationsArray = []
   const errorsArray = []

   const validateExcelData = (excelRow, index) => {
      if(excelRow.client === undefined) 
         errorsArray.push({index, error: 'Client is required'})
      if(excelRow.client !== undefined) {
         if(excelRow.client.trim().length === 0) {
            errorsArray.push({index, error: 'Client is required'})
         }
      }
      if(excelRow.reservationStartDate === '') 
         errorsArray.push({index, error: 'Reservation Start Date is required'})
      if(excelRow.reservationStartDate !== '') {
         const date = excelRow.reservationStartDate;
         const regex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
         const pattern = new RegExp(regex);
         const result = pattern.test(date);
         if(!result) {
            errorsArray.push({
               index, 
               error: 'Wrong date format (Reservation Start Date). Correct date format is year-month-day'
            })
         }
      }
      if(excelRow.reservationStartDate > excelRow.reservationEndDate) 
         errorsArray.push({index, error: `Reservation End Date can't be older than Reservation Start Date`})
      if(excelRow.reservationStartTime === '') 
         errorsArray.push({index, error: 'Reservation Start Time is required'})
      if(excelRow.reservationStartTime !== '') {
         const time = excelRow.reservationStartTime;
         const regex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
         const pattern = new RegExp(regex);
         const result = pattern.test(time);
         if(!result) {
            if(!result) {
               errorsArray.push({
                  index,
                  error: 'Wrong Time format (Reservation Start Time). Correct Time format is hour:minutes. For midnight use 00:00 format instead of 24:00'
               })
            }
         }
      }
      if(excelRow.reservationStartTime > excelRow.reservationEndTime)
         errorsArray.push({index, error: `Reservation End Time can't be earlier than Reservation Start Time`})
      if(excelRow.reservationEndDate === '') 
         errorsArray.push({index, error: 'Reservation End Date is required'})
      if(excelRow.reservationEndDate !== '') {
         const date = excelRow.reservationEndDate;
         const regex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
         const pattern = new RegExp(regex);
         const result = pattern.test(date);
         if(!result) {
            errorsArray.push({
               index, 
               error: 'Wrong date format (Reservation End Date). Correct date format is year-month-day'
            })
         }
      }
      if(excelRow.reservationEndTime === '') 
         errorsArray.push({index, error: 'Reservation End Time is required'})
      if(excelRow.reservationEndTime !== '') {
         const time = excelRow.reservationEndTime;
         const regex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
         const pattern = new RegExp(regex);
         const result = pattern.test(time);
         if(!result) {
            if(!result) {
               errorsArray.push({
                  index, 
                  error: 'Wrong Time format (Reservation End Time). Correct Time format is hour:minutes. For midnight use 00:00 format instead of 24:00'
               })
            }
         }
      }
      if(excelRow.createdAt === '') 
         errorsArray.push({index, error: 'Created At Date is required'})
      if(excelRow.createdAt !== '') {
         const date = excelRow.createdAt;
         const regex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
         const pattern = new RegExp(regex);
         const result = pattern.test(date);
         if(!result) {
            errorsArray.push({
               index, 
               error: 'Wrong date format (Created At Date). Correct date format is year-month-day'
            })
         }
      }
      if(excelRow.updatedAt === '') 
         errorsArray.push({index, error: 'Updated At Date is required'})
      if(excelRow.updatedAt !== '') {
         const date = excelRow.updatedAt;
         const regex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
         const pattern = new RegExp(regex);
         const result = pattern.test(date);
         if(!result) {
            errorsArray.push({
               index, 
               error: 'Wrong date format (Updated At Date). Correct date format is year-month-day'
            })
         }
      }
      console.log(errorsArray)
   }

   const handleImportExcelData = async (e) => {
      const files = e.target.files, f = files[0];
      const reader = new FileReader();

      reader.onload = function (e) {
         const data = e.target.result;
         let readedData = XLSX.read(data, {type: 'binary'});
         const wsname = readedData.SheetNames[0];
         const ws = readedData.Sheets[wsname];
         const dataParse = XLSX.utils.sheet_to_json(ws, {header:1});

         for(let i = 1; i < dataParse.length; i++) {
            const reservation = {
               client: dataParse[i][0],
               reservationStartDate: dataParse[i][1],
               reservationStartTime: dataParse[i][2],
               reservationEndDate: dataParse[i][3],
               reservationEndTime: dataParse[i][4],
               status: dataParse[i][5],
               room: dataParse[i][6],
               createdAt: dataParse[i][7],
               updatedAt: dataParse[i][8],
               notes: dataParse[i][9],
               employeeNotes: dataParse[i][10],
               cancellationNotes: dataParse[i][11],
            }
            reservationsArray.push(reservation)

            validateExcelData(reservation, i+1)
         }
      };
      reader.readAsBinaryString(f)
   }

   return (  
      <S.Wrapper>
         <S.Section>
            <S.MainContent>
               <S.BreadCrumbs>
                  <S.StyledLink to='/user/reservations'>
                     Home
                  </S.StyledLink>
                  <S.StyledLink to='/user/reservations'>
                  / Reservations
                  </S.StyledLink>
                  / New Reservation
               </S.BreadCrumbs>
               <S.BookingsBox>
                  <S.ContentWrapper>
                     <S.Header>
                        Import Reservations
                     </S.Header>
                     <S.WarningsWrapper>
                        <S.Warning>
                           <S.Img warning src={icons.warning} />
                           Default values of Updated At Date should be equal to Created At Date
                        </S.Warning>
                        <S.Warning>
                           <S.Img warning src={icons.warning} />
                           Remember to pass correct date format YEAR-MONTH-DAY
                        </S.Warning>
                     </S.WarningsWrapper>
                     <ReservationsExportToExcelSheet 
                        reservations={[]} 
                        name='Reservations_Template'
                        text='Download the template'
                     />
                     <S.ImportWrapper>
                        <S.ImportButton type='file'>
                           <S.Img box src={icons.box} />
                           Click or drag the file to this area to continue
                        </S.ImportButton>
                        <S.ImportInput  type='file' accept='.xls, .xlsx' onChange={handleImportExcelData} />
                     </S.ImportWrapper>
                  </S.ContentWrapper>
               </S.BookingsBox>
            </S.MainContent>
         </S.Section>
      </S.Wrapper>
   );
}
 
export default ImportReservationsPage;