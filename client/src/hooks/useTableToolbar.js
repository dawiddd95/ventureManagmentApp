import React from 'react'
import {useDispatch} from 'react-redux'


export const useTableToolbar = (actions) => {
   const [openDialog, setOpenDialog] = React.useState(false)
   const dispatch = useDispatch()

   const clearSelectedAmount = () => {
      dispatch(actions.resetSelectedAction([]))
      dispatch(actions.toggleSelectAllAction(false))
   }

   const handleSetIsOpen = () => {
      setOpenDialog(true)
   }

   const handleOnCompleted = () => {
      setOpenDialog(false)
      clearSelectedAmount()
   }

   const handleCloseDialog = () => {
      setOpenDialog(false)
   }

   return [openDialog, handleSetIsOpen, handleOnCompleted, handleCloseDialog]
}