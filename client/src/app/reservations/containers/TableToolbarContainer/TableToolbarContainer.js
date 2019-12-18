import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import actions from '../../duck/actions';

import TableToolbar from '../../../../components/TableToolbar/TableToolbar';


const TableToolbarContainer = () => {
   const dispatch = useDispatch()
   const {selected} = useSelector(state => state.fetchedUserReservations)

   const clearSelectedAmount = () => {
      dispatch(actions.resetSelectedAction([]))
      dispatch(actions.toggleSelectAllAction(false))
   }

   const handleDeleteSearchingElements = (selectedIds) => {
      dispatch(actions.deleteSearchingElementsAction(selectedIds))
   }

   return (  
      <>
         <TableToolbar 
            selected={selected} 
            clearSelectedAmount={clearSelectedAmount}
            handleDeleteSearchingElements={handleDeleteSearchingElements}
         />
      </>
   );
}
 
export default TableToolbarContainer;
