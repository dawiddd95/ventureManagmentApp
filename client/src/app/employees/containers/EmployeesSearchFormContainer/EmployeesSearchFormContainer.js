import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { searchEmployees } from '../../../../helpers/searchEmployees';

import EmployeesSearchForm from '../../../../components/EmployeesPage/EmployeesSearchForm/EmployeesSearchForm';


const EmployeesSearchFormContainer = () => {
   const dispatch = useDispatch();
   const {userEmployees} = useSelector(state => state.fetchedUserEmployees.employees);

   const handleSearchEmployees = (values) => {
      // 1. Ogarnąć helper
      // 2. Stworzyć dispatche w duck dla helpera
      searchEmployees(values, dispatch, userEmployees)
   }

   return (  
      <EmployeesSearchForm
         handleSearchEmployees={handleSearchEmployees}
      />
   );
}
 
export default EmployeesSearchFormContainer;