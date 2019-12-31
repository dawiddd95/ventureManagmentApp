import React from 'react';
import {useDispatch} from 'react-redux';
import { useQuery } from '@apollo/react-hooks';

import { USER_RESERVATIONS_QUERY } from '../../graphql/reservation/query';
import actions from '../../app/reservations/duck/actions';
import thunkActions from '../../app/reservations/duck/thunks';

import LoadingPage from '../../pages/LoadingPage/LoadingPage';
import FetchError from '../../components/FetchError/FetchError';
import ReservationsPage from '../../pages/ReservationsPage/ReservationsPage';


const FetchLoggedUserReservations = () => {
   const dispatch = useDispatch();
   const { loading, error, data } = useQuery(USER_RESERVATIONS_QUERY);

   if(loading) return <LoadingPage />
   if(error) return <FetchError />

   if(data) {
      dispatch(actions.clearReservationsAction())
      dispatch(thunkActions.fetchLoggedUserReservations(data.userReservations))
   }

   return <ReservationsPage />
}
 
export default FetchLoggedUserReservations;