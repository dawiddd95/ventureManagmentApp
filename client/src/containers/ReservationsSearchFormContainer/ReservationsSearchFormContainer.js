import React from 'react';
import {useDispatch} from 'react-redux';
import { useLazyQuery } from '@apollo/react-hooks'
import { USER_RESERVATIONS_QUERY } from '../../graphql/reservation/query'

import actions from '../../app/reservations/duck/actions'
import thunkActions from '../../app/reservations/duck/thunks'
import { searchReservations } from '../../helpers/searchReservations';

import ReservationsSearchForm from '../../components/Reservations/ReservationsSearchForm/ReservationsSearchForm';


const ReservationsSearchFormContainer = () => {
   const dispatch = useDispatch();
   const [runQuery, {error, data}] = useLazyQuery(USER_RESERVATIONS_QUERY)
   const [submit, setSubmit] = React.useState(true)
   const [formValues, setFormValues] = React.useState(null)
   const [status, setStatus] = React.useState(null);

   const handleSearchReservations = (values) => {
      setFormValues(values)
      runQuery()
      setSubmit(true)   
   }

   if(data && submit) {
      dispatch(actions.clearReservationsAction())
      dispatch(thunkActions.fetchLoggedUserReservations(data.userReservations))
      searchReservations(formValues, dispatch, data.userReservations)
      setSubmit(false)
   }

   const handleOnChange = (value) => {
      setStatus(value)
   } 

   return (  
      <ReservationsSearchForm 
         status={status}
         handleSearchReservations={handleSearchReservations}
         handleOnChange={handleOnChange}
      />
   );
}
 
export default ReservationsSearchFormContainer;