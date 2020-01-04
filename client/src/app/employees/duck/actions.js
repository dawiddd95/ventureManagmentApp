import types from './types';

const addUserEmployeeAction = (item) => ({
   type: types.FETCH_USER_EMPLOYEES, item
})

const searchUserEmployeesAction = (item) => ({
   type: types.SEARCH_USER_EMPLOYEES, item
})

const clearEmployeesAction = (item) => ({
   type: types.EMPLOYEES_CLEAR, item
})

const sortElementsByAction = (item) => ({
   type: types.EMPLOYEES_SORT_BY, item
})

const sortElementsOrderAction = (item) => ({
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

const currentPageAction = (item) => ({
   type: types.EMPLOYEES_CURRENT_PAGE, item
})


export default {
   addUserEmployeeAction,
   searchUserEmployeesAction,
   clearEmployeesAction,
   sortElementsByAction,
   sortElementsOrderAction,
   selectNewElementAction,
   unselectElementAction,
   resetSelectedAction,
   toggleSelectAllAction,
   paginationValueAction,
   currentPageAction
}