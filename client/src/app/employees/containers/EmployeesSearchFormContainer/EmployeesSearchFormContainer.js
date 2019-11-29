import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { searchEmployees } from '../../../../helpers/searchEmployees';

import EmployeesSearchForm from '../../../../components/EmployeesPage/EmployeesSearchForm/EmployeesSearchForm';


const EmployeesSearchFormContainer = () => {
   const dispatch = useDispatch();
   const {userEmployees} = useSelector(state => state.fetchedUserEmployees.employees);

   const handleSearchReservations = (values) => {
      // Tutaj oddzielny helper do Employees

      // 1. Ogarnąć helper
      // 2. Stworzyć dispatche w duck dla helpera
      // 3. ogarnąć formularz wyszukiwania (Nie reużywalny, bo juz samo edit jest reuzywalne)
      searchEmployees(values, dispatch, userEmployees)
   }

   return (  
      // 0. Zrobić wygląd formularzu wyszukiwania
      <EmployeesSearchForm
         //handleSearchReservations={handleSearchReservations}
      />
   );
}
 
export default EmployeesSearchFormContainer;