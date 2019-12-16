import React from 'react';
import {Query} from 'react-apollo';
import { GET_USER_RESERVATION_QUERY } from '../../../../graphql/reservation/query';

import LoadingPage from '../../../../components/LoadingPage/LoadingPage';
import AddEditReservation from '../../../../components/Reservations/AddEditReservation/AddEditReservation';


const EditReservationContainer = ({match}) => {
   return (  
      <>
         <Query query={GET_USER_RESERVATION_QUERY} variables={{id: parseInt(match.params.id, 10)}}>
            {({loading, error, data}) => {
               if(loading || data === undefined) return <LoadingPage />
               else return <AddEditReservation isEdit={true} data={data} />
            }}
         </Query>
      </>
   );
}
 
export default EditReservationContainer;