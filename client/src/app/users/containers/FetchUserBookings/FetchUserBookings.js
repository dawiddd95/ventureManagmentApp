import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import thunkActions from '../../duck/thunks';
import Bookings from '../../../../components/Home/Bookings/Bookings';

const FetchUserBookings = () => {
   const dispatch = useDispatch();
   // loggedUser w finalnej wersji byłoby userBookings
   const loggedUser = useSelector(state => state.fetchLoggedUser);
   // const userBookings = useSelector(state => state.fetchUserBookings);

   useEffect(() => {
      // dispatch(thunkActions.fetchBookingsAction())
      dispatch(thunkActions.fetchLoggedUserAction())
   }, [])

   return (  
      <div>
         <Bookings 
            //bookings={userBookings}
            bookings={loggedUser}
         />
      </div>
   );
}
 
export default FetchUserBookings;