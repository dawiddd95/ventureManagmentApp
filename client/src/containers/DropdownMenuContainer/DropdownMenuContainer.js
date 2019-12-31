import React from 'react';
import {useDispatch} from 'react-redux';
import { useApolloClient } from "@apollo/react-hooks";

import DropdownMenu from '../../components/DropdownMenu/DropdownMenu';

const DropdownMenuContainer = () => {
   const client = useApolloClient();
   const dispatch = useDispatch();
   const [anchorEl, setAnchorEl] = React.useState(null);

   const logout = () => {
      client.resetStore();
      dispatch({type: 'RESET_STORE'})
      sessionStorage.removeItem('session');  
   }

   const handleClick = event => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };


   return (
      <DropdownMenu 
         anchorEl={anchorEl}
         logout={logout}
         handleClick={handleClick}
         handleClose={handleClose}
      />
   )
}
 
export default DropdownMenuContainer;