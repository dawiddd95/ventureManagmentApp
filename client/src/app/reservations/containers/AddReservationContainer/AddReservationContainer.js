import React from 'react';

import AddEditReservation from '../../../../components/Reservations/AddEditReservation/AddEditReservation';


const AddReservationContainer = () => {
   return (  
      <>
         <AddEditReservation isEdit={false} />
      </>
   );
}
 
export default AddReservationContainer;