import React from 'react'
import {Redirect} from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import { CREATE_RESERVATION_MUTATION } from '../../graphql/reservation/mutation'
import { USER_RESERVATIONS_QUERY } from '../../graphql/reservation/query'
import { statusData } from '../../assets/data/selectData'

import AddEditReservationForm from '../../components/Reservations/AddEditReservationForm/AddEditReservationForm'


const AddReservationContainer = () => {
   const [mutation, { data }] = useMutation(CREATE_RESERVATION_MUTATION, {
      refetchQueries: [{query: USER_RESERVATIONS_QUERY}]
   });

   const [statusValue, setStatusValue] = React.useState(statusData[0]);

   const handleOnChange = (value) => {
      setStatusValue(value)
   }

   if(data) return <Redirect to='/user/reservations'/>
   

   return (
      <AddEditReservationForm
         isEdit={false}
         statusValue={statusValue}
         reservation={{}}
         mutation={mutation}
         handleOnChange={handleOnChange}
      />
   )
}
 
export default AddReservationContainer;