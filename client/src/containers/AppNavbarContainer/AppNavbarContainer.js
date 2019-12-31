import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import actions from '../../app/navbar/duck/actions';

import AppNavbar from '../../components/AppNavbar/AppNavbar';


const AppNavbarContainer = ({avatar}) => {
   const dispatch = useDispatch();
   const menuVisibility = useSelector(state => state.menuVisibility);

   const handleChangeMenuVisibility = () => {
      dispatch(actions.changeMenuVisibilityAction(!menuVisibility))
   }

   return (  
      <>
         <AppNavbar
            avatar={avatar}
            visible={menuVisibility.visible}
            handleChangeMenuVisibility={handleChangeMenuVisibility}
         />
      </>
   );
}
 
export default AppNavbarContainer;