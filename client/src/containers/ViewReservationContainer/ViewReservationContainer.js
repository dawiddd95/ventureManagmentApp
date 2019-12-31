import React from 'react';
import {Query} from 'react-apollo';
import { GET_USER_RESERVATION_QUERY } from '../../graphql/reservation/query';

import LoadingPage from '../../pages/LoadingPage/LoadingPage';
import ViewReservationPage from '../../pages/ViewReservationPage/ViewReservationPage';


const ViewReservationContainer = ({match}) => {
   return (  
      <>
         <Query query={GET_USER_RESERVATION_QUERY} variables={{id: parseInt(match.params.id, 10)}}>
            {({loading, error, data}) => {
               if(loading) return <LoadingPage />
               else return <ViewReservationPage data={data} />
            }}
         </Query>
      </>
   );
}
 
export default ViewReservationContainer;