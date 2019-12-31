import React from 'react'

import * as S from './StyledImportReservationsPage'

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import ReservationsExportToExcel from '../../components/Reservations/ReservationsExportToExcel/ReservationsExportToExcel';
import ImportWarnings from '../../components/ImportAlerts/ImportWarnings/ImportWarnings'
import ImportSuccess from '../../components/ImportAlerts/ImportSuccess/ImportSuccess'
import ImportErrors from '../../components/ImportAlerts/ImportErrors/ImportErrors'
import ImportButton from '../../components/Reservations/ImportButton/ImportButton';


const ImportReservationsPage = ({errors, success, handleImportExcelData}) => {
   return (  
      <S.Wrapper>
         <S.Section>
            <S.MainContent>
               <Breadcrumbs 
                  links={[
                     {name: 'Home', to: '/user/reservations'},
                     {name: '/ Reservations', to: '/user/reservations'},
                  ]}
                  navElement='/ Import Reservations'
               />
               <S.BookingsBox>
                  <S.ContentWrapper>
                     <S.Header>
                        Import Reservations
                     </S.Header>
                     <ImportWarnings
                        warnings={[
                           'Default values of Updated At Date should be equal to Created At Date',
                           'Remember to pass correct date format YEAR-MONTH-DAY in your Excel file',
                           'Be sure to write reservation time as text format in your Excel file.'
                        ]}
                     />
                     <ReservationsExportToExcel
                        name='Reservations_Template'
                        text='Download the template'
                        reservations={[]} 
                     />
                     {(success && errors.length === 0) && 
                        <ImportSuccess 
                           text='Import data succeed. Your data was added to database.'
                           url='/user/reservations'
                           link='Reservations' 
                        />
                     }
                     {errors.length > 0 && <ImportErrors errors={errors} />}
                     {!success && <ImportButton
                        handleImportExcelData={handleImportExcelData}
                     />}    
                  </S.ContentWrapper>
               </S.BookingsBox>
            </S.MainContent>
         </S.Section>
      </S.Wrapper>
   );
}
 
export default ImportReservationsPage;