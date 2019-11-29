import React from 'react';
import * as S from './StyledEmployees';

import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import EmployeesActionButtonsContainer from '../../../app/employees/containers/EmployeesActionButtonsContainer/EmployeesActionButtonsContainer';
import EmployeesSearchFormContainer from '../../../app/employees/containers/EmployeesSearchFormContainer/EmployeesSearchFormContainer';

// Tak jak w Reservations jest S.Wrapper przepisujemy, S.MainContent Przepisujemy, S._Box i Header w nim przepisujemy, reszata w S._Box z klockow
// Breadcrumbs z klockow,  

// Logika tabeli i wyszukiwania nie reuzywalna
// ale UI mozna pomyslec czy nei lepiej byłoby reuzywalne

// Disable Enable będzie po zaznaczeniu kilku jak przy delete


const Employees = () => {
   return (  
      <S.Wrapper>
         <S.MainContent>
            <Breadcrumbs
               links={[
                  {name: 'Home', to: '/user/employees'}
               ]}
               navElement='/ Employees'
            />
            <S.Box>
               <S.Header>
                  Employees
               </S.Header>
               <EmployeesActionButtonsContainer />
               <EmployeesSearchFormContainer/>
               {/* <EmployeessTableContainer /> */} 
            </S.Box>
         </S.MainContent>
      </S.Wrapper>
   );
}
 
export default Employees;
