import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import ForgotPasswordForm from '../ForgotPasswordForm/ForgotPasswordForm';

const ForgotPasswordFormWrapper = () => {
   const [state, setState] = React.useState({
      responseText: '', success: false, isLoading: false
   });

   const handleOnSubmit = values => {
      setState({...state, isLoading: state.isLoading = true});

      axios.post('/api/auth/forgot-password', values)
      .then(res => {
         const {text, success} = res.data;
         setState({
            ...state, 
            success: state.success = success, 
            responseText: state.responseText = text,
            isLoading: state.isLoading = false
         });
      })
   }

   const handleOnInput= () => {
      setState({
         ...state, responseText: state.responseText = '',
      });
   }

   return (  
      <Formik
         render={props => <ForgotPasswordForm 
            {...props} 
            state={state}
            handleOnInput={handleOnInput} 
         />}
         initialValues={{
            email: '',
         }}
         validationSchema={Yup.object().shape({
            email: Yup
               .string()
               .email()
               .required('Email is required'),
         })}
         onSubmit={values => handleOnSubmit(values)}
      />
   );
}
 
export default ForgotPasswordFormWrapper;