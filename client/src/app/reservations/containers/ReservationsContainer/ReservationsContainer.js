import React from 'react';
import {useDispatch} from 'react-redux';
import {Query} from 'react-apollo';

import {USER_RESERVATIONS_QUERY} from '../../../../graphql/reservation/query';
import thunkActions from '../../duck/thunks';

import Reservations from '../../../../components/Reservations/Reservations';
import LoadingPage from '../../../../components/LoadingPage/LoadingPage';


const ReservationsContainer = () => {
   const dispatch = useDispatch()

   return (  
      <>
         <Query query={USER_RESERVATIONS_QUERY}>
            {({loading, error, data}) => {
               if(loading) return <LoadingPage />
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