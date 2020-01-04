import React from 'react'
import {useDispatch} from 'react-redux'
import { useLazyQuery } from '@apollo/react-hooks'
import { USER_EMPLOYEES_QUERY } from '../../graphql/employee/query'

import { searchEmployees } from '../../helpers/searchEmployees'
import actions from '../../app/employees/duck/actions'
import thunkActions from '../../app/employees/duck/thunks'

import EmployeesSearchForm from '../../components/Employees/EmployeesSearchForm/EmployeesSearchForm'


const EmployeesSearchFormContainer = () => {
   const dispatch = useDispatch();
   const [runQuery, {error, data}] = useLazyQuery(USER_EMPLOYEES_QUERY)
   const [submit, setSubmit] = React.useState(true)
   const [formValues, setFormValues] = React.useState(null)
   const [privileges, setPrivileges] = React.useState(null);
   const [active, setActive] = React.useState(null);


   const handleSearchEmployees = (values) => {
      setFormValues(values)
      runQuery()
      setSubmit(true)   
   }

   if(data && submit) {
      dispatch(actions.clearEmployeesAction())
      dispatch(thunkActions.fetchLoggedUserEmployees(data.userEmployees))
      searchEmployees(formValues, dispatch, data.userEmployees)
      setSubmit(false)
   }

   const handleOnChange = (value, isMulti) => {
      if(isMulti) setPrivileges(value)
      else if(!isMulti) setActive(value)
   } 

   return (  
      <EmployeesSearchForm
         privileges={privileges}
         active={active}
         handleSearchEmployees={handleSearchEmployees}
         handleOnChange={handleOnChange}
      />
   );
}
 
export default EmployeesSearchFormContainer;