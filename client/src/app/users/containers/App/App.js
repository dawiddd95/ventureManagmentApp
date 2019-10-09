import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import * as S from './StyledApp';

import thunkActions from '../../duck/thunks';

import Navbar from '../../../../components/Navbar/Navbar';
import AsideContent from '../../../../components/AsideMenu/AsideContent/AsideContent';
import UserRoutes from '../../../../routes/UserRoutes';

const App = () => {
   const [menuVisibility, setMenuVisibility] = React.useState(false)
   
   const dispatch = useDispatch();
   // loggedUser w finalnej wersji byłoby userBookings
   const loggedUser = useSelector(state => state.fetchLoggedUser);
   // const userBookings = useSelector(state => state.fetchUserBookings);

   const {user} = loggedUser;

   useEffect(() => {
      // dispatch(thunkActions.fetchBookingsAction())
      dispatch(thunkActions.fetchLoggedUserAction())
   }, [])
   // przekazujemy te dane do komponentu 
   return (  
      <S.Wrapper>
         <Navbar user={user}/>
         {/* Niech odrazu teraz pokazuje UserRoutes */}
         {/* <AsideContent user={user} /> */}
         <UserRoutes /> 
      </S.Wrapper>
   );
}
 
export default App;