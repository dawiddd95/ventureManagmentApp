import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import * as S from './StyledEmployeesTableContainer';
import actions from '../../duck/actions';

import TableActions from '../../../../components/Table/TableActions/TableActions';
import TableToolbar from '../../../../components/EmployeesPage/TableToolbar/TableToolbar';
import EmployeesTable from '../../../../components/EmployeesPage/EmployeesTable/EmployeesTable';
import Pagination from '../../../../components/Table/Pagination/Pagination';


const EmployeesTableContainer = () => {   
   const dispatch = useDispatch();
   const [currentPage, setCurrentPage] = useState(1);
   const [markedEmployee, setMarkedEmployee] = useState('');
   const [reload, setReload] = React.useState(false);
   const {userEmployees} = useSelector(state => state.fetchedUserEmployees.employees)
   const {filter, searchingEmployees, sortBy, sortOrder, selected, checkSelectAll, pagination } = useSelector(
      state => state.fetchedUserEmployees
   )
   
   

   const data = !filter ? [].concat(userEmployees) : [].concat(searchingEmployees);

   const dataPerPage = parseInt(pagination, 10);
   const indexOfLastData = currentPage * dataPerPage;
   const indexOfFirstData = indexOfLastData - dataPerPage;
   const currentData = data.slice(indexOfFirstData, indexOfLastData);

   const paginate = (pageNumber) => setCurrentPage(pageNumber)

   const compare = (a, b) => {
      const elementA = typeof a[sortBy] === 'string' ? a[sortBy].trim() : a[sortBy];
      const elementB = typeof b[sortBy] === 'string' ? b[sortBy].trim() : b[sortBy];
      let comparison = 0;

      if(elementA > elementB) comparison = sortOrder === 'asc' ? 1 : -1
      if(elementA < elementB) comparison = sortOrder === 'asc' ? -1 : 1

      return comparison
   }

   const handleMarkEmployee = (id) => {
      if(markedEmployee === id) setMarkedEmployee('')
      else setMarkedEmployee(id)
   }

   const clearSelectedAmount = () => {
      dispatch(actions.resetSelectedAction([]))
      dispatch(actions.toggleSelectAllAction(false))
   }

   const handleReloadEmployees = () => {
      dispatch(actions.filterAction(false))
      dispatch(actions.searchUserEmployeesAction([]))
      dispatch(actions.resetSelectedAction([]))
      dispatch(actions.toggleSelectAllAction(false))
      setCurrentPage(1)
      setReload(true)
      setTimeout(() => setReload(false), 3000)
   }

   const handleSortBy = (event) => {
      dispatch(actions.sortEmployeesByAction(event.target.value))
   }

   const handleSortOrder = (order) => {
      if(order === 'asc') dispatch(actions.sortEmployeesOrderAction('desc'))
      else dispatch(actions.sortEmployeesOrderAction('asc'))
   }

   const handleSelectElement = (id) => {
      if(selected.indexOf(id) === -1) dispatch(actions.selectNewElementAction(id))
      if(selected.indexOf(id) > -1) dispatch(actions.unselectElementAction(id))
   }

   const handleSelectAllElements = () => {
      dispatch(actions.toggleSelectAllAction(!checkSelectAll))

      if(!checkSelectAll) {
         data.map(employee => {
            if(!selected.includes(employee.id)) {
               return dispatch(actions.selectNewElementAction(employee.id))
            } 
         })
      } else {
         data.map(employee => {
            if(selected.includes(employee.id)) {
               return dispatch(actions.unselectElementAction(employee.id))
            } 
         })
      }
   }

   const handleSetPagination = (event) => {
      dispatch(actions.paginationValueAction(event.target.value))
      setCurrentPage(1)
   }

   const handleDeleteSearchingElements = (selectedIds) => {
      dispatch(actions.deleteSearchingElementsAction(selectedIds))
   }

   currentData.sort(compare)

   return (
      <S.Wrapper>
         {!userEmployees
            ?  <div>LOADING</div>
            :  <> 
                  <TableActions
                     selectOptions={[
                        {value: 'id', label: 'Employee ID'},
                        {value: 'name', label: 'Name'},
                        {value: 'surname', label: 'Surname'},
                        {value: 'phone', label: 'Phone'},
                        {value: 'email', label: 'Email'},
                        {value: 'createdAt', label: 'Created At Date'},
                        {value: 'updatedAt', label: 'Updated At Date'},
                     ]}
                     textButton='Reload Employees'
                     sortBy={sortBy}
                     sortOrder={sortOrder}
                     reload={reload}
                     handleReloadData={handleReloadEmployees}
                     handleSortOrder={handleSortOrder}
                     handleSortBy={handleSortBy}
                  />        
                  <TableToolbar
                     selected={selected} 
                     clearSelectedAmount={clearSelectedAmount}
                     handleDeleteSearchingElements={handleDeleteSearchingElements}
                  />
                  <EmployeesTable
                     pageUserEmployees={currentData}
                     checkSelectAll={checkSelectAll}
                     markedEmployee={markedEmployee}
                     selected={selected}
                     filter={filter}
                     handleMarkEmployee={handleMarkEmployee}
                     handleSelectElement={handleSelectElement}
                     handleSelectAllElements={handleSelectAllElements}
                     handleDeleteSearchingElements={handleDeleteSearchingElements}
                  />
                  <Pagination
                     dataPerPage={dataPerPage} 
                     totalDataAmount={data.length} 
                     currentPage={currentPage}
                     paginationValue={pagination}
                     paginate={paginate}
                     handleSetPagination={handleSetPagination}
                  />
               </> 
         }
      </S.Wrapper>
   )
}
 
export default EmployeesTableContainer;