import React from 'react';
import * as S from './StyledLogin';

import LoginAsManager from './LoginAsManager/LoginAsManager';
import EmployeeLoginPanel from './EmployeeLoginPanel/EmployeeLoginPanel';

const Login = () => {
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
                  selected_style={logIn === 'manager'}
                  onClick={() => setLogIn('manager')}
               >
                  Manager
               </S.LoginAsItem>
               <S.LoginAsItem 
                  selected_style={logIn === 'employee'}
                  onClick={() => setLogIn('employee')}
               >
                  Employee
               </S.LoginAsItem>
            </S.LoginAs>
            {logIn === 'manager' ? <LoginAsManager /> : <EmployeeLoginPanel />}
         </S.Content>
      </S.Wrapper>
   );
}
 
export default Login;