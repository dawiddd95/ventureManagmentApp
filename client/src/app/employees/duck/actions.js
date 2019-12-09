import types from './types';

const addUserEmployeeAction = (item) => ({
   type: types.FETCH_USER_EMPLOYEES, item
})

const searchUserEmployeesAction = (item) => ({
   type: types.SEARCH_USER_EMPLOYEES, item
})

const filterAction = (item) => ({
   type: types.EMPLOYEES_FILTER, item
})

const sortEmployeesByAction = (item) => ({
   type: types.EMPLOYEES_SORT_BY, item
})

const sortEmployeesOrderAction = (item) => ({
   type: types.EMPLOYEES_SORT_ORDER, item
})

const selectNewElementAction = (item) => ({
   type: types.EMPLOYEES_SELECT_ELEMENT, item
}) 

const unselectElementAction = (item) => ({
   type: types.EMPLOYEES_UNSELECT_ELEMENT, item
})

const resetSelectedAction = (item) => ({
   type: types.EMPLOYEES_RESET_SELECTED, item
})

const toggleSelectAllAction = (item) => ({
   type: types.EMPLOYEES_TOGGLE_SELECT_ALL, item
})

const paginationValueAction = (item) => ({
   type: types.EMPLOYEES_PAGINATION_VALUE, item
})

const deleteSearchingElementsAction = (item) => ({
   type: types.EMPLOYEES_DELETE_SEARCHING_ELEMENTS, item
})


export default {
   addUserEmployeeAction,
   searchUserEmployeesAction,
   filterAction,
   sortEmployeesByAction,
   sortEmployeesOrderAction,
   selectNewElementAction,
   unselectElementAction,
   resetSelectedAction,
   toggleSelectAllAction,
   paginationValueAction,
   deleteSearchingElementsAction
}