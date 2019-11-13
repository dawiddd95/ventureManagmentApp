import React from 'react';
import {useDispatch} from 'react-redux';
import {Query} from 'react-apollo';

import {USER_RESERVATIONS_QUERY} from '../../../../graphql/reservation/query';
import thunkActions from '../../duck/thunks';

import Reservations from '../../../../components/Reservations/Reservations/Reservations';


const ReservationsContainer = () => {
   const dispatch = useDispatch()

   return (  
      <>
         <Query query={USER_RESERVATIONS_QUERY}>
            {({loading, error, data}) => {
               if(data) dispatch(thunkActions.fetchLoggedUserReservations(data))
               
               return (
                  <Reservations />
               )
            }}
         </Query>
      </>
   );
}
 
export default ReservationsContainer;