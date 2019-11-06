import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import actions from '../../duck/actions';

import TestTable from '../../../../components/Reservations/TestTable/TestTable';


const EnhancedTableBodyContainer = () => {   
   const {userReservations} = useSelector(state => state.fetchedUserReservations.reservations)
   const {sortBy, sortOrder} = useSelector(state => state.fetchedUserReservations)
   const dispatch = useDispatch();

   const data = [].concat(userReservations);

   // a i b reprezentują jeden element i drugi do porównania dla a i b mamy dostęp do wszystkich pól obiektu data
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

   data.sort(compare)

   // Zatrzymanie przesłania propsu dopóki nie pobrało stanu z reduxa
   return (
      <>
         {userReservations 
            ?  <TestTable 
                  userReservations={data}
                  sortBy={sortBy}
                  sortOrder={sortOrder}
                  handleSortBy={handleSortBy}
                  handleSortOrder={handleSortOrder}
               />
            :  <div>LOADING</div>
         }
      </>
   )
}
 
export default EnhancedTableBodyContainer;