import actions from '../app/employees/duck/actions';

export const searchEmployees = (values, dispatch, userEmployees) => {
   const {
      id,
      name,
      surname,
      phone,
      email,
      createdAtStart,
      createdAtEnd,
      privileges,
      active
   } = values

   let filterResult = []
   let filteringArray = userEmployees
   
   if(id !== '') {
      filterResult = filteringArray.filter(element => {
         return element.id === id
      })
      filteringArray = filterResult;
   }

   if(name !== '') {
      filterResult = filteringArray.filter(element => {
         return element.name.toLowerCase().includes(name.toLowerCase())
      })
      filteringArray = filterResult;
   }

   if(surname !== '') {
      filterResult = filteringArray.filter(element => {
         return element.surname.toLowerCase().includes(surname.toLowerCase())
      })
      filteringArray = filterResult;
   }

   if(phone !== '') {
      filterResult = filteringArray.filter(element => {
         return element.phone.includes(phone)
      })
      filteringArray = filterResult;
   }

   if(email !== '') {
      filterResult = filteringArray.filter(element => {
         return element.email.toLowerCase().includes(email.toLowerCase())
      })
      filteringArray = filterResult;
   }

   if(createdAtStart !== '') {
      filterResult = filteringArray.filter(element => {
         return element.createdAt >= createdAtStart
      })
      filteringArray = filterResult;
   }

   if(createdAtEnd !== '') {
      filterResult = filteringArray.filter(element => {
         return element.createdAt <= createdAtEnd
      })
      filteringArray = filterResult;
   }

   if(privileges !== null) {
      const privilegesArray = privileges.map(element => {
         if(element.value.indexOf(element.value) !== -1) return element.value
      })

      const employees = filteringArray.map(employee => {   
         const isValid = privilegesArray.every(privilege => {
            return employee[privilege] === true
         })

         if(isValid) return employee
      })

      filterResult = employees.filter(element => {
         return typeof element !== 'undefined'
      })
      filteringArray = filterResult;
   }

   if(active !== null) {
      filterResult = filteringArray.filter(element => {
         return element.active === active.value
      })
      filteringArray = filterResult;
   }

   dispatch(actions.currentPageAction(1))
   dispatch(actions.toggleSelectAllAction(false))
   dispatch(actions.resetSelectedAction([]))
   dispatch(actions.searchUserEmployeesAction(filterResult))
}