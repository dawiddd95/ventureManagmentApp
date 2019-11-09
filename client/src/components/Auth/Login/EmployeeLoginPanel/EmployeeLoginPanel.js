import React from 'react';
import {Redirect} from 'react-router-dom';

import EmployeeLoginPanelForm from '../EmployeeLoginPanelForm/EmployeeLoginPanelForm';

const LoginEmployeeFormWrapper = () => { 
   const [err, setErr] = React.useState(''); 
   const [state, setState] = React.useState({
      success: false, isLoading: false
   });

   const handleOnSubmit = values => {
      console.log(values);
      //tutaj bylby setState()
   }

   const handleOnInput= () => {
      setErr('');
   }

   return (  
      <div>
         {state.success 
            ?  <Redirect to='/user/bookings' /> 
            :  <EmployeeLoginPanelForm 
                  err={err}
                  state={state}
                  handleOnInput={handleOnInput} 
                  handleOnSubmit={handleOnSubmit}
               />   
         }
      </div>
   );
}
 
export default LoginEmployeeFormWrapper;