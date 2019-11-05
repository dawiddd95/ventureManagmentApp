//  Tutaj tylko działania redux to filtrowania, sortowania etc... (W Duck reservations)
import React from 'react';
import {useSelector} from 'react-redux';

import EnhancedTableBody from '../../../../components/Reservations/EnhancedTableBody/EnhancedTableBody';


const EnhancedTableBodyContainer = () => {   
   const {userReservations} = useSelector(state => state.fetchedUserReservations.reservations);

   // Zatrzymanie przesłania propsu dopóki nie pobrało stanu z reduxa
   return (
      <>
         {userReservations 
            ?  <EnhancedTableBody 
                  userReservations={userReservations}
               />
            :  <div>LOADING</div>
         }
      </>
   )
}
 
export default EnhancedTableBodyContainer;