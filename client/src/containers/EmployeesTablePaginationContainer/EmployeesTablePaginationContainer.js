import React from 'react';
import {useSelector} from 'react-redux';

import actions from '../../app/employees/duck/actions';
import { useTablePagination } from '../../hooks/useTablePagination';

import TablePagination from '../../components/Table/TablePagination/TablePagination';


const EmployeesTablePaginationContainer = () => {
   const {employees, pagination, currentPage} = useSelector(state => state.fetchedUserEmployees)   

   const [data, pageNumbers, paginate, handleSetPagination] = 
      useTablePagination(actions, employees, pagination)

   return (  
      <>
         {data.length > 0 && <TablePagination
            pageNumbers={pageNumbers}
            currentPage={currentPage}
            paginationValue={pagination}
            paginate={paginate}
            handleSetPagination={handleSetPagination}
         />}
      </>
   );
}
 
export default EmployeesTablePaginationContainer;