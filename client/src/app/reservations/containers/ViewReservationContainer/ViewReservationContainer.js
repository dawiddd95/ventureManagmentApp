import React from 'react';
import {Query} from 'react-apollo';
import { GET_USER_RESERVATION_QUERY } from '../../../../graphql/reservation/query';

import LoadingPage from '../../../../components/LoadingPage/LoadingPage';
import ViewReservation from '../../../../components/Reservations/ViewReservation/ViewReservation';


const ViewReservationContainer = ({match}) => {
   return (  
      <>
         <Query query={GET_USER_RESERVATION_QUERY} variables={{id: parseInt(match.params.id, 10)}}>
            {({loading, error, data}) => {
               if(loading) return <LoadingPage />
               else return <ViewReservation data={data} />
            }}
         </Query>
      </>
   );
}
 
export default ViewReservationContainer;