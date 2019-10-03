import React from 'react';
import {Link} from 'react-router-dom';

import LoadingSpinner from '../../Animations/LoadingSpinner/LoadingSpinner';

const Bookings = ({bookings}) => {
   const logout = () => {
      localStorage.removeItem('session'); 
   }

   return (  
      <div>
         {bookings.user.name} : {bookings.user.surname} : {bookings.user.email}
         {/* tutaj mialny juz swoje komponenty 
               Navigation z paskiem gornym       => {  Takie powtarzalne komponenty w kazdej podstronie dac luzem wHome jako foldery luzne
               sideMenu z paskiem lewym bocznym => {
               formularz dodawania BookingsAddForm
               lista istniejacych BookingsList
         */}
         <Link onClick={logout} to='/auth/login'>LOG OUT</Link>
         <LoadingSpinner small={false} />
      </div>
   );
}
 
export default Bookings;