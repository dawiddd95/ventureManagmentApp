import React from 'react';
import {useDispatch} from 'react-redux';


export const useTableActions = (actions) => {
   const [reload, setReload] = React.useState(false);
   const dispatch = useDispatch(); 

   const handleReloadData = () => {
      dispatch(actions.resetSelectedAction([]))
      dispatch(actions.toggleSelectAllAction(false))
      dispatch(actions.currentPageAction(1))
      setReload(true)
      setTimeout(() => setReload(false), 3000)
   }

   const handleSortOrder = (order) => {
      if(order === 'asc') dispatch(actions.sortElementsOrderAction('desc'))
      else dispatch(actions.sortElementsOrderAction('asc'))
   }

   const handleSortBy = (event) => {
      dispatch(actions.sortElementsByAction(event.target.value))
   }

   return [reload, handleReloadData, handleSortOrder, handleSortBy]
}