import React from 'react';
import {useSelector} from 'react-redux';

import actions from '../../app/reservations/duck/actions';
import { useTablePagination } from '../../hooks/useTablePagination';

import TablePagination from '../../components/Table/TablePagination/TablePagination';


const ReservationsTablePaginationContainer = () => {
   const {reservations, pagination, currentPage} = useSelector(state => state.fetchedUserReservations)   

   const [data, pageNumbers, paginate, handleSetPagination] = useTablePagination(
      actions, 
      reservations, 
      pagination
   )

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
 
export default ReservationsTablePaginationContainer;