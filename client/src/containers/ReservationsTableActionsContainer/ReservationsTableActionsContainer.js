import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useLazyQuery } from '@apollo/react-hooks'
import { USER_RESERVATIONS_QUERY } from '../../graphql/reservation/query'

import actions from '../../app/reservations/duck/actions'
import thunkActions from '../../app/reservations/duck/thunks'
import { tableSortByData } from '../../assets/data/selectData'
import { useTableActions } from '../../hooks/useTableActions'

import TableActions from '../../components/Table/TableActions/TableActions'


const ReservationsTableActionsContainer = () => {
   const dispatch = useDispatch()
   const {sortBy, sortOrder} = useSelector(state => state.fetchedUserReservations)
   const [runQuery, {error, data}] = useLazyQuery(USER_RESERVATIONS_QUERY)
   const [reload, handleReloadData, handleSortOrder, handleSortBy] = useTableActions(actions)
   const [submit, setSubmit] = React.useState(true)
   
   const handleOnClick = () => {   
      runQuery()
      handleReloadData()
      setSubmit(true)
   }

   if(data && submit) {
      dispatch(actions.clearReservationsAction())
      dispatch(thunkActions.fetchLoggedUserReservations(data.userReservations))
      setSubmit(false)
   }


   return (  
      <>
         <TableActions
            selectOptions={tableSortByData}
            textButton='Reload Reservations'
            sortBy={sortBy}
            sortOrder={sortOrder}
            reload={reload}
            handleSortOrder={handleSortOrder}
            handleSortBy={handleSortBy}
            handleOnClick={handleOnClick}
         />
      </>
   );
}
 
export default ReservationsTableActionsContainer;