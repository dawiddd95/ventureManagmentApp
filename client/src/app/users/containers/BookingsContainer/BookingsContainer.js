import React from 'react';
import * as S from './StyledBookingsContainer';

import AppNavbar from '../../../../components/AppNavbar/AppNavbar/AppNavbar';
import Bookings from '../../../../components/Bookings/Bookings/Bookings';

const BookingsContainer = () => {
   // const dispatch = useDi- spatch();
   // //loggedUser w finalnej wersji byłoby userBookings
   // const loggedUser = useSelector(state => state.fetchLoggedUser);
   // //const userBookings = useSelector(state => state.fetchUserBookings);

   // useEffect(() => {
   //    // dispatch(thunkActions.fetchBookingsAction())
   //    dispatch(thunkActions.fetchLoggedUserAction())
   // }, [])

   // //przekazujemy te dane do komponentu <Bookings />

   const [visibility, setVisibility] = React.useState(true);

   const showHideMenu = () => {
      setVisibility(!visibility)
   }

   return (  
      <S.Wrapper>
         <AppNavbar 
            avatar='Tutaj pobrac z bazy danych dane o avatarze - sciezke miniaturki'
            visible={visibility}
            showHideMenu={showHideMenu}
         />
         <Bookings 
            bookings='tutaj obiekt bookingów z bazy danych'  
            visible={visibility}
         />
      </S.Wrapper>
   );
}
 
export default BookingsContainer;
