import React from 'react';

import * as S from './StyledDisplayLoginPanel';

import ManagerLoginFormContainer from '../../../../containers/ManagerLoginFormContainer/ManagerLoginFormContainer';
import EmployeeLoginPanel from '../EmployeeLoginPanel/EmployeeLoginPanel';
import SocialLogin from '../SocialLogin/SocialLogin';


const DisplayLoginPanel = ({loginAs}) => {
   return (  
      <> 
         {loginAs === 'manager' ? <ManagerLoginFormContainer /> : <EmployeeLoginPanel />}
         {loginAs === 'manager' && (
            <S.StyledLink to='/auth/signup'>
               Create an account
            </S.StyledLink>        
         )}
         {loginAs === 'manager' && <SocialLogin />}
      </>
   );
}
 
export default DisplayLoginPanel;