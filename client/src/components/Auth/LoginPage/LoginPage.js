import React from 'react';
import * as S from './StyledLoginPage';

import LoginAsManager from '../LogisAsManager/LoginAsManager';
import LoginEmployeeFormWrapper from '../LoginEmployeeFormWrapper/LoginEmployeeFormWrapper';

const LoginPage = () => {
   const [logIn, setLogIn] = React.useState('manager');

   return (  
      <S.Wrapper>
         <S.Content>
            <S.Header>
               Venture Managment App
            </S.Header>
            <S.LoginAs>
               Log in as: 
               <S.LoginAsItem 
                  isSelected={logIn === 'manager'}
                  onClick={() => setLogIn('manager')}
               >
                  Manager
               </S.LoginAsItem>
               <S.LoginAsItem 
                  isSelected={logIn === 'employee'}
                  onClick={() => setLogIn('employee')}
               >
                  Employee
               </S.LoginAsItem>
            </S.LoginAs>
            {logIn === 'manager' ? <LoginAsManager /> : <LoginEmployeeFormWrapper />}
         </S.Content>
      </S.Wrapper>
   );
}
 
export default LoginPage;