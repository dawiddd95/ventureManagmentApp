import React from 'react'
import {useDispatch} from 'react-redux'


export const useTableBody = (actions, TableElements, selectedElements, isSelectedAllElements) => {
   const dispatch = useDispatch()
   const [markedRow, setMarkedRow] = React.useState('')

   const data = [].concat(TableElements);

   const handleMarkRow = (id) => {
      if(markedRow === id) setMarkedRow('')
      else setMarkedRow(id)
   }

   const handleSelectElement = (id) => {
      if(selectedElements.indexOf(id) === -1) dispatch(actions.selectNewElementAction(id))
      if(selectedElements.indexOf(id) > -1) dispatch(actions.unselectElementAction(id))
   }

   const handleSelectAllElements = () => {
      dispatch(actions.toggleSelectAllAction(!isSelectedAllElements))

      if(!isSelectedAllElements) {
         data.map(element => {
            if(!selectedElements.includes(element.id)) {
               return dispatch(actions.selectNewElementAction(element.id))
            } 
         })
      } else {
         data.map(element => {
            if(selectedElements.includes(element.id)) {
               return dispatch(actions.unselectElementAction(element.id))
            } 
         })
      }
   }

   return [
      selectedElements,
      isSelectedAllElements,
      markedRow, 
      handleMarkRow, 
      handleSelectElement, 
      handleSelectAllElements,
   ]
}