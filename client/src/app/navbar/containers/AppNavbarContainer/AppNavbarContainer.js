import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AppNavbar from '../../../../components/AppNavbar/AppNavbar/AppNavbar';

import actions from '../../duck/actions';

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