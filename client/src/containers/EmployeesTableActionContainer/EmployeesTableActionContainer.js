import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useLazyQuery } from '@apollo/react-hooks'
import { USER_EMPLOYEES_QUERY } from '../../graphql/employee/query'

import actions from '../../app/employees/duck/actions'
import thunkActions from '../../app/employees/duck/thunks'
import { employeesTableSortBy } from '../../assets/data/selectData'
import { useTableActions } from '../../hooks/useTableActions'

import TableActions from '../../components/Table/TableActions/TableActions'

const EmployeesTableActionContainer = () => {
   const dispatch = useDispatch()
   const {sortBy, sortOrder} = useSelector(state => state.fetchedUserEmployees)
   const [runQuery, {error, data}] = useLazyQuery(USER_EMPLOYEES_QUERY)
   const [reload, handleReloadData, handleSortOrder, handleSortBy] = useTableActions(actions)
   const [submit, setSubmit] = React.useState(true)
   
   const handleOnClick = () => {   
      runQuery()
      handleReloadData()
      setSubmit(true)
   }

   if(data && submit) {
      dispatch(actions.clearEmployeesAction())
      dispatch(thunkActions.fetchLoggedUserEmployees(data.userEmployees))
      setSubmit(false)
   }

   return (  
      <>
         <TableActions
            selectOptions={employeesTableSortBy}
            textButton='Reload Employees'
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
 
export default EmployeesTableActionContainer;