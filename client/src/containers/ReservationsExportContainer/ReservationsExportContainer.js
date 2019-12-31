import React from 'react';
import {useSelector} from 'react-redux'

import ReservationsExportToExcel from '../../components/Reservations/ReservationsExportToExcel/ReservationsExportToExcel';


const ReservationsExportContainer = () => {
   const {reservations} = useSelector(state => state.fetchedUserReservations)   

   return (  
      <ReservationsExportToExcel 
         name='Reservations'
         text='Export to Excel' 
         reservations={reservations}
      />
   );
}
 
export default ReservationsExportContainer;