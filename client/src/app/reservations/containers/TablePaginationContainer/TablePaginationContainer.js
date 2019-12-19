import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import actions from '../../duck/actions';

import TablePagination from '../../../../components/Table/TablePagination/TablePagination';


const TablePaginationContainer = () => {
   const dispatch = useDispatch()
   const {userReservations} = useSelector(state => state.fetchedUserReservations.reservations)
   const {
      filter, 
      searchingReservations, 
      pagination, 
      currentPage
   } = useSelector(state => state.fetchedUserReservations)   

   const data = !filter ? [].concat(userReservations) : [].concat(searchingReservations);

   const paginate = (pageNumber) => {
      dispatch(actions.currentPageAction(pageNumber))
   }

   const handleSetPagination = (event) => {
      dispatch(actions.paginationValueAction(event.target.value))
      dispatch(actions.currentPageAction(1))
   }

   return (  
      <>
         <TablePagination
            dataPerPage={pagination}
            totalDataAmount={data.length}
            currentPage={currentPage}
            paginationValue={pagination}
            paginate={paginate}
            handleSetPagination={handleSetPagination}
         />
      </>
   );
}
 
export default TablePaginationContainer;