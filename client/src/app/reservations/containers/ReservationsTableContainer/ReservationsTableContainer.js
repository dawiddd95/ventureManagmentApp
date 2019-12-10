import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import * as S from './StyledReservationsTableContainer';
import actions from '../../duck/actions';

import TableActions from '../../../../components/Table/TableActions/TableActions';
import TableToolbar from '../../../../components/Table/TableToolbar/TableToolbar';
import ReservationsTable from '../../../../components/Reservations/ReservationsTable/ReservationsTable';
import Pagination from '../../../../components/Table/Pagination/Pagination';


const ReservationsTableContainer = () => {   
   const dispatch = useDispatch();
   const [currentPage, setCurrentPage] = useState(1);
   const [markedReservation, setMarkedReservation] = useState('');
   const [reload, setReload] = React.useState(false);
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

   const handleMarkReservation = (id) => {
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
      setReload(true)
      setTimeout(() => setReload(false), 3000)
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
                     selectOptions={[
                        {value: 'id', label: 'Reservation ID'},
                        {value: 'client', label: 'Client'},
                        {value: 'room', label: 'Room'},
                        {value: 'status', label: 'Status'},
                        {value: 'reservationStartDate', label: 'Start Reservation Date'},
                        {value: 'reservationStartTime', label: 'Start Reservation Time'},
                        {value: 'reservationEndDate', label: 'End Reservation Date'},
                        {value: 'reservationEndTime', label: 'End Reservation Time'},
                        {value: 'createdAt', label: 'Created At Date'},
                        {value: 'updatedAt', label: 'Updated At Date'}
                     ]}
                     textButton='Reload Reservations'
                     sortBy={sortBy}
                     sortOrder={sortOrder}
                     reload={reload}
                     handleReloadData={handleReloadReservations}
                     handleSortOrder={handleSortOrder}
                     handleSortBy={handleSortBy}
                  />        
                  <TableToolbar
                     selected={selected} 
                     clearSelectedAmount={clearSelectedAmount}
                     handleDeleteSearchingElements={handleDeleteSearchingElements}
                  />
                  <ReservationsTable
                     pageUserReservations={currentData}
                     checkSelectAll={checkSelectAll}
                     markedReservation={markedReservation}
                     selected={selected}
                     filter={filter}
                     handleMarkReservation={handleMarkReservation}
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