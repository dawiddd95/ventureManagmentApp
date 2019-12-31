import React from 'react';

import LoginAsButtons from '../../components/Auth/Login/LoginAsButtons/LoginAsButtons';
import DisplayLoginPanel from '../../components/Auth/Login/DisplayLoginPanel/DisplayLoginPanel';

const LoginContainer = () => {
   const [loginAs, setLoginAs] = React.useState('manager');

   const handleOnClick = (loginAs) => {
      setLoginAs(loginAs)
   }

   return (
      <>
         <LoginAsButtons 
            loginAs={loginAs}
            handleOnClick={handleOnClick}
         />
         <DisplayLoginPanel
            loginAs={loginAs}
         />
      </>
   )
}
 
export default LoginContainer;