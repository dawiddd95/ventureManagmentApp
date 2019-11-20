import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import * as S from './StyledReservationsTableContainer';
import actions from '../../duck/actions';

import Pagination from '../../../../components/Reservations/ReservationsTable/Pagination/Pagination';
import TableActions from '../../../../components/Reservations/ReservationsTable/TableActions/TableActions';
import TableToolbar from '../../../../components/Reservations/ReservationsTable/TableToolbar/TableToolbar';
import Table from '../../../../components/Reservations/ReservationsTable/Table/Table';


const ReservationsTableContainer = () => {   
   const dispatch = useDispatch();
   const [currentPage, setCurrentPage] = useState(1);
   const [markedReservation, setMarkedReservation] = useState('');
   const {userReservations} = useSelector(state => state.fetchedUserReservations.reservations)
   const {filter, searchingReservations, sortBy, sortOrder, selected, checkSelectAll, pagination } = useSelector(
      state => state.fetchedUserReservations
   )
   

   const data = !filter ? [].concat(userReservations) : [].concat(searchingReservations);

   const dataPerPage = parseInt(pagination, 10);
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

   const markReservation = (id) => {
      if(markedReservation === id) setMarkedReservation('')
      else setMarkedReservation(id)
   }

   const clearSelectedAmount = () => {
      dispatch(actions.resetSelectedAction([]))
      dispatch(actions.toggleSelectAllAction(false))
   }

   const handleReloadReservations = () => {
      dispatch(actions.filterAction(false))
      dispatch(actions.searchUserReservationsAction([]))
      dispatch(actions.resetSelectedAction([]))
      dispatch(actions.toggleSelectAllAction(false))
      setCurrentPage(1)
   }

   const handleSortBy = (event) => {
      dispatch(actions.sortReservationsByAction(event.target.value))
   }

   const handleSortOrder = (order) => {
      if(order === 'asc') dispatch(actions.sortReservationsOrderAction('desc'))
      else dispatch(actions.sortReservationsOrderAction('asc'))
   }

   const handleSelectElement = (id) => {
      if(selected.indexOf(id) === -1) dispatch(actions.selectNewElementAction(id))
      if(selected.indexOf(id) > -1) dispatch(actions.unselectElementAction(id))
   }

   const handleSelectAllElements = () => {
      dispatch(actions.toggleSelectAllAction(!checkSelectAll))

      if(!checkSelectAll) {
         data.map(reservation => {
            if(!selected.includes(reservation.id)) {
               return dispatch(actions.selectNewElementAction(reservation.id))
            } 
         })
      } else {
         data.map(reservation => {
            if(selected.includes(reservation.id)) {
               return dispatch(actions.unselectElementAction(reservation.id))
            } 
         })
      }
   }

   const handleSetPagination = (event) => {
      dispatch(actions.paginationValueAction(event.target.value))
      setCurrentPage(1)
   }

   const handleDeleteSearchingElements = (selectedIds) => {
      dispatch(actions.deleteSearchingElementsAction(selectedIds))
   }

   currentData.sort(compare)

   return (
      <S.Wrapper>
         {!userReservations 
            ?  <div>LOADING</div>
            :  <> 
                  <TableActions
                     sortBy={sortBy}
                     sortOrder={sortOrder}
                     handleReloadReservations={handleReloadReservations}
                     handleSortOrder={handleSortOrder}
                     handleSortBy={handleSortBy}
                  />        
                  <TableToolbar
                     selected={selected} 
                     clearSelectedAmount={clearSelectedAmount}
                     handleDeleteSearchingElements={handleDeleteSearchingElements}
                  />
                  <Table
                     pageUserReservations={currentData}
                     checkSelectAll={checkSelectAll}
                     markedReservation={markedReservation}
                     markReservation={markReservation}
                     selected={selected}
                     handleSelectElement={handleSelectElement}
                     handleSelectAllElements={handleSelectAllElements}
                     handleDeleteSearchingElements={handleDeleteSearchingElements}
                  />
                  <Pagination 
                     dataPerPage={dataPerPage} 
                     totalDataAmount={data.length} 
                     currentPage={currentPage}
                     paginationValue={pagination}
                     paginate={paginate}
                     handleSetPagination={handleSetPagination}
                  />
               </> 
         }
      </S.Wrapper>
   )
}
 
export default ReservationsTableContainer;