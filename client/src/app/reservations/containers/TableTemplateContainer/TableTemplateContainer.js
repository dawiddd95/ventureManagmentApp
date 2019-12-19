import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import actions from '../../duck/actions';

import TableTemplate from '../../../../components/Table/TableTemplate/TableTemplate';


const TableTemplateContainer = () => {
   const dispatch = useDispatch()
   const [markedReservation, setMarkedReservation] = useState('')
   const {userReservations} = useSelector(state => state.fetchedUserReservations.reservations)
   const {
      filter, 
      searchingReservations, 
      sortBy, 
      sortOrder, 
      selected, 
      checkSelectAll, 
      currentPage,
      pagination 
   } = useSelector(state => state.fetchedUserReservations)

   const data = !filter ? [].concat(userReservations) : [].concat(searchingReservations);
   const indexOfLastData = currentPage * pagination;
   const indexOfFirstData = indexOfLastData - pagination;
   const currentData = data.slice(indexOfFirstData, indexOfLastData);

   const compare = (a, b) => {
      const elementA = typeof a[sortBy] === 'string' ? a[sortBy].trim() : a[sortBy];
      const elementB = typeof b[sortBy] === 'string' ? b[sortBy].trim() : b[sortBy];
      let comparison = 0;

      if(elementA > elementB) comparison = sortOrder === 'asc' ? 1 : -1
      if(elementA < elementB) comparison = sortOrder === 'asc' ? -1 : 1

      return comparison
   }

   currentData.sort(compare)

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

   const handleDeleteFromSearchingElements = (selectedIds) => {
      dispatch(actions.deleteSearchingElementsAction(selectedIds))
   }

   return ( 
      <>
         <TableTemplate
            currentData={currentData}
            checkSelectAll={checkSelectAll}
            markedRow={markedReservation}
            selected={selected}
            filter={filter}
            handleMarkRow={handleMarkReservation}
            handleSelectElement={handleSelectElement}
            handleSelectAllElements={handleSelectAllElements}
            handleDeleteFromSearchingElements={handleDeleteFromSearchingElements}
         />
      </>
   );
}
 
export default TableTemplateContainer;