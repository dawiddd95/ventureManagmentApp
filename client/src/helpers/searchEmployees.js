import actions from '../app/reservations/duck/actions';

export const searchEmployees = (values, dispatch, userEmployees) => {
   // sprawdzenie czy jest przywilej
   // mapowanie po tablicy privileges i odrazu findOne() jesli zwroci x > -1 to filtruj wedlug tego, jesli nie znajdzie 
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

   const privilegesArray = privileges.map(element => {
      if(element.value.indexOf(element.value) !== -1) return element.value
   })

   console.log(privilegesArray)

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

   if(privileges.length !== 0) {
      filterResult = filteringArray.filter(element => {
         privilegesArray.map(privilege => {
            return element[privilege] === true
         })
      })
   }

   if(active !== null) {
      filterResult = filteringArray.filter(element => {
         return element.active.value === active.value
      })
   }

   // Stworzyć dispatche
   dispatch(actions.filterAction(true))
   dispatch(actions.searchUserEmployeesAction(filterResult))
   dispatch(actions.toggleSelectAllAction(false))
   dispatch(actions.resetSelectedAction([]))
}