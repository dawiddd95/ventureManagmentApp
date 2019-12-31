import React from 'react'
import {Redirect} from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import { UPDATE_RESERVATION_MUTATION } from '../../graphql/reservation/mutation'
import { USER_RESERVATIONS_QUERY } from '../../graphql/reservation/query'

import AddEditReservationForm from '../../components/Reservations/AddEditReservationForm/AddEditReservationForm'


const EditReservationContainer = ({reservation}) => {
   const [mutation, { data }] = useMutation(UPDATE_RESERVATION_MUTATION, {
      refetchQueries: [{query: USER_RESERVATIONS_QUERY}]
   });

   const [statusValue, setStatusValue] = React.useState({
      value: reservation.status, label: reservation.status
   });

   const handleOnChange = (value) => {
      setStatusValue(value)
   }

   if(data) return <Redirect to='/user/reservations'/>
   

   return (
      <AddEditReservationForm
         isEdit={true}
         statusValue={statusValue}
         reservation={reservation}
         mutation={mutation}
         handleOnChange={handleOnChange}
      />
   )
}
 
export default EditReservationContainer;