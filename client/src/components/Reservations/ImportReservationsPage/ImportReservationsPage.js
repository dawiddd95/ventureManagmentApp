import React from 'react';
import XLSX from 'xlsx';
import {getJsDateFromExcel} from 'excel-date-to-js';
import {Mutation} from 'react-apollo';

import * as S from './StyledImportReservationsPage';
import { CREATE_RESERVATION_MUTATION } from '../../../graphql/reservation/mutation';
import { USER_RESERVATIONS_QUERY } from '../../../graphql/reservation/query';

import ReservationsExportToExcelSheet from '../ReservationsExportToExcelSheet/ReservationsExportToExcelSheet';
import ImportSuccess from '../../Import/ImportSuccess/ImportSuccess';
import ImportErrors from '../../Import/ImportErrors/ImportErrors';

import icons from '../../../assets/icons';


const ImportReservationsPage = () => {
   const [reservations, setReservations] = React.useState([])
   const [errors, setErrors] = React.useState([])
   const [success, setSuccess] = React.useState(false)

   const errorsArray = []
   const reservationsArray = []
   let counter = 1;

   const addDataToDB = (reservations, errors, mutation) => {
      if(errors.length === 0) {
         reservations.map(element => mutation({variables: element}))
         setSuccess(true)
      }
   }

   const validateDate = (date, index, type) => {
      const regex = /^\d{4}-\d{2}-\d{2}$/
      const pattern = new RegExp(regex);
      const result = pattern.test(date);
      if(!result) {
         errorsArray.push({
            index, 
            error: `Wrong date format (${type}). Correct date format is year-month-day`
         })
      }
   }

   const validateTime = (time, index, type) => {
      const regex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
      const pattern = new RegExp(regex);
      const result = pattern.test(time);
      if(!result) {
         if(!result) {
            errorsArray.push({
               index,
               error: `Wrong Time format (${type}). Correct Time format is hour:minutes. For midnight use 00:00 format instead of 24:00`
            })
         }
      }
   }


   const validateExcelData = (excelRow, index) => {
      const {
         client,
         reservationStartDate,
         reservationStartTime,
         reservationEndDate,
         reservationEndTime,
         createdAt,
         updatedAt
      } = excelRow;


      if(client === undefined || !client.replace(/\s/g, '').length) 
         errorsArray.push({index, error: 'Client is required'})

      if(reservationStartDate === undefined || !reservationStartDate.toString().replace(/\s/g, '').length) 
         errorsArray.push({index, error: 'Reservation Start Date is required'})
      
      if(reservationStartDate !== undefined && reservationStartDate.toString().replace(/\s/g, '').length) {
         if(typeof reservationStartDate === 'string') {
            const date = reservationStartDate;
            validateDate(date, index, 'Reservation Start Date')
         } else {
            const excelDate = getJsDateFromExcel(reservationStartDate.toString());
            const dateISOString = excelDate.toISOString();
            const date = dateISOString.slice(0,10);
            validateDate(date, index, 'Reservation Start Date');
         }
      } 

      if(reservationStartDate > reservationEndDate) 
         errorsArray.push({index, error: `Reservation End Date can't be older than Reservation Start Date`})
      
      if(reservationStartTime === undefined) 
         errorsArray.push({index, error: 'Reservation Start Time is required'})
      
      if(reservationStartTime !== undefined && reservationStartTime.toString().replace(/\s/g, '').length) {
         if(typeof reservationStartTime !== 'string') {
            errorsArray.push({index, error: 'Reservation Start Time must be in text format'})
         } else {
            if(!reservationStartTime.replace(/\s/g, '').length) {
               errorsArray.push({index, error: 'Reservation Start Time is required'})
            }

            const time = reservationStartTime;
            validateTime(time, index, 'Reservation Start Time');
         }
      }
      
      if(reservationEndDate === undefined || !reservationEndDate.toString().replace(/\s/g, '').length) 
         errorsArray.push({index, error: 'Reservation End Date is required'})
      
      if(reservationEndDate !== undefined && reservationEndDate.toString().replace(/\s/g, '').length) {
         if(typeof reservationEndDate === 'string') {
            const date = reservationEndDate;
            validateDate(date, index, 'Reservation End Date')
         } else {
            const excelDate = getJsDateFromExcel(reservationEndDate.toString());
            const dateISOString = excelDate.toISOString();
            const date = dateISOString.slice(0,10);
            validateDate(date, index, 'Reservation End Date');
         }
      }
      
      if(reservationEndTime === undefined) 
         errorsArray.push({index, error: 'Reservation End Time is required'})

      if(reservationEndTime !== undefined && reservationEndTime.toString().replace(/\s/g, '').length) {
         if(typeof reservationEndTime !== 'string') {
            errorsArray.push({index, error: 'Reservation End Time must be in text format'})
         } else {
            if(!reservationEndTime.replace(/\s/g, '').length) {
               errorsArray.push({index, error: 'Reservation End Time is required'})
            }

            const time = reservationEndTime;
            validateTime(time, index, 'Reservation End Time');
         }
      }
      
      if(createdAt === undefined || !createdAt.toString().replace(/\s/g, '').length) 
         errorsArray.push({index, error: 'Created At Date is required'})
      
      if(createdAt !== undefined && createdAt.toString().replace(/\s/g, '').length) {
         if(typeof createdAt === 'string') {
            const date = createdAt;
            validateDate(date, index, 'Created At Date')
         } else {
            const excelDate = getJsDateFromExcel(createdAt.toString());
            const dateISOString = excelDate.toISOString();
            const date = dateISOString.slice(0,10);
            validateDate(date, index, 'Created At Date');
         }
      }

      if(updatedAt === undefined || !updatedAt.toString().replace(/\s/g, '').length) 
         errorsArray.push({index, error: 'Updated At Date is required'})
      
      if(updatedAt !== undefined && updatedAt.toString().replace(/\s/g, '').length) {
         if(typeof updatedAt === 'string') {
            const date = updatedAt;
            validateDate(date, index, 'Updated At Date')
         } else {
            const excelDate = getJsDateFromExcel(updatedAt.toString());
            const dateISOString = excelDate.toISOString();
            const date = dateISOString.slice(0,10);
            validateDate(date, index, 'Updated At Date');
         }
      }
   }


   const handleImportExcelData = (mutation, e) => {
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

            counter++;            
            validateExcelData(reservation, i)
            
         }

         setReservations(reservations.concat(reservationsArray))
         setErrors(errorsArray)

         if(counter === dataParse.length) addDataToDB(reservationsArray, errorsArray, mutation)
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

                     {/* Warningi do osobnego  */}
                     <S.WarningsWrapper>
                        <S.Warning>
                           <S.Img warning src={icons.warning} />
                           Default values of Updated At Date should be equal to Created At Date
                        </S.Warning>
                        <S.Warning>
                           <S.Img warning src={icons.warning} />
                           Remember to pass correct date format YEAR-MONTH-DAY in your Excel file
                        </S.Warning>
                        <S.Warning>
                           <S.Img warning src={icons.warning} />
                           Be sure to write reservation time as text format in your Excel file.
                        </S.Warning>
                     </S.WarningsWrapper>


                     {/* TO JEST WPORZADKU OKEJ */}
                     <ReservationsExportToExcelSheet 
                        reservations={[]} 
                        name='Reservations_Template'
                        text='Download the template'
                     />
                     {(success && errors.length === 0) && 
                        <ImportSuccess 
                           text='Import data succeed. Your data was added to database'
                           url='/user/reservations'
                           link='Reservations' 
                        />
                     }
                     {errors.length > 0 && <ImportErrors errors={errors} />}


                     {/* Ten import Wrapper myślę do osbnego  */}
                     {!success && <S.ImportWrapper>
                        <S.ImportButton type='file'>
                           <S.Img box src={icons.box} />
                           Click or drag the file to this area to continue
                        </S.ImportButton>
                           <Mutation 
                              mutation={CREATE_RESERVATION_MUTATION} 
                              refetchQueries={[{query: USER_RESERVATIONS_QUERY}]} 
                           >
                              {mutation => (
                                 <S.ImportInput  
                                    type='file' 
                                    accept='.xls, .xlsx' 
                                    onChange={(event) => handleImportExcelData(mutation, event)} 
                                 />
                              )}
                           </Mutation>
                     </S.ImportWrapper>}    


                  </S.ContentWrapper>
               </S.BookingsBox>
            </S.MainContent>
         </S.Section>
      </S.Wrapper>
   );
}
 
export default ImportReservationsPage;