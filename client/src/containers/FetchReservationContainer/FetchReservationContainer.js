import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_USER_RESERVATION_QUERY } from '../../graphql/reservation/query'

import LoadingPage from '../../pages/LoadingPage/LoadingPage';
import FetchError from '../../components/FetchError/FetchError'
import EditReservationPage from '../../pages/EditReservationPage/EditReservationPage';


const FetchReservationContainer = ({match}) => {
   const { loading, error, data } = useQuery(GET_USER_RESERVATION_QUERY, {
      variables: {id: parseInt(match.params.id, 10)}
   });

   if(loading) return <LoadingPage />
   if(error) return <FetchError />

   return <EditReservationPage reservation={data.getUserReservation} />
}
 
export default FetchReservationContainer;