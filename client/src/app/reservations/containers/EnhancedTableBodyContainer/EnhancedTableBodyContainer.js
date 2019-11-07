import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import actions from '../../duck/actions';

import TestTable from '../../../../components/Reservations/TestTable/TestTable';
import Pagination from '../../../../components/Reservations/TestTable/Pagination';


const EnhancedTableBodyContainer = () => {   
   const {userReservations} = useSelector(state => state.fetchedUserReservations.reservations)
   const {sortBy, sortOrder, selected, checkSelectAll} = useSelector(state => state.fetchedUserReservations)
   const dispatch = useDispatch();
   const [currentPage, setCurrentPage] = useState(1);
   const [dataPerPage] = useState(5);

   const data = [].concat(userReservations);

   const indexOfLastData = currentPage * dataPerPage;
   const indexOfFirstData = indexOfLastData - dataPerPage;
   const currentData = data.slice(indexOfFirstData, indexOfLastData);

   const paginate = (pageNumber) => setCurrentPage(pageNumber)

   const compare = (a, b) => {
      const elementA = typeof a[sortBy] === 'string' ? a[sortBy].trim() : a[sortBy];
      const elementB = typeof b[sortBy] === 'string' ? b[sortBy].trim() : b[sortBy];
      let comparison = 0;

      if(elementA > elementB) comparison = sortOrder === 'asc' ? 1 : -1
      if(elementA < elementB) comparison = sortOrder === 'asc' ? -1 : 1

      return comparison
   }

   const handleSortBy = (event) => {
      dispatch(actions.sortReservationsByAction(event.target.value))
   }

   const handleSortOrder = (order) => {
      dispatch(actions.sortReservationsOrderAction(order))
   }

   const handleSelectElement = (id) => {
      if(selected.indexOf(id) === -1) dispatch(actions.selectNewElementAction(id))
      if(selected.indexOf(id) > -1) dispatch(actions.unselectElementAction(id))
   }

   const handleSelectAllElements = () => {
      dispatch(actions.toggleSelectAllAction(!checkSelectAll))

      if(!checkSelectAll) {
         userReservations.map(reservation => {
            if(!selected.includes(reservation.id)) {
               return dispatch(actions.selectNewElementAction(reservation.id))
            } 
         })
      } else {
         userReservations.map(reservation => {
            if(selected.includes(reservation.id)) {
               return dispatch(actions.unselectElementAction(reservation.id))
            } 
         })
      }
   }

   data.sort(compare)

   return (
      <>
         {userReservations 
            ?  <> 
                  <TestTable 
                     userReservations={currentData}
                     sortBy={sortBy}
                     selected={selected}
                     handleSortBy={handleSortBy}
                     handleSortOrder={handleSortOrder}
                     handleSelectElement={handleSelectElement}
                     handleSelectAllElements={handleSelectAllElements}
                  />
                  <Pagination 
                     dataPerPage={dataPerPage} 
                     totalDataAmount={data.length} 
                     paginate={paginate}
                  />
               </>
            :  <div>LOADING</div>
         }
      </>
   )
}
 
export default EnhancedTableBodyContainer;