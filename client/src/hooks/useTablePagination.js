import {useDispatch} from 'react-redux'

export const useTablePagination = (actions, fetchedData, pagination) => {
   const dispatch = useDispatch()

   const data = [].concat(fetchedData)
   const pageNumbers = [];

   for (let i = 1; i <= Math.ceil(data.length / pagination); i++) {
      pageNumbers.push(i);
   }

   const paginate = (pageNumber) => {
      dispatch(actions.currentPageAction(pageNumber))
   }

   const handleSetPagination = (event) => {
      dispatch(actions.paginationValueAction(event.target.value))
      dispatch(actions.currentPageAction(1))
   }

   return [data, pageNumbers, paginate, handleSetPagination]
}