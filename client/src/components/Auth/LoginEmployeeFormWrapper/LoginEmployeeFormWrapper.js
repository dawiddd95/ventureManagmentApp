import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

import LoginEmployeeForm from '../LoginEmployeeForm/LoginEmployeeForm';

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
         {state.success ? <Redirect to='/user/bookings' /> : ( 
            <Formik
               component={props => (
                  <LoginEmployeeForm 
                     {...props} 
                     err={err}
                     state={state}
                     handleOnInput={handleOnInput} 
                  />
               )}
               initialValues={{
                  id: '',
                  password: ''
               }}
               validationSchema={Yup.object().shape({
                  id: Yup
                     .string()
                     .required('ID is required'),
                  password: Yup
                     .string()
                     .required('Password is required'),
               })}
               onSubmit={values => handleOnSubmit(values)}      
            />
         )}
      </div>
   );
}
 
export default LoginEmployeeFormWrapper;