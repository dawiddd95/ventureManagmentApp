import React from 'react';
import * as S from './StyledNewBooking';

import AppNavbar from '../../AppNavbar/AppNavbar/AppNavbar';
import AddNewBooking from '../AddNewBooking/AddNewBooking';


const NewBooking = () => {
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
         <AddNewBooking
            bookings='tutaj obiekt bookingów z bazy danych'  
            visible={visibility}
         />
      </S.Wrapper>
   );
}
 
export default NewBooking;