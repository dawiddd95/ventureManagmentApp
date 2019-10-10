import React from 'react';
import * as S from './StyledBookingsContainer';

import AppNavbar from '../../../../components/AppNavbar/AppNavbar';
import Bookings from '../../../../components/Bookings/Bookings/Bookings';

// ZMIENIC NAZWE NA BOOKINGS CONTAINER
// Dodac chyba redux tutaj do menu
// App z container usunac
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

   const [visibility, setVisibility] = React.useState(true);

   const showHideMenu = () => {
      setVisibility(!visibility)
   }

   return (  
      <S.Wrapper>
         <AppNavbar 
            visible={visibility}
            showHideMenu={showHideMenu}
         />
         <Bookings 
            bookings='tutaj obiekt bookingów'  
            visible={visibility}
         />
      </S.Wrapper>
   );
}
 
export default FetchUserBookings;
