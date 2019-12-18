import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

import * as S from './StyledTableToolbar';
import icons from '../../assets/icons';
import Dialog from '../Dialog/Dialog';


const TableToolbar = ({selected, clearSelectedAmount, handleDeleteSearchingElements}) => {
   const [openDialog, setOpenDialog] = React.useState(false)

   const handleSetIsOpen = () => {
      setOpenDialog(true)
   }

   const handleOnCompleted = (selectedIds) => {
      setOpenDialog(false)
      clearSelectedAmount()
      handleDeleteSearchingElements(selectedIds)
   }

   const handleCloseDialog = () => {
      setOpenDialog(false)
   }

   return (  
      <S.Wrapper hide={selected.length === 0 ? true : false}>
         <S.SelectedAmount>{selected.length} Selected</S.SelectedAmount>
            <Tooltip title="Delete Selected">
               <IconButton onClick={handleSetIsOpen} aria-label="delete">
                  <S.Img src={icons.bin} />
               </IconButton>
            </Tooltip>
            {openDialog && <Dialog
               title='Delete selected items?'
               text='Are you sure you want delete items with id: '
               selected={selected}
               handleOnCompleted={handleOnCompleted}
               handleCloseDialog={handleCloseDialog}
            />}
      </S.Wrapper>
   );
}
 
export default TableToolbar;