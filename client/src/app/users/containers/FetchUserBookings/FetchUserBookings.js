import React from 'react';

import Bookings from '../../../../components/Bookings/Bookings/Bookings';

const FetchUserBookings = () => {
   // const dispatch = useDispatch();
   // //loggedUser w finalnej wersji byłoby userBookings
   // const loggedUser = useSelector(state => state.fetchLoggedUser);
   // //const userBookings = useSelector(state => state.fetchUserBookings);

   // useEffect(() => {
   //    // dispatch(thunkActions.fetchBookingsAction())
   //    dispatch(thunkActions.fetchLoggedUserAction())
   // }, [])

   // //przekazujemy te dane do komponentu <Bookings />
   return (  
      <>
         <Bookings bookings='tutaj obiekt bookingów'/>
      </>
   );
}
 
export default FetchUserBookings;
