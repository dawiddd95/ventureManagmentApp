import React from 'react';
import ReactExport from 'react-export-excel';
import * as S from './StyledEmployeesExportToExcelSheet';

import icons from '../../../assets/icons';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;


const EmployeesExportToExcelSheet = ({employees, name, text}) => {
   return (  
      <ExcelFile 
         element={
            <S.FancyButton template={name !== 'Employees'}>
               <S.Img src={icons.exportToExcel} />
               {text}
            </S.FancyButton>
         }
         filename={name} 
         fileExtension='xlsx'
      >
         <ExcelSheet data={employees} name={name}>
            <ExcelColumn label='Name' value='name' />
            <ExcelColumn label='Surname' value='surname' />
            <ExcelColumn label='Phone Number' value='phone' />
            <ExcelColumn label='Email' value='email' />
            <ExcelColumn label='Account Active' value='active' />
            <ExcelColumn label='Created At' value='createdAt' />
            <ExcelColumn label='Updated At' value='updatedAt' />
            <ExcelColumn label='Access To Employees' value='employeesAccess' />
            <ExcelColumn label='Access To Audit' value='auditAccess' />
            <ExcelColumn label='Access To Clients' value='clientsAccess' />
            <ExcelColumn label='Access To Reservations' value='reservationsAccess' />
            <ExcelColumn label='Access To Orders' value='ordersAccess' />
            <ExcelColumn label='Access To Communicator' value='communicatorAccess' />
            <ExcelColumn label='Access To Profile' value='profileAccess' />            
         </ExcelSheet>
      </ExcelFile>
   );
}
 
export default EmployeesExportToExcelSheet;
