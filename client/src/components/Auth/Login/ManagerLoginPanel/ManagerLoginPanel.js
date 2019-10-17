import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

import ManagerLoginPanelForm from '../ManagerLoginPanelForm/ManagerLoginPanelForm';

const ManagerLoginPanel = () => {  
   const [err, setErr] = React.useState(''); 
   const [state, setState] = React.useState({
      success: false, isChecked: false, isLoading: false
   });

   const handleOnSubmit = values => {
      setState({...state, isLoading: state.isLoading = true});

      if(state.isChecked) localStorage.setItem('user', values.email)

      axios.post('/api/auth/login', values)
      .then(res => {
         const {err, success, token} = res.data;
         
         if(success) localStorage.setItem('session', true);
         localStorage.setItem('token', token); 

         setErr(err);
         setState({
            ...state, 
            success: state.success = success, 
            isLoading: state.isLoading = false
         });
      })
   }

   const handleOnInput= () => {
      setErr('');
   }

   const handleOnChange = () => {
      setState({
         ...state, isChecked: !state.isChecked,
      });
   }

   return (  
      <>
         {state.success 
            ?  <Redirect to='/user/bookings' /> 
            :  <ManagerLoginPanelForm 
                  err={err}
                  state={state}
                  handleOnInput={handleOnInput} 
                  handleOnChange={handleOnChange}
                  handleOnSubmit={handleOnSubmit}   
               />
         }
      </>
   );
}
 
export default ManagerLoginPanel;