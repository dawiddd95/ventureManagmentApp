import React from 'react';
import * as S from './StyledLoginAsButtons';

const LoginAsButtons = ({loginAs, handleOnClick}) => {
   return (  
      <S.LoginAsWrapper>
         Log in as: 
         <S.LoginAsButton
            selected_style={loginAs === 'manager'}
            onClick={() => handleOnClick('manager')}
         >
            Manager
         </S.LoginAsButton>
         <S.LoginAsButton 
            selected_style={loginAs === 'employee'}
            onClick={() => handleOnClick('employee')}
         >
            Employee
         </S.LoginAsButton>
      </S.LoginAsWrapper>
   );
}
 
export default LoginAsButtons;
