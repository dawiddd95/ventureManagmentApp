import React from 'react';
import {useSelector} from 'react-redux';
import * as S from './StyledBookingsContainer';

import Bookings from '../../../../components/Bookings/Bookings/Bookings';


const BookingsContainer = () => {
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
      <S.Wrapper>
         <Bookings 
            bookings='tutaj obiekt bookingów z bazy danych'  
         />
      </S.Wrapper>
   );
}
 
export default BookingsContainer;





// BACK UP ////////////////////////////////////////////////////////////////////////////
// import React from 'react';
// import {useSelector} from 'react-redux';
// import * as S from './StyledBookingsContainer';

// import AppNavbar from '../../../../components/AppNavbar/AppNavbar/AppNavbar';
// import AppNavbarContainer from '../../../navbar/containers/AppNavbarContainer/AppNavbarContainer';
// import Bookings from '../../../../components/Bookings/Bookings/Bookings';


// const BookingsContainer = () => {
//    // const dispatch = useDispatch();
//    // //loggedUser w finalnej wersji byłoby userBookings
//    // const loggedUser = useSelector(state => state.fetchLoggedUser);
//    // //const userBookings = useSelector(state => state.fetchUserBookings);

//    // useEffect(() => {
//    //    // dispatch(thunkActions.fetchBookingsAction())
//    //    dispatch(thunkActions.fetchLoggedUserAction())
//    // }, [])

//    // //przekazujemy te dane do komponentu <Bookings />

//    const menuVisibility = useSelector(state => state.menuVisibility);

//    return (  
//       <S.Wrapper>
//          {/* Wywołanie <AppNavbarContainer /> zamiast <AppNavbar />*/}   
//          <AppNavbarContainer 
//             avatar='Tutaj pobrac z bazy danych dane o avatarze - sciezke miniaturki'
//          />
//          <Bookings 
//             bookings='tutaj obiekt bookingów z bazy danych'  
//             visible={menuVisibility.visible}
//          />
//       </S.Wrapper>
//    );
// }
 
// export default BookingsContainer;