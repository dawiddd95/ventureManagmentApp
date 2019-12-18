import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import actions from '../../duck/actions';

import LoadingDataSpinner from '../../../../components/Animations/LoadingDataSpinner/LoadingDataSpinner';
import ReservationsTable from '../../../../components/Reservations/ReservationsTable/ReservationsTable';
import Pagination from '../../../../components/Pagination/Pagination';


const ReservationsTableContainer = () => {   
   const dispatch = useDispatch();
   const [currentPage, setCurrentPage] = useState(1);
   const [markedReservation, setMarkedReservation] = useState('');
   const {userReservations} = useSelector(state => state.fetchedUserReservations.reservations)
   const {
      filter, 
      searchingReservations, 
      sortBy, 
      sortOrder, 
      selected, 
      checkSelectAll, 
      pagination 
   } = useSelector(state => state.fetchedUserReservations)
   
   const data = !filter ? [].concat(userReservations) : [].concat(searchingReservations);

   const dataPerPage = parseInt(pagination, 10);  // 
   const indexOfLastData = currentPage * dataPerPage;
   const indexOfFirstData = indexOfLastData - dataPerPage;
   const currentData = data.slice(indexOfFirstData, indexOfLastData);

   

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

   

   const handleDeleteSearchingElements = (selectedIds) => {
      dispatch(actions.deleteSearchingElementsAction(selectedIds))
   }

   currentData.sort(compare)

   return (
      <>
         {!userReservations 
            ?  <LoadingDataSpinner isSmall={true} />
            :  <> 
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
               </> 
         }
      </>
   )
}
 
export default ReservationsTableContainer;